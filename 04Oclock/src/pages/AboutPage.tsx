import React from "react";
import { SEO } from "../components/SEO";
import { Link } from "../router";
import { ValuesInfographic } from "../components/ValuesInfographic";
import { WorkProcessDiagram } from "../components/WorkProcessDiagram";
import { WhyChooseUsDiagram } from "../components/WhyChooseUsDiagram";
import { MindsBehind } from "../components/MindsBehind";
import {
  MdArrowOutward,
  MdTrackChanges,
  MdVisibility,
  MdAutoAwesome,
} from "react-icons/md";
import "../components/styles/Pages.css";

export const AboutPage: React.FC = () => {
  return (
    <div className="page-wrapper">
      <SEO
        title="About Us — Technology Built Around Your Vision"
        description="Learn about 04 O'Clock Technologies: our team, journey, core values, engineering mission, and software delivery process."
      />

      {/* Hero */}
      <section className="page-hero">
        <div style={{ maxWidth: "var(--cMaxWidth)", width: "var(--cWidth)", margin: "0 auto" }}>
          <span className="section-tag">About 04 O'Clock Technologies</span>
          <h1 className="page-hero-title">ENGINEERING THE NEXT GENERATION OF SOFTWARE</h1>
          <p className="page-hero-subtitle">
            We build thoughtful digital products, scalable software architectures, and intelligent technology solutions that empower enterprise business growth.
          </p>
        </div>
      </section>

      {/* Who We Are & 3-Card Offset Grid */}
      <section className="section-container" style={{ padding: "60px 0 80px 0" }}>
        <div style={{ maxWidth: "var(--cMaxWidth)", width: "var(--cWidth)", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "48px",
              alignItems: "stretch",
            }}
          >
            {/* Left Block: Who We Are Overview */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span className="section-tag">Who We Are</span>
              <h2 style={{ fontSize: "clamp(28px, 3.8vw, 46px)", color: "#ffffff", fontWeight: 900, margin: "12px 0 20px 0", lineHeight: 1.15 }}>
                Built on Engineering Precision & Modern Speed
              </h2>
              <p style={{ fontSize: "16px", color: "#999", lineHeight: 1.7, marginBottom: "20px" }}>
                04 O'Clock Technologies is a modern technology company focused on software development, digital products, AI solutions, web & mobile applications, SaaS platforms, business automation, and strategic technology consulting.
              </p>
              <p style={{ fontSize: "15px", color: "#888", lineHeight: 1.7, marginBottom: "0" }}>
                We believe "04 O'Clock" represents the right time to build, innovate, and transform. We partner with companies that demand zero technical compromise, elegant UI/UX design, and infrastructure designed for scale.
              </p>
            </div>

            {/* Right Block: 3-Card Offset Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "20px",
                alignItems: "stretch",
              }}
            >
              {/* Left Stack: Our Mission & Our Vision */}
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {/* Card 1: Our Mission */}
                <div
                  className="mv-card mv-card-mission"
                  id="mission"
                  style={{ padding: "28px 24px", flex: 1 }}
                >
                  <div className="mv-top-accent"></div>

                  <div className="mv-header" style={{ marginBottom: "14px" }}>
                    <div className="mv-icon-box" style={{ width: "48px", height: "48px", fontSize: "22px", borderRadius: "14px" }}>
                      <MdTrackChanges />
                    </div>
                    <div className="mv-title-group">
                      <span className="mv-tag">OUR MISSION</span>
                      <h3 className="mv-title" style={{ fontSize: "18px" }}>Solving Complexity</h3>
                    </div>
                  </div>

                  <p className="mv-quote-body" style={{ fontSize: "13.5px", margin: "0 0 14px 0", fontStyle: "normal", color: "#dddddd", lineHeight: 1.6 }}>
                    "To build high-performance technology that solves real-world enterprise problems, eliminates operational friction, and creates measurable compounding business value globally."
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "12px" }}>
                    <span style={{ fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "20px", background: "rgba(229, 193, 88, 0.12)", color: "var(--accentColor)", border: "1px solid rgba(229, 193, 88, 0.25)" }}>
                      ✓ Scalable Architecture
                    </span>
                    <span style={{ fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "20px", background: "rgba(229, 193, 88, 0.12)", color: "var(--accentColor)", border: "1px solid rgba(229, 193, 88, 0.25)" }}>
                      ✓ Zero Friction UX
                    </span>
                    <span style={{ fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "20px", background: "rgba(229, 193, 88, 0.12)", color: "var(--accentColor)", border: "1px solid rgba(229, 193, 88, 0.25)" }}>
                      ✓ Business Impact
                    </span>
                  </div>
                </div>

                {/* Card 2: Our Vision */}
                <div
                  className="mv-card mv-card-vision"
                  id="vision"
                  style={{ padding: "28px 24px", flex: 1 }}
                >
                  <div className="mv-top-accent"></div>

                  <div className="mv-header" style={{ marginBottom: "14px" }}>
                    <div className="mv-icon-box" style={{ width: "48px", height: "48px", fontSize: "22px", borderRadius: "14px" }}>
                      <MdVisibility />
                    </div>
                    <div className="mv-title-group">
                      <span className="mv-tag">OUR VISION</span>
                      <h3 className="mv-title" style={{ fontSize: "18px" }}>Building The Future</h3>
                    </div>
                  </div>

                  <p className="mv-quote-body" style={{ fontSize: "13.5px", margin: "0 0 14px 0", fontStyle: "normal", color: "#dddddd", lineHeight: 1.6 }}>
                    "To become the trusted global technology catalyst for forward-thinking enterprises—leading the next era of intelligent software, cloud engineering, and digital innovation."
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "12px" }}>
                    <span style={{ fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "20px", background: "rgba(6, 182, 212, 0.12)", color: "#06B6D4", border: "1px solid rgba(6, 182, 212, 0.25)" }}>
                      ✓ AI-Driven Intelligence
                    </span>
                    <span style={{ fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "20px", background: "rgba(6, 182, 212, 0.12)", color: "#06B6D4", border: "1px solid rgba(6, 182, 212, 0.25)" }}>
                      ✓ Global Reach
                    </span>
                    <span style={{ fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "20px", background: "rgba(6, 182, 212, 0.12)", color: "#06B6D4", border: "1px solid rgba(6, 182, 212, 0.25)" }}>
                      ✓ Next-Gen Ecosystems
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Tall Card: Brand Philosophy */}
              <div
                className="mv-card mv-card-mission"
                style={{
                  padding: "32px 28px",
                  background: "#000000",
                  borderColor: "rgba(255, 255, 255, 0.12)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "520px",
                }}
              >
                <div className="mv-top-accent"></div>

                <div>
                  <div className="mv-header" style={{ marginBottom: "20px" }}>
                    <div className="mv-icon-box" style={{ width: "52px", height: "52px", fontSize: "24px", borderRadius: "14px" }}>
                      <MdAutoAwesome />
                    </div>
                    <div className="mv-title-group">
                      <span className="mv-tag">CORE PHILOSOPHY</span>
                      <h3 className="mv-title" style={{ fontSize: "22px" }}>Brand Philosophy & Ethos</h3>
                    </div>
                  </div>

                  {/* Section 1: Precision */}
                  <div style={{ marginBottom: "18px" }}>
                    <h4 style={{ fontSize: "13px", color: "var(--accentColor)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px" }}>
                      ⏰ Precision & Momentum
                    </h4>
                    <p style={{ fontSize: "13.5px", color: "#d0d0d0", lineHeight: 1.6, margin: 0 }}>
                      The clock symbolizes non-stop momentum, technical precision, and execution speed. "04 O'Clock" marks the golden hour of supreme clarity—when vision turns into actionable reality.
                    </p>
                  </div>

                  {/* Section 2: 4 Pillars */}
                  <div style={{ marginBottom: "18px" }}>
                    <h4 style={{ fontSize: "13px", color: "var(--accentColor)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>
                      ⚡ 4 Pillars of Excellence
                    </h4>
                    <div className="responsive-grid-2" style={{ gap: "8px" }}>
                      <div style={{ padding: "8px 10px", background: "rgba(255, 255, 255, 0.04)", borderRadius: "8px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                        <div style={{ fontSize: "12px", fontWeight: 800, color: "#fff" }}>1. Design</div>
                        <div style={{ fontSize: "11px", color: "#aaa", marginTop: "1px" }}>Human-centered UI</div>
                      </div>
                      <div style={{ padding: "8px 10px", background: "rgba(255, 255, 255, 0.04)", borderRadius: "8px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                        <div style={{ fontSize: "12px", fontWeight: 800, color: "#fff" }}>2. Speed</div>
                        <div style={{ fontSize: "11px", color: "#aaa", marginTop: "1px" }}>Rapid velocity</div>
                      </div>
                      <div style={{ padding: "8px 10px", background: "rgba(255, 255, 255, 0.04)", borderRadius: "8px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                        <div style={{ fontSize: "12px", fontWeight: 800, color: "#fff" }}>3. Security</div>
                        <div style={{ fontSize: "11px", color: "#aaa", marginTop: "1px" }}>Enterprise grade</div>
                      </div>
                      <div style={{ padding: "8px 10px", background: "rgba(255, 255, 255, 0.04)", borderRadius: "8px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                        <div style={{ fontSize: "12px", fontWeight: 800, color: "#fff" }}>4. Scale</div>
                        <div style={{ fontSize: "11px", color: "#aaa", marginTop: "1px" }}>High availability</div>
                      </div>
                    </div>
                  </div>

                  <p style={{ fontSize: "13px", color: "#aaaaaa", lineHeight: 1.55, marginBottom: "16px" }}>
                    We refuse to build fragile software. Every line of code, cloud architecture, and user workflow is crafted to endure, scale seamlessly, and generate high compounding ROI.
                  </p>
                </div>

                <div
                  style={{
                    padding: "16px 20px",
                    borderRadius: "14px",
                    backgroundColor: "rgba(0, 0, 0, 0.75)",
                    borderLeft: "4px solid var(--accentColor)",
                    border: "1px solid rgba(229, 193, 88, 0.3)",
                    borderLeftWidth: "4px",
                    fontSize: "13.5px",
                    fontWeight: 800,
                    color: "#ffffff",
                    letterSpacing: "0.5px",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.6)",
                    marginTop: "10px",
                  }}
                >
                  "IT'S TIME TO BUILD. YOUR FUTURE STARTS HERE."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minds Behind 04 O'Clock — Interactive Packed Bubble Cloud */}
      <MindsBehind />

      {/* Core Values Infographic */}
      <ValuesInfographic />

      {/* How We Work Process Diagram */}
      <WorkProcessDiagram />

      {/* Why Choose Us Infographic Diagram */}
      <WhyChooseUsDiagram />

      {/* CTA */}
      <div style={{ maxWidth: "var(--cMaxWidth)", width: "var(--cWidth)", margin: "0 auto" }}>
        <div className="cta-banner">
          <h3>Ready to Build What's Next?</h3>
          <p>
            Let's discuss your technology requirements, project roadmap, or software challenge.
          </p>
          <Link to="/contact" className="btn-primary">
            Start a Conversation <MdArrowOutward />
          </Link>
        </div>
      </div>
    </div>
  );
};
