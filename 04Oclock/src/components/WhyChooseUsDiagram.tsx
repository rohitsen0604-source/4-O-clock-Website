import React, { useState } from "react";
import {
  MdOutlineHeadsetMic,
  MdOutlineCode,
  MdOutlinePeople,
  MdOutlineTrendingUp,
  MdOutlinePublic,
  MdOutlineLightbulb,
} from "react-icons/md";
import "./styles/WhyChooseUsDiagram.css";

// 04 O'Clock Why Choose Us 3D Question Mark Diagram

export interface WhyChoosePillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  side: "left" | "right";
  icon: React.ReactNode;
  // SVG Arrow Coordinates (startX, startY -> targetX, targetY)
  line: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  };
}

export const WHY_CHOOSE_PILLARS: WhyChoosePillar[] = [
  // Left Side Callouts (pointing to character)
  {
    id: "support",
    title: "CLIENT SUPPORT",
    subtitle: "24/7 SLA Guarantees",
    description: "Round-the-clock dedicated technical support, continuous monitoring & proactive system health telemetry.",
    side: "left",
    icon: <MdOutlineHeadsetMic />,
    line: { x1: 290, y1: 170, x2: 440, y2: 210 },
  },
  {
    id: "strategy",
    title: "OUR STRATEGY",
    subtitle: "Zero Technical Debt",
    description: "Agile sprints, reusable modular design tokens, robust microservices & enterprise clean architecture.",
    side: "left",
    icon: <MdOutlineCode />,
    line: { x1: 290, y1: 300, x2: 410, y2: 330 },
  },
  {
    id: "team",
    title: "EXPERT TEAM",
    subtitle: "Senior Full-Stack Talent",
    description: "Engineered by senior software architects, UI/UX strategists, AI experts & DevOps leaders.",
    side: "left",
    icon: <MdOutlinePeople />,
    line: { x1: 290, y1: 430, x2: 385, y2: 440 },
  },

  // Right Side Callouts (pointing to question mark)
  {
    id: "growth",
    title: "MORE GROWTH",
    subtitle: "Rapid Delivery & Speed",
    description: "Accelerate time-to-market by up to 40% with pre-tested scalable modules & high-conversion engineering.",
    side: "right",
    icon: <MdOutlineTrendingUp />,
    line: { x1: 810, y1: 170, x2: 660, y2: 165 },
  },
  {
    id: "reach",
    title: "MORE REACH",
    subtitle: "Bank-Grade Security",
    description: "Global multi-region cloud deployment, strict data privacy compliance & scalable enterprise infrastructure.",
    side: "right",
    icon: <MdOutlinePublic />,
    line: { x1: 810, y1: 300, x2: 680, y2: 290 },
  },
  {
    id: "ideas",
    title: "CREATIVE IDEAS",
    subtitle: "Full Product Ownership",
    description: "Custom digital products, 3D WebGL features, tailormade UX innovations & 100% intellectual property ownership.",
    side: "right",
    icon: <MdOutlineLightbulb />,
    line: { x1: 810, y1: 430, x2: 630, y2: 440 },
  },
];

