import React, { useState } from "react";
import {
  MdLightbulb,
  MdShield,
  MdVerified,
  MdStar,
  MdVisibility,
  MdSchool,
  MdTrendingUp,
} from "react-icons/md";
import { CORE_VALUES } from "../data/company";
import "./styles/ValuesInfographic.css";

const VALUE_ICONS: Record<string, React.ReactNode> = {
  MdLightbulb: <MdLightbulb />,
  MdShield: <MdShield />,
  MdVerified: <MdVerified />,
  MdStar: <MdStar />,
  MdVisibility: <MdVisibility />,
  MdSchool: <MdSchool />,
  MdTrendingUp: <MdTrendingUp />,
};

// Curated theme palette matching 04 O'Clock Tech aesthetic
const VALUE_THEMES = [
  { color: "#E5C158", rgb: "229, 193, 88", tag: "INNOVATION" },       // Gold Accent
  { color: "#38BDF8", rgb: "56, 189, 248", tag: "INTEGRITY" },        // Tech Cyan
  { color: "#10B981", rgb: "16, 185, 129", tag: "OWNERSHIP" },        // Emerald Green
  { color: "#F43F5E", rgb: "244, 63, 94", tag: "QUALITY" },          // Crimson Rose
  { color: "#A855F7", rgb: "168, 85, 247", tag: "TRANSPARENCY" },     // Deep Purple
  { color: "#F59E0B", rgb: "245, 158, 11", tag: "LEARNING" },         // Bright Amber
  { color: "#14B8A6", rgb: "20, 184, 166", tag: "SUCCESS" },          // Neon Teal
];

