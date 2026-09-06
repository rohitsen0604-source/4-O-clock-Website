import React, { useState } from "react";
import {
  MdOutlineCode,
  MdOutlineFlashOn,
  MdOutlineLayers,
  MdOutlineShield,
  MdOutlineHeadsetMic,
} from "react-icons/md";
import { WHY_CHOOSE_US } from "../data/company";
import "./styles/WhyChooseUsDiagram.css";

const FEATURE_META = [
  {
    icon: <MdOutlineCode />,
    color: "#38BDF8",
    rgb: "56, 189, 248",
  },
  {
    icon: <MdOutlineFlashOn />,
    color: "#F59E0B",
    rgb: "245, 158, 11",
  },
  {
    icon: <MdOutlineLayers />,
    color: "#E5C158",
    rgb: "229, 193, 88",
  },
  {
    icon: <MdOutlineShield />,
    color: "#10B981",
    rgb: "16, 185, 129",
  },
  {
    icon: <MdOutlineHeadsetMic />,
    color: "#A855F7",
    rgb: "168, 85, 247",
  },
];

export const WhyChooseUsDiagram: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  // SVG Canvas dimensions
  const svgWidth = 1100;
  const svgHeight = 440;

  // Geometry parameters matching Screenshot 1
  const pillWidth = 460;
  const pillHeight = 52;
  const pillStartX = 40;
  const rowStartY = 45;
  const rowGap = 72;

  // Concentric Hub Center (Right side)
  const cxHub = 860;
  const cyHub = 200;

  // Arc Radii for 5 concentric rings (Innermost to Outermost)
  const arcRadii = [65, 95, 125, 155, 185];

  // Helper to get arc start point for item i on top of the arc ring (angle = -110deg)
  const getArcStartPoint = (index: number) => {
    const r = arcRadii[index];
    // Start angle at top of semicircle (~ -120deg)
    const angleRad = (-120 * Math.PI) / 180;
    const x = cxHub + r * Math.cos(angleRad);
    const y = cyHub + r * Math.sin(angleRad);
    return { x, y };
  };

  return (
    <section className="why-choose-us-section">
      <div className="section-head" style={{ marginBottom: "30px", textAlign: "center" }}>
        <span className="section-tag">THE 04 O'CLOCK DIFFERENCE</span>
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-desc">
          We combine enterprise engineering rigor with startup speed and aesthetic excellence.
        </p>
      </div>

      {/* Main Infographic Layout Canvas */}
      <div className="why-choose-canvas-wrapper">
        <div className="why-choose-canvas-inner" style={{ width: `${svgWidth}px` }}>
          
          {/* SVG Connecting Cables & Concentric Arc Rings Layer */}
          <svg
            className="why-choose-svg-layer"
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Laser Glow Filter */}
              <filter id="ringGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Connecting Wire Curves from Left Pills to Concentric Arcs */}
            {WHY_CHOOSE_US.map((_, i) => {
              const meta = FEATURE_META[i % FEATURE_META.length];
              const pillRightX = pillStartX + pillWidth;
              const pillCenterY = rowStartY + i * rowGap + pillHeight / 2;
              const arcStart = getArcStartPoint(i);
              const isActive = activeIdx === i;

              // Cubic Bezier cable path
              const cableD = `M ${pillRightX} ${pillCenterY} C ${pillRightX + 130} ${pillCenterY}, ${arcStart.x - 70} ${arcStart.y}, ${arcStart.x} ${arcStart.y}`;

              return (
                <g key={`cable-${i}`} className={`cable-group ${isActive ? "active" : ""}`}>
                  {/* Base Wire Track */}
                  <path
                    d={cableD}
                    stroke="rgba(255, 255, 255, 0.15)"
                    strokeWidth="2.5"
                    strokeDasharray="4 4"
                    fill="none"
                  />

                  {/* Active Laser Flow Line */}
                  <path
                    d={cableD}
                    stroke={meta.color}
                    strokeWidth={isActive ? "4" : "2.5"}
                    strokeDasharray="90 180"
                    fill="none"
                    className="cable-laser-flow"
                    filter="url(#ringGlow)"
                    style={{
                      opacity: isActive ? 1 : 0.65,
                    }}
                  />
                </g>
              );
            })}

            {/* Concentric Arc Rings around Right Hub (Screenshot 1 Layout) */}
            {WHY_CHOOSE_US.map((_, i) => {
              const meta = FEATURE_META[i % FEATURE_META.length];
              const r = arcRadii[i];
              const isActive = activeIdx === i;

              // SVG Semicircle Arc from -120deg to 120deg (sweep around right side)
              const startAngleRad = (-120 * Math.PI) / 180;
              const endAngleRad = (120 * Math.PI) / 180;

              const x1 = cxHub + r * Math.cos(startAngleRad);
              const y1 = cyHub + r * Math.sin(startAngleRad);
              const x2 = cxHub + r * Math.cos(endAngleRad);
              const y2 = cyHub + r * Math.sin(endAngleRad);

              const arcD = `M ${x1} ${y1} A ${r} ${r} 0 1 1 ${x2} ${y2}`;

              return (
                <g key={`arc-ring-${i}`} className={`arc-ring-group ${isActive ? "active" : ""}`}>
                  {/* Outer Concentric Arc Ring */}
                  <path
                    d={arcD}
                    stroke={meta.color}
                    strokeWidth={isActive ? "10" : "7"}
                    strokeLinecap="round"
                    fill="none"
                    style={{
                      transition: "all 0.35s ease",
                      filter: isActive
                        ? `drop-shadow(0 0 14px ${meta.color})`
                        : `drop-shadow(0 0 4px ${meta.color}55)`,
                      opacity: isActive ? 1 : 0.75,
                    }}
                  />
                </g>
              );
            })}
          </svg>

          {/* Left Side: Staggered Colored Pill Badges (Screenshot 1 Format) */}
          <div className="why-choose-pills-list">
            {WHY_CHOOSE_US.map((item, i) => {
              const meta = FEATURE_META[i % FEATURE_META.length];
              const isActive = activeIdx === i;
              const topY = rowStartY + i * rowGap;

              return (
                <div
                  key={item.title}
                  className={`why-choose-pill-badge ${isActive ? "active" : ""}`}
                  onMouseEnter={() => setActiveIdx(i)}
                  onClick={() => setActiveIdx(i)}
                  style={
                    {
                      top: `${topY}px`,
                      left: `${pillStartX}px`,
                      width: `${pillWidth}px`,
                      height: `${pillHeight}px`,
                      "--pill-color": meta.color,
                      "--pill-rgb": meta.rgb,
                    } as React.CSSProperties
                  }
                >
                  {/* Left Darker Number Box (01, 02, 03, 04, 05) */}
                  <div className="pill-number-box">
                    0{i + 1}
                  </div>

                  {/* Middle Title & Highlight Subtitle */}
                  <div className="pill-content-box">
                    <span className="pill-title">{item.title}</span>
                    <span className="pill-highlight">• {item.highlight}</span>
                  </div>

                  {/* Right Circle Icon Badge */}
                  <div className="pill-icon-circle">
                    {meta.icon}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Center Hub - Perfectly Centered at (cxHub, cyHub) */}
          <div
            className="why-choose-center-hub"
            style={{
              left: `${cxHub}px`,
              top: `${cyHub}px`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="hub-inner-emblem">
              <span className="hub-center-text">04</span>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Vertical Cards Stack (<900px) */}
      <div className="why-choose-mobile-list">
        {WHY_CHOOSE_US.map((item, i) => {
          const meta = FEATURE_META[i % FEATURE_META.length];
          return (
            <div
              key={`mob-why-${item.title}`}
              className="why-choose-mobile-card"
              style={{ borderLeftColor: meta.color }}
            >
              <div className="why-choose-mobile-card-head">
                <div
                  className="why-choose-mobile-icon-badge"
                  style={{ backgroundColor: `rgba(${meta.rgb}, 0.12)`, color: meta.color, borderColor: `rgba(${meta.rgb}, 0.3)` }}
                >
                  {meta.icon}
                </div>
                <div>
                  <span className="why-choose-mobile-num" style={{ color: meta.color }}>
                    0{i + 1} • THE 04 ADVANTAGE
                  </span>
                  <h4 className="why-choose-mobile-title">{item.title}</h4>
                </div>
              </div>
              <div className="why-choose-mobile-highlight" style={{ color: meta.color }}>
                • {item.highlight}
              </div>
              <p className="why-choose-mobile-desc">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