export const WhyChooseUsDiagram: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const svgWidth = 1100;
  const svgHeight = 560;

  return (
    <section className="why-choose-section">
      {/* Background Lighting & Glow */}
      <div className="why-choose-bg-glow" />

      <div style={{ maxWidth: "var(--cMaxWidth)", width: "var(--cWidth)", margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Section Heading */}
        <div className="why-choose-head">
          <span className="why-choose-tag">THE 04 O'CLOCK DIFFERENCE</span>
          <h2 className="why-choose-title">
            WHY <span className="why-choose-title-highlight">CHOOSE US?</span>
          </h2>
          <p className="why-choose-desc">
            We combine enterprise engineering rigor with startup speed and aesthetic excellence.
          </p>
        </div>

        {/* Desktop Interactive Graphic Canvas */}
        <div className="why-choose-canvas-wrapper">
          <div className="why-choose-canvas" style={{ width: `${svgWidth}px`, height: `${svgHeight}px` }}>
            
            {/* SVG Pointer Lines & Arrowheads Layer */}
            <svg
              className="why-choose-svg"
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Arrowhead Marker */}
                <marker
                  id="arrow-head"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#ffffff" />
                </marker>
                <marker
                  id="arrow-head-active"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="8"
                  markerHeight="8"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#E5C158" />
                </marker>
              </defs>

              {WHY_CHOOSE_PILLARS.map((p) => {
                const isActive = activeId === p.id;
                return (
                  <g key={`line-${p.id}`}>
                    {/* Shadow / Base Line */}
                    <line
                      x1={p.line.x1}
                      y1={p.line.y1}
                      x2={p.line.x2}
                      y2={p.line.y2}
                      stroke={isActive ? "#E5C158" : "rgba(255, 255, 255, 0.4)"}
                      strokeWidth={isActive ? "2.5" : "1.5"}
                      markerEnd={isActive ? "url(#arrow-head-active)" : "url(#arrow-head)"}
                      style={{ transition: "all 0.3s ease" }}
                    />
                    {/* Connection Point Pulse Dot */}
                    <circle
                      cx={p.line.x2}
                      cy={p.line.y2}
                      r={isActive ? 6 : 4}
                      fill={isActive ? "#E5C158" : "#ffffff"}
                      style={{ transition: "all 0.3s ease" }}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Central 3D Question Mark & Orange Thinking Figure Asset */}
            <div className="why-choose-center-graphic">
              <img
                src="/images/why_choose_us_figure.jpg"
                alt="Why Choose Us 3D Question Mark Figure"
                className="why-choose-3d-img"
              />
            </div>

            {/* Left Side Callout Cards */}
            <div className="why-choose-col why-choose-left-col">
              {WHY_CHOOSE_PILLARS.filter((p) => p.side === "left").map((p) => {
                const isActive = activeId === p.id;
                return (
                  <div
                    key={p.id}
                    className={`why-choose-card ${isActive ? "active" : ""}`}
                    onMouseEnter={() => setActiveId(p.id)}
                    onMouseLeave={() => setActiveId(null)}
                    onClick={() => setActiveId(activeId === p.id ? null : p.id)}
                  >
                    <div className="why-choose-card-head">
                      <span className="why-choose-card-icon">{p.icon}</span>
                      <div>
                        <h3 className="why-choose-card-title">{p.title}</h3>
                        <span className="why-choose-card-sub">{p.subtitle}</span>
                      </div>
                    </div>
                    <p className="why-choose-card-desc">{p.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Right Side Callout Cards */}
            <div className="why-choose-col why-choose-right-col">
              {WHY_CHOOSE_PILLARS.filter((p) => p.side === "right").map((p) => {
                const isActive = activeId === p.id;
                return (
                  <div
                    key={p.id}
                    className={`why-choose-card ${isActive ? "active" : ""}`}
                    onMouseEnter={() => setActiveId(p.id)}
                    onMouseLeave={() => setActiveId(null)}
                    onClick={() => setActiveId(activeId === p.id ? null : p.id)}
                  >
                    <div className="why-choose-card-head">
                      <span className="why-choose-card-icon">{p.icon}</span>
                      <div>
                        <h3 className="why-choose-card-title">{p.title}</h3>
                        <span className="why-choose-card-sub">{p.subtitle}</span>
                      </div>
                    </div>
                    <p className="why-choose-card-desc">{p.description}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Mobile & Tablet Responsive Fallback View (< 1000px) */}
        <div className="why-choose-mobile-view">
          <div className="why-choose-mobile-center-img-box">
            <img
              src="/images/why_choose_us_figure.jpg"
              alt="Why Choose Us 3D Figure"
              className="why-choose-mobile-3d-img"
            />
          </div>

          <div className="why-choose-mobile-grid">
            {WHY_CHOOSE_PILLARS.map((p) => (
              <div key={`mob-${p.id}`} className="why-choose-mobile-card">
                <div className="why-choose-mobile-icon-box">{p.icon}</div>
                <div>
                  <h3 className="why-choose-mobile-title">{p.title}</h3>
                  <span className="why-choose-mobile-sub">{p.subtitle}</span>
                  <p className="why-choose-mobile-desc">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
