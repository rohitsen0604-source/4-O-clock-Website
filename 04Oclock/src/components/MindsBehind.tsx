import React, { useState, useEffect } from "react";
import { DEV_THOUGHTS, DevThought } from "../data/thoughts";
import { MdClose } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa";
import "./styles/MindsBehind.css";

export const MindsBehind: React.FC = () => {
  const [selectedThought, setSelectedThought] = useState<DevThought | null>(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedThought(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="minds-section" id="team">
      <div className="minds-container">
        {/* Header & Quote Row */}
        <div className="minds-header-row">
          <div className="minds-quote-box">
            <span className="section-tag" style={{ marginBottom: "8px", display: "inline-block" }}>
              MINDS BEHIND 04 O'CLOCK
            </span>
            <h2 className="minds-quote-title">
              "TAKING PLEASURE IN YOUR WORK LEADS TO <span className="gold-highlight">PERFECTION.</span>"
            </h2>
            <p className="minds-quote-author">— Aristotle</p>
          </div>
        </div>

        {/* Spaced Organic Bubble Cloud (White Text Bubbles + Black & White Theme) */}
        <div className="minds-cloud-wrapper">
          {/* Render all 13 Dev Thoughts with Stat Bubbles Interspersed */}
          {DEV_THOUGHTS.map((thought, idx) => {
            const isOffsetUp = idx % 2 === 0;

            return (
              <React.Fragment key={thought.id}>
                <div
                  className={`minds-bubble huge theme-white minds-thought-bubble ${isOffsetUp ? "offset-up" : "offset-down"}`}
                  onClick={() => setSelectedThought(thought)}
                  title={`"${thought.thought}"`}
                >
                  <div className="minds-thought-inner">
                    <span className="minds-thought-badge">{thought.tag}</span>
                    <p className="minds-thought-text">“{thought.thought}”</p>
                    <span className="minds-thought-focus">{thought.focus}</span>
                  </div>
                </div>

                {/* Interspersed Stat Bubbles evenly between photo bubbles */}
                {idx === 0 && (
                  <div className="minds-bubble medium theme-white offset-down">
                    <div className="minds-stat-content">
                      <div className="minds-stat-lbl" style={{ fontSize: "10px" }}>Created in</div>
                      <div className="minds-stat-val" style={{ fontSize: "22px" }}>2023</div>
                    </div>
                  </div>
                )}

                {idx === 1 && (
                  <div className="minds-bubble medium theme-white offset-up">
                    <div className="minds-stat-content">
                      <div className="minds-role-lbl" style={{ fontSize: "11px" }}>Visionary Minds</div>
                    </div>
                  </div>
                )}

                {idx === 2 && (
                  <div className="minds-bubble medium theme-white offset-down">
                    <div className="minds-stat-content">
                      <div className="minds-stat-val" style={{ fontSize: "20px" }}>99.9%</div>
                      <div className="minds-stat-lbl" style={{ fontSize: "9px" }}>Uptime SLA</div>
                    </div>
                  </div>
                )}

                {idx === 3 && (
                  <div className="minds-bubble medium theme-white offset-up">
                    <div className="minds-stat-content">
                      <div className="minds-stat-val" style={{ fontSize: "20px" }}>5+ Yo</div>
                      <div className="minds-stat-lbl" style={{ fontSize: "9px" }}>Experiences</div>
                    </div>
                  </div>
                )}

                {idx === 4 && (
                  <div className="minds-bubble small theme-white offset-down">
                    <div className="minds-role-lbl">DEVELOPERS</div>
                  </div>
                )}

                {idx === 5 && (
                  <div className="minds-bubble medium theme-white offset-up">
                    <div className="minds-stat-content">
                      <div className="minds-role-lbl" style={{ fontSize: "11px" }}>AI & Cloud Solutions</div>
                    </div>
                  </div>
                )}

                {idx === 6 && (
                  <div className="minds-bubble medium theme-white offset-down">
                    <div className="minds-stat-content" style={{ fontSize: "11px", fontWeight: 800, color: "#000000" }}>
                      04 O'CLOCK<br /><span style={{ color: "#000000" }}>TECH</span>
                    </div>
                  </div>
                )}

                {idx === 7 && (
                  <div className="minds-bubble medium theme-white offset-up">
                    <div className="minds-stat-content">
                      <div className="minds-stat-val" style={{ fontSize: "20px" }}>75+</div>
                      <div className="minds-stat-lbl" style={{ fontSize: "9px" }}>Project Delivery</div>
                    </div>
                  </div>
                )}

                {idx === 8 && (
                  <div className="minds-bubble medium theme-white offset-down">
                    <div className="minds-stat-content">
                      <div className="minds-stat-val" style={{ fontSize: "20px" }}>100%</div>
                      <div className="minds-stat-lbl" style={{ fontSize: "9px" }}>Code Quality</div>
                    </div>
                  </div>
                )}

                {idx === 9 && (
                  <div className="minds-bubble medium theme-white offset-up">
                    <div className="minds-stat-content">
                      <div className="minds-stat-val" style={{ fontSize: "18px" }}>24*7</div>
                      <div className="minds-stat-lbl" style={{ fontSize: "9px" }}>Support</div>
                    </div>
                  </div>
                )}

                {idx === 10 && (
                  <div className="minds-bubble medium theme-white offset-down">
                    <div className="minds-stat-content">
                      <div className="minds-role-lbl" style={{ fontSize: "11px" }}>Global Reach</div>
                    </div>
                  </div>
                )}

                {idx === 11 && (
                  <div className="minds-bubble medium theme-white offset-up">
                    <div className="minds-stat-content">
                      <div className="minds-stat-val" style={{ fontSize: "20px" }}>60+</div>
                      <div className="minds-stat-lbl" style={{ fontSize: "9px" }}>Global Clients</div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* IT Mindset & Thought Insight Modal */}
      {selectedThought && (
        <div className="minds-modal-backdrop" onClick={() => setSelectedThought(null)}>
          <div className="minds-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="minds-modal-close-btn"
              onClick={() => setSelectedThought(null)}
              title="Close insight"
            >
              <MdClose />
            </button>

            <div className="minds-modal-header">
              <div className="minds-modal-icon-badge">
                <FaLightbulb />
              </div>
              <div>
                <span className="minds-modal-tag">{selectedThought.tag}</span>
                <span className="minds-modal-focus">{selectedThought.focus}</span>
              </div>
            </div>

            <h3 className="minds-modal-thought-quote">
              “{selectedThought.thought}”
            </h3>

            <div className="minds-modal-body">
              <div className="minds-modal-bio-title">Engineering Mindset & Philosophy</div>
              <p className="minds-modal-bio">{selectedThought.philosophy}</p>

              <div className="minds-modal-bio-title" style={{ marginBottom: "10px" }}>
                Guiding Principles
              </div>
              <div className="minds-modal-skills">
                {selectedThought.pillars.map((pillar) => (
                  <span key={pillar} className="minds-skill-pill">
                    {pillar}
                  </span>
                ))}
              </div>

              <div className="minds-modal-takeaway-box">
                <span className="minds-takeaway-lbl">KEY TAKEAWAY</span>
                <p className="minds-takeaway-text">{selectedThought.takeaway}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
