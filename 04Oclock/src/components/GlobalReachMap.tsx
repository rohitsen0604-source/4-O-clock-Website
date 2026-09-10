import React from "react";
import { FaGlobe, FaMapMarkerAlt, FaServer } from "react-icons/fa";
import "./styles/GlobalReachMap.css";

export interface GlobalReachMapProps {
  hideHeader?: boolean;
}

export const GlobalReachMap: React.FC<GlobalReachMapProps> = () => {
  return (
    <section className="global-reach-section" id="global-reach">
      <div className="global-reach-container">
        <div className="global-reach-split-grid">
          {/* Left Column: Section Text & Highlights */}
          <div className="global-reach-text-col">
            <span className="section-tag" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <FaGlobe style={{ color: "var(--accentColor)" }} /> OUR GLOBAL REACH
            </span>
            <h2 className="section-title" style={{ fontSize: "clamp(28px, 3.6vw, 44px)", margin: "12px 0 16px 0", color: "#ffffff", lineHeight: 1.15 }}>
              Connecting Solutions Across Boundaries
            </h2>
            <p className="section-desc" style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "16px", lineHeight: 1.6, marginBottom: "28px" }}>
              Engineered in India, delivering enterprise software, cloud infrastructure, and AI solutions across 13+ countries globally.
            </p>

            {/* Highlights Feature Cards */}
            <div className="global-reach-features">
              <div className="global-feature-card">
                <div className="global-feature-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="global-feature-title">Global Headquarters & Engineering Hub</h4>
                  <p className="global-feature-desc">Australia HQ & India Core Development Hub driving global engineering.</p>
                </div>
              </div>

              <div className="global-feature-card">
                <div className="global-feature-icon">
                  <FaGlobe />
                </div>
                <div>
                  <h4 className="global-feature-title">13+ Countries Served</h4>
                  <p className="global-feature-desc">Enterprise software delivered across USA, UK, UAE, Singapore & Europe.</p>
                </div>
              </div>

              <div className="global-feature-card">
                <div className="global-feature-icon">
                  <FaServer />
                </div>
                <div>
                  <h4 className="global-feature-title">24/7 Cloud & SLA Support</h4>
                  <p className="global-feature-desc">Continuous monitoring, high availability, and 99.9% uptime reliability.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Global Reach Image */}
          <div className="global-reach-image-col">
            <div className="global-reach-image-wrapper">
              <img
                src="/images/083eec1f0a97b1300e8539c93480fccf.jpg"
                alt="04 O'Clock Technologies Global Reach"
                className="global-reach-featured-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
