import React from "react";
import {
  FaLightbulb,
  FaCode,
  FaLaptopCode,
  FaServer,
  FaBrain,
  FaPalette,
  FaGlobeAmericas,
  FaRocket,
} from "react-icons/fa";
import "./styles/JourneySnakeDiagram.css";

export const JOURNEY_NODES = [
  {
    step: "01",
    title: "Foundation & Inception",
    desc: "Established 04 O'Clock Tech with a core commitment to zero technical compromise.",
    icon: FaLightbulb,
    color: "#E5C158",
    x: 80,
    y: 400,
    align: "bottom",
  },
  {
    step: "02",
    title: "Full-Stack Engineering",
    desc: "Mastered modern React, Next.js, TypeScript, and high-scale Node/Python architectures.",
    icon: FaCode,
    color: "#F59E0B",
    x: 220,
    y: 310,
    align: "bottom",
  },
  {
    step: "03",
    title: "Client Partnerships",
    desc: "Delivered custom web applications, SaaS platforms & enterprise digital solutions.",
    icon: FaLaptopCode,
    color: "#D97706",
    x: 360,
    y: 160,
    align: "right-top",
  },
  {
    step: "04",
    title: "Cloud & DevOps Scaling",
    desc: "Expanded AWS, Azure, microservices, Docker & automated CI/CD deployment pipelines.",
    icon: FaServer,
    color: "#10B981",
    x: 500,
    y: 320,
    align: "bottom",
  },
  {
    step: "05",
    title: "AI & Intelligence",
    desc: "Integrated Generative AI, LLM APIs, Vector RAG pipelines & autonomous AI Agents.",
    icon: FaBrain,
    color: "#059669",
    x: 640,
    y: 260,
    align: "bottom",
  },
  {
    step: "06",
    title: "UI/UX & WebGL Innovation",
    desc: "Created human-centered dark mode design systems & interactive 3D WebGL interfaces.",
    icon: FaPalette,
    color: "#06B6D4",
    x: 780,
    y: 120,
    align: "right-top",
  },
  {
    step: "07",
    title: "Global Enterprise Reach",
    desc: "Partnered with 100+ global brands across healthcare, fintech, e-commerce & SaaS.",
    icon: FaGlobeAmericas,
    color: "#0284C7",
    x: 920,
    y: 240,
    align: "right-top",
  },
  {
    step: "08",
    title: "Continuous Evolution",
    desc: "Expanding next-gen technology capabilities & engineering the future of digital products.",
    icon: FaRocket,
    color: "#3B82F6",
    x: 1060,
    y: 380,
    align: "bottom",
  },
];

export const JourneySnakeDiagram: React.FC = () => {
  return (
    <section className="journey-snake-section" id="journey">
      <div className="journey-snake-container">
        <div className="section-head">
          <span className="section-tag">OUR IT EXPERTISE ROADMAP</span>
          <h2 className="section-title">Our Journey</h2>
          <p className="section-desc">
            From foundation to AI innovation — our continuous engineering evolution in building modern technology.
          </p>
        </div>

        {/* Desktop Snake Roadmap Vector Canvas */}
        <div className="journey-desktop-canvas">
          <svg
            viewBox="0 0 1200 560"
            className="journey-snake-svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="snakeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E5C158" />
                <stop offset="25%" stopColor="#F59E0B" />
                <stop offset="45%" stopColor="#10B981" />
                <stop offset="70%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>

              <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Glowing Winding Serpentine Snake Path */}
            <path
              d="M 50,400 
                 C 110,400 150,310 220,310 
                 C 290,310 300,160 360,160 
                 C 420,160 440,320 500,320 
                 C 560,320 580,260 640,260 
                 C 700,260 720,120 780,120 
                 C 840,120 860,240 920,240 
                 C 980,240 1000,380 1060,380
                 L 1130,380"
              fill="none"
              stroke="url(#snakeGradient)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#glowFilter)"
            />

            {/* Arrowhead at path end */}
            <path
              d="M 1120,370 L 1145,380 L 1120,390 Z"
              fill="#3B82F6"
            />

            {/* Milestone Circular Nodes along the curve */}
            {JOURNEY_NODES.map((node) => {
              const IconComp = node.icon;
              return (
                <g key={node.step} className="journey-node-group">
                  {/* Outer Pulsing Aura Circle */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="26"
                    fill={node.color}
                    fillOpacity="0.2"
                    stroke={node.color}
                    strokeWidth="2"
                  />

                  {/* Inner Solid White Emblemed Circle */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="19"
                    fill="#ffffff"
                    stroke={node.color}
                    strokeWidth="4"
                    className="journey-circle-badge"
                  />

                  {/* Icon inside the circle */}
                  <foreignObject
                    x={node.x - 11}
                    y={node.y - 11}
                    width="22"
                    height="22"
                    style={{ pointerEvents: "none" }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: node.color,
                        fontSize: "14px",
                      }}
                    >
                      <IconComp />
                    </div>
                  </foreignObject>
                </g>
              );
            })}
          </svg>

          {/* HTML Text Overlay Cards positioned relative to SVG nodes */}
          <div className="journey-cards-overlay">
            {JOURNEY_NODES.map((node) => {
              const leftPercent = (node.x / 1200) * 100;
              const topPercent = (node.y / 560) * 100;

              return (
                <div
                  key={`text-${node.step}`}
                  className={`journey-text-card journey-align-${node.align}`}
                  style={{
                    left: `${leftPercent}%`,
                    top: `${topPercent}%`,
                  }}
                >
                  <div className="journey-card-step" style={{ color: node.color }}>
                    {node.step}
                  </div>
                  <h4 className="journey-card-title">{node.title}</h4>
                  <p className="journey-card-desc">{node.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Timeline Stack */}
        <div className="journey-mobile-stack">
          {JOURNEY_NODES.map((node) => {
            const IconComp = node.icon;
            return (
              <div key={`mob-${node.step}`} className="journey-mobile-item">
                <div
                  className="journey-mobile-badge"
                  style={{ borderColor: node.color, color: node.color }}
                >
                  <IconComp />
                </div>
                <div className="journey-mobile-content">
                  <span className="journey-mobile-step" style={{ color: node.color }}>
                    STEP {node.step}
                  </span>
                  <h4>{node.title}</h4>
                  <p>{node.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
