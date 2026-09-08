import React, { useState, useEffect } from "react";
import { TEAM_MEMBERS, TeamMember } from "../data/team";
import { MdClose, MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./styles/MindsBehind.css";

export const MindsBehind: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedMember(null);
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
              "TAKING PLEASURE IN YOUR WORK LEADS TO PERFECTION."
            </h2>
            <p className="minds-quote-author">— Aristotle</p>
          </div>

          <div className="minds-meta-badge">
            <span className="minds-badge-count">25 PEOPLE INTEGRATED</span>
            <span className="minds-badge-sub">WANT TO JOIN US?</span>
          </div>
        </div>

        {/* Spaced Organic Bubble Cloud (White Text Bubbles + Black & White Theme) */}
        <div className="minds-cloud-wrapper">
          {/* 1. Created in 2023 */}
          <div className="minds-bubble medium theme-white offset-up">
            <div className="minds-stat-content">
              <div className="minds-stat-lbl" style={{ fontSize: "10px" }}>Created in</div>
              <div className="minds-stat-val" style={{ fontSize: "22px" }}>2023</div>
            </div>
          </div>

          {/* Render all 13 Team Members + Stat Interspersing */}
          {TEAM_MEMBERS.map((member, idx) => {
            const isOffsetUp = idx % 2 === 1;
            const isOffsetDown = idx % 3 === 2;

            return (
              <React.Fragment key={member.id}>
                <div
                  className={`minds-bubble huge theme-brand ${isOffsetUp ? "offset-up" : isOffsetDown ? "offset-down" : ""}`}
                  onClick={() => setSelectedMember(member)}
                  title={`${member.name} — ${member.role}`}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`minds-bubble-img ${member.id === "rohit-sen" ? "fit-contain" : ""}`}
                  />
                  <div className="minds-bubble-tint" />
                  <div className="minds-bubble-overlay-content">
                    <span className="minds-bubble-name">{member.name}</span>
                  </div>
                </div>

                {/* Interspersed Stat Bubbles for aesthetic layout balance */}
                {idx === 1 && (
                  <div className="minds-bubble medium theme-white offset-down">
                    <div className="minds-stat-content">
                      <div className="minds-role-lbl" style={{ fontSize: "11px" }}>Visionary Minds</div>
                    </div>
                  </div>
                )}

                {idx === 3 && (
                  <div className="minds-bubble medium theme-white">
                    <div className="minds-stat-content">
                      <div className="minds-stat-val" style={{ fontSize: "20px" }}>5+ Yo</div>
                      <div className="minds-stat-lbl" style={{ fontSize: "9px" }}>Experiences</div>
                    </div>
                  </div>
                )}

                {idx === 6 && (
                  <div className="minds-bubble small theme-white offset-up">
                    <div className="minds-role-lbl">DEVELOPERS</div>
                  </div>
                )}

                {idx === 9 && (
                  <div className="minds-bubble medium theme-white">
                    <div className="minds-stat-content" style={{ fontSize: "11px", fontWeight: 800, color: "#000000" }}>
                      04 O'CLOCK<br /><span style={{ color: "#000000" }}>TECH</span>
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}

          {/* Row Stat Group */}
          <div className="minds-bubble medium theme-white offset-up">
            <div className="minds-stat-content">
              <div className="minds-stat-val" style={{ fontSize: "20px" }}>75+</div>
              <div className="minds-stat-lbl" style={{ fontSize: "9px" }}>Project Delivery</div>
            </div>
          </div>

          <div className="minds-bubble medium theme-white offset-down">
            <div className="minds-stat-content">
              <div className="minds-stat-val" style={{ fontSize: "18px" }}>24*7</div>
              <div className="minds-stat-lbl" style={{ fontSize: "9px" }}>Support</div>
            </div>
          </div>

          <div className="minds-bubble medium theme-white">
            <div className="minds-stat-content">
              <div className="minds-stat-val" style={{ fontSize: "20px" }}>60+</div>
              <div className="minds-stat-lbl" style={{ fontSize: "9px" }}>Global Clients</div>
            </div>
          </div>
        </div>
      </div>

      {/* Developer Short Description Modal */}
      {selectedMember && (
        <div className="minds-modal-backdrop" onClick={() => setSelectedMember(null)}>
          <div className="minds-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="minds-modal-close-btn"
              onClick={() => setSelectedMember(null)}
              title="Close bio"
            >
              <MdClose />
            </button>

            <div className="minds-modal-header">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className={`minds-modal-avatar ${selectedMember.id === "rohit-sen" ? "fit-contain" : ""}`}
              />
              <div>
                <h3 className="minds-modal-name">{selectedMember.name}</h3>
                <span className="minds-modal-role">{selectedMember.role}</span>
                <div className="minds-modal-tagline">{selectedMember.tagline}</div>
              </div>
            </div>

            <div className="minds-modal-body">
              <div className="minds-modal-bio-title">Developer Overview</div>
              <p className="minds-modal-bio">{selectedMember.bio}</p>

              <div className="minds-modal-bio-title" style={{ marginBottom: "10px" }}>
                Core Technologies & Expertise
              </div>
              <div className="minds-modal-skills">
                {selectedMember.skills.map((skill) => (
                  <span key={skill} className="minds-skill-pill">
                    {skill}
                  </span>
                ))}
              </div>

              {selectedMember.socials && Object.values(selectedMember.socials).some(Boolean) && (
                <div className="minds-modal-socials">
                  {selectedMember.socials.github && (
                    <a
                      href={selectedMember.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="minds-social-link"
                      title="GitHub Profile"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {selectedMember.socials.linkedin && (
                    <a
                      href={selectedMember.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="minds-social-link"
                      title="LinkedIn Profile"
                    >
                      <FaLinkedinIn />
                    </a>
                  )}
                  {selectedMember.socials.twitter && (
                    <a
                      href={selectedMember.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="minds-social-link"
                      title="Twitter Profile"
                    >
                      <FaTwitter />
                    </a>
                  )}
                  {selectedMember.socials.email && (
                    <a
                      href={`mailto:${selectedMember.socials.email}`}
                      className="minds-social-link"
                      title="Direct Email"
                    >
                      <MdEmail />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
