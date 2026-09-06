import React, { useState } from "react";
import {
  MdOutlineExplore,
  MdOutlineAssignment,
  MdOutlinePalette,
  MdOutlineCode,
  MdOutlineFactCheck,
  MdOutlineRocketLaunch,
  MdOutlineAutoGraph,
} from "react-icons/md";
import { WORK_PROCESS } from "../data/company";
import "./styles/WorkProcessDiagram.css";

// Customized main titles for clean circular node layout
const PROCESS_NODE_META = [
  {
    titleLine: "DISCOVER & RESEARCH",
    icon: <MdOutlineExplore />,
    color: "#E5C158",
    rgb: "229, 193, 88",
  },
  {
    titleLine: "STRATEGY & PLAN",
    icon: <MdOutlineAssignment />,
    color: "#F59E0B",
    rgb: "245, 158, 11",
  },
  {
    titleLine: "UI/UX DESIGN",
    icon: <MdOutlinePalette />,
    color: "#38BDF8",
    rgb: "56, 189, 248",
  },
  {
    titleLine: "BUILD & ENGINE",
    icon: <MdOutlineCode />,
    color: "#F43F5E",
    rgb: "244, 63, 94",
  },
  {
    titleLine: "QA & TESTING",
    icon: <MdOutlineFactCheck />,
    color: "#A855F7",
    rgb: "168, 85, 247",
  },
  {
    titleLine: "PRODUCT LAUNCH",
    icon: <MdOutlineRocketLaunch />,
    color: "#10B981",
    rgb: "16, 185, 129",
  },
  {
    titleLine: "SCALE & MAINTAIN",
    icon: <MdOutlineAutoGraph />,
    color: "#14B8A6",
    rgb: "20, 184, 166",
  },
];

export const WorkProcessDiagram: React.FC = () => {
  const [activeNodeIndex, setActiveNodeIndex] = useState<number | null>(null);

  const stepsCount = WORK_PROCESS.length; // 7 steps
  const startX = 100;
  const stepX = 180;
  const svgWidth = startX * 2 + (stepsCount - 1) * stepX; // 1380px
  const svgHeight = 420;
  
  // Center Y Positions for top & bottom alternating rows
  const yTop = 120;
  const yBottom = 300;

  // Build fluid continuous S-curve wave connecting centers (01 -> 02 -> 03 -> 04 -> 05 -> 06 -> 07)
  let waveD = `M ${startX} ${yTop}`;
  for (let i = 0; i < stepsCount - 1; i++) {
    const x1 = startX + i * stepX;
    const y1 = i % 2 === 0 ? yTop : yBottom;
    const x2 = startX + (i + 1) * stepX;
    const y2 = (i + 1) % 2 === 0 ? yTop : yBottom;
    
    waveD += ` C ${x1 + stepX / 2} ${y1}, ${x1 + stepX / 2} ${y2}, ${x2} ${y2}`;
  }

  return (
    <section className="work-process-diagram-section">
      <div className="section-head" style={{ marginBottom: "30px", textAlign: "center" }}>
        <span className="section-tag">OUR METHODOLOGY</span>
        <h2 className="section-title">How We Work</h2>
        <p className="section-desc">
          A structured 7-step software delivery model engineered for speed, quality, and reliability.
        </p>
      </div>

      {/* Interlocking Circular Diagram Scroll Container */}
      <div className="process-diagram-wrapper">
        <div className="process-diagram-inner" style={{ width: `${svgWidth}px` }}>
          
          {/* SVG Connecting Wave Canvas */}
          <svg
            className="process-svg-canvas"
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="processWaveLaserGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E5C158" />
                <stop offset="20%" stopColor="#F59E0B" />
                <stop offset="40%" stopColor="#38BDF8" />
                <stop offset="60%" stopColor="#F43F5E" />
                <stop offset="80%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#14B8A6" />
              </linearGradient>

              <filter id="processGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Base Dashed Connector Track */}
            <path
              d={waveD}
              stroke="rgba(255, 255, 255, 0.14)"
              strokeWidth="3"
              strokeDasharray="6 6"
              fill="none"
            />

            {/* Animated Laser Stream */}
            <path
              d={waveD}
              stroke="url(#processWaveLaserGrad)"
              strokeWidth="4"
              strokeDasharray="140 280"
              fill="none"
              className="process-laser-line"
              filter="url(#processGlow)"
            />
          </svg>

          {/* 7 Circular Nodes Positioned Exactly Along the Wave */}
          <div className="process-nodes-container">
            {WORK_PROCESS.map((proc, i) => {
              const isTop = i % 2 === 0;
              const cx = startX + i * stepX;
              const cy = isTop ? yTop : yBottom;
              const meta = PROCESS_NODE_META[i];
              const isActive = activeNodeIndex === i;

              // Radius of outer ring = 75px (diameter 150px)
              const ringRadius = 75;
              const nodeLeft = cx - ringRadius;
              const nodeTop = cy - ringRadius;

              return (
                <div
                  key={proc.step}
                  className={`process-circle-node-card ${isTop ? "node-top" : "node-bottom"} ${isActive ? "active" : ""}`}
                  onMouseEnter={() => setActiveNodeIndex(i)}
                  onMouseLeave={() => setActiveNodeIndex(null)}
                  style={
                    {
                      left: `${nodeLeft}px`,
                      top: `${nodeTop}px`,
                      "--node-color": meta.color,
                      "--node-rgb": meta.rgb,
                    } as React.CSSProperties
                  }
                >
                  {/* Outer Concentric Ring (Screenshot 1 Format) */}
                  <div className="process-outer-ring">
                    
                    {/* STEP Badge Bubble Attached on Outer Ring */}
                    <div className="process-step-bubble">
                      STEP {proc.step}
                    </div>

                    {/* Inner Circle Node */}
                    <div className="process-inner-circle">
                      <div className="process-node-icon">{meta.icon}</div>
                      <div className="process-node-title-line">
                        {meta.titleLine}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Mobile Vertical Process Card Timeline (<900px) */}
      <div className="process-mobile-list">
        {WORK_PROCESS.map((proc, i) => {
          const meta = PROCESS_NODE_META[i];
          return (
            <div
              key={`mob-proc-${proc.step}`}
              className="process-mobile-card"
              style={{ borderLeftColor: meta.color }}
            >
              <div className="process-mobile-card-head">
                <div
                  className="process-mobile-badge"
                  style={{ backgroundColor: `rgba(${meta.rgb}, 0.12)`, color: meta.color, borderColor: `rgba(${meta.rgb}, 0.3)` }}
                >
                  {meta.icon}
                </div>
                <div>
                  <span className="process-mobile-step-tag" style={{ color: meta.color }}>
                    STEP {proc.step} • METHODOLOGY
                  </span>
                  <h4 className="process-mobile-title">{proc.title}</h4>
                </div>
              </div>
              <p className="process-mobile-desc">{proc.description}</p>
              {proc.deliverables && proc.deliverables.length > 0 && (
                <div className="process-mobile-deliverables">
                  <span>Deliverables:</span>
                  <ul>
                    {proc.deliverables.map((deliv) => (
                      <li key={deliv}>✓ {deliv}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