export const ValuesInfographic: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // SVG Geometry constants
  const itemsCount = CORE_VALUES.length; // 7 items
  const startX = 60;
  const stepX = 180;
  const svgWidth = startX + itemsCount * stepX; // 60 + 1260 = 1320
  const svgHeight = 440;
  const yMid = 200;
  const archHeight = 95;
  const archRadiusX = stepX / 2; // 90

  // Build the complete continuous wave path for the auto-playing laser glow line
  const wavePathSegments = CORE_VALUES.map((_, i) => {
    const cx = startX + i * stepX + archRadiusX;
    const endX = cx + archRadiusX;
    const isTopArch = i % 2 === 0;
    const sweep = isTopArch ? 1 : 0;
    
    if (i === 0) {
      const startXPoint = startX;
      return `M ${startXPoint} ${yMid} A ${archRadiusX} ${archHeight} 0 0 ${sweep} ${endX} ${yMid}`;
    }
    return `A ${archRadiusX} ${archHeight} 0 0 ${sweep} ${endX} ${yMid}`;
  }).join(" ");

  return (
    <section className="values-infographic-section">
      <div className="section-head" style={{ marginBottom: "40px", textAlign: "center" }}>
        <span className="section-tag">CORE PRINCIPLES</span>
        <h2 className="section-title">Our Values</h2>
        <p className="section-desc">
          Core principles that guide our code quality, team culture, and client relationships.
        </p>
      </div>

      {/* Infographic Scrollable Container */}
      <div className="values-canvas-wrapper">
        <div className="values-canvas-inner" style={{ width: `${svgWidth}px` }}>
          
          {/* SVG Winding Wave & Arch Canvas */}
          <svg
            className="values-svg-layer"
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Continuous Wave Laser Gradient */}
              <linearGradient id="waveLaserGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E5C158" stopOpacity="1" />
                <stop offset="20%" stopColor="#38BDF8" stopOpacity="1" />
                <stop offset="40%" stopColor="#10B981" stopOpacity="1" />
                <stop offset="60%" stopColor="#F43F5E" stopOpacity="1" />
                <stop offset="80%" stopColor="#A855F7" stopOpacity="1" />
                <stop offset="100%" stopColor="#14B8A6" stopOpacity="1" />
              </linearGradient>

              {/* Glowing Filters */}
              <filter id="laserGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* 1. Underlying Dashed Wave Track */}
            <path
              d={wavePathSegments}
              stroke="rgba(255, 255, 255, 0.12)"
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
            />

            {/* 2. AUTO-PLAY CONTINUOUS LOOPING LASER LINE */}
            <path
              d={wavePathSegments}
              stroke="url(#waveLaserGradient)"
              strokeWidth="3.5"
              strokeDasharray="160 320"
              fill="none"
              className="values-auto-play-line"
              filter="url(#laserGlow)"
            />

            {/* 3. Individual Colorful Arches & Vertical Dashed Terminals per Node */}
            {CORE_VALUES.map((_, i) => {
              const theme = VALUE_THEMES[i % VALUE_THEMES.length];
              const leftX = startX + i * stepX;
              const rightX = leftX + stepX;
              const isTopArch = i % 2 === 0;
              const sweep = isTopArch ? 1 : 0;
              const archD = `M ${leftX} ${yMid} A ${archRadiusX} ${archHeight} 0 0 ${sweep} ${rightX} ${yMid}`;

              // Dashed vertical drop lines & terminal dots (matching Screenshot 1)
              const dropY = isTopArch ? yMid + 70 : yMid - 70;
              const isActive = activeIndex === i;

              return (
                <g key={`arch-${i}`} className={`values-arch-group ${isActive ? "active" : ""}`}>
                  {/* Colored Arch Segment */}
                  <path
                    d={archD}
                    stroke={theme.color}
                    strokeWidth={isActive ? "4.5" : "3"}
                    strokeLinecap="round"
                    fill="none"
                    style={{
                      transition: "stroke-width 0.3s ease, filter 0.3s ease",
                      filter: isActive ? `drop-shadow(0 0 12px ${theme.color})` : `drop-shadow(0 0 4px ${theme.color}66)`,
                    }}
                  />

                  {/* Left Dashed Vertical Line */}
                  <line
                    x1={leftX}
                    y1={yMid}
                    x2={leftX}
                    y2={dropY}
                    stroke={theme.color}
                    strokeWidth="1.5"
                    strokeDasharray="3 4"
                    strokeOpacity={isActive ? "0.9" : "0.5"}
                  />

                  {/* Left Terminal Circle Dot */}
                  <circle
                    cx={leftX}
                    cy={dropY}
                    r="4"
                    fill="#0b080c"
                    stroke={theme.color}
                    strokeWidth="2"
                  />

                  {/* For the final item, render right dashed line and terminal dot */}
                  {i === itemsCount - 1 && (
                    <>
                      <line
                        x1={rightX}
                        y1={yMid}
                        x2={rightX}
                        y2={dropY}
                        stroke={theme.color}
                        strokeWidth="1.5"
                        strokeDasharray="3 4"
                        strokeOpacity="0.5"
                      />
                      <circle
                        cx={rightX}
                        cy={dropY}
                        r="4"
                        fill="#0b080c"
                        stroke={theme.color}
                        strokeWidth="2"
                      />
                    </>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Value Card Nodes (Overlaid directly on top of the SVG Canvas) */}
          <div className="values-nodes-grid">
            {CORE_VALUES.map((val, i) => {
              const theme = VALUE_THEMES[i % VALUE_THEMES.length];
              const isTopArch = i % 2 === 0;
              const isActive = activeIndex === i;
              const iconNode = VALUE_ICONS[val.icon] || <MdStar />;

              return (
                <div
                  key={val.title}
                  className={`value-node-card ${isTopArch ? "top-arch" : "bottom-arch"} ${isActive ? "active" : ""}`}
                  onMouseEnter={() => setActiveIndex(i)}
                  onMouseLeave={() => setActiveIndex(null)}
                  style={
                    {
                      "--theme-color": theme.color,
                      "--theme-rgb": theme.rgb,
                    } as React.CSSProperties
                  }
                >
                  {/* Central Icon Circle Container (Inside/Above Arch) */}
                  <div className="value-icon-circle-wrapper">
                    <div className="value-icon-circle">
                      {iconNode}
                    </div>
                  </div>

                  {/* Content Container (Title + Description) */}
                  <div className="value-node-content">
                    <span className="value-node-number">0{i + 1}</span>
                    <h3 className="value-node-title">{val.title}</h3>
                    <p className="value-node-desc">{val.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
