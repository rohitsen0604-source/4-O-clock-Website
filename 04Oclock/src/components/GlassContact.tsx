import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { CONTACT_CONFIG } from "../data/contact";
import "./styles/GlassContact.css";

interface GlassContactProps {
  showHeroTag?: boolean;
}

export const GlassContact: React.FC<GlassContactProps> = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "+91 ",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = "Required";
    if (!formData.email.trim()) {
      newErrors.email = "Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }
    if (!formData.message.trim()) newErrors.message = "Required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="glass-contact-section" id="contact">
      {/* Main Glass Container Card */}
      <div className="glass-contact-card">
        {/* Left Information Box */}
        <div className="glass-info-panel">
          <h2 className="glass-info-header">Contact Information</h2>

          <div className="glass-info-list">
            {/* Email Row */}
            <div className="glass-info-item">
              <div className="glass-info-icon-box">
                <FaEnvelope />
              </div>
              <div className="glass-info-text">
                <a href="mailto:contact@4oclocktech.com">
                  contact@4oclocktech.com
                </a>
              </div>
            </div>

            {/* Head Office (Australia) */}
            <div className="glass-info-item">
              <div className="glass-info-icon-box">
                <FaMapMarkerAlt />
              </div>
              <div className="glass-info-text">
                <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--accentColor)", display: "block", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "2px" }}>
                  Head Office
                </span>
                1 Barrett, Kensington, Victoria, Australia
              </div>
            </div>

            {/* India Office (Indore) */}
            <div className="glass-info-item">
              <div className="glass-info-icon-box">
                <FaMapMarkerAlt />
              </div>
              <div className="glass-info-text">
                <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--accentColor)", display: "block", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "2px" }}>
                  India Office
                </span>
                Scheme No 114, Dewas Road, Indore, Madhya Pradesh, India
              </div>
            </div>
          </div>

          {/* Social Icons Row */}
          <div className="glass-social-row">
            <a
              href={CONTACT_CONFIG.socials.find((s) => s.name === "Twitter")?.url || "https://x.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-social-icon-btn"
              title="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href={CONTACT_CONFIG.socials.find((s) => s.name === "Instagram")?.url || "https://instagram.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-social-icon-btn"
              title="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href={CONTACT_CONFIG.socials.find((s) => s.name === "LinkedIn")?.url || "https://linkedin.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-social-icon-btn"
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="glass-form-panel">
          {submitted ? (
            <div className="glass-success-msg">
              <h3 style={{ margin: "0 0 8px 0", fontSize: "20px" }}>Thank You!</h3>
              <p style={{ margin: 0, fontSize: "14px", color: "rgba(255,255,255,0.8)" }}>
                Your message has been sent successfully. We will contact you soon.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="glass-send-btn"
                style={{ marginTop: "20px", display: "inline-block" }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Row 1: First Name & Last Name */}
              <div className="glass-form-grid-2">
                <div className="glass-field-group">
                  <label className="glass-label">First Name</label>
                  <input
                    type="text"
                    className={`glass-input-line ${errors.firstName ? "error" : ""}`}
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    placeholder=""
                  />
                </div>

                <div className="glass-field-group">
                  <label className="glass-label">Last Name</label>
                  <input
                    type="text"
                    className="glass-input-line"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    placeholder=""
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone Number */}
              <div className="glass-form-grid-2">
                <div className="glass-field-group">
                  <label className="glass-label">Email</label>
                  <input
                    type="email"
                    className={`glass-input-line ${errors.email ? "error" : ""}`}
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder=""
                  />
                </div>

                <div className="glass-field-group">
                  <label className="glass-label">Phone Number</label>
                  <input
                    type="text"
                    className="glass-input-line"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+91"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="glass-field-group full-width" style={{ marginTop: "8px" }}>
                <label className="glass-label">Message</label>
                <textarea
                  className={`glass-input-line ${errors.message ? "error" : ""}`}
                  rows={3}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Write your message.."
                  style={{ resize: "none" }}
                />
              </div>

              {/* Action Button & Wavy Line Paper Plane Decor */}
              <div className="glass-action-row">
                {/* Wavy Dotted Path SVG + Paper Plane */}
                <div className="glass-plane-decor-container">
                  <svg
                    className="glass-plane-svg"
                    viewBox="0 0 140 90"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Hand-drawn style curved dashed line */}
                    <path
                      d="M 5 80 C 40 85, 45 35, 75 60 C 95 78, 105 40, 125 15"
                      stroke="rgba(255, 255, 255, 0.35)"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      fill="none"
                    />
                    {/* Paper Plane Graphic at the end of the line */}
                    <g transform="translate(118, 2) rotate(-15) scale(0.85)">
                      <path
                        d="M0,25 L35,0 L20,35 L12,24 Z"
                        fill="#ffffff"
                      />
                      <path
                        d="M35,0 L12,24 L0,25 Z"
                        fill="rgba(200, 200, 210, 0.8)"
                      />
                    </g>
                  </svg>
                </div>

                <button type="submit" className="glass-send-btn">
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
