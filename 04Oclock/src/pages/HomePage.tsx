import React from "react";
import { SEO } from "../components/SEO";
import Landing from "../components/Landing";
import TechStack from "../components/TechStack";
import { Link } from "../router";
import { PROJECTS_DATA } from "../data/projects";
import { COMPANY_INFO } from "../data/company";
import { ProjectCoverflow } from "../components/ProjectCoverflow";
import { IndustryWheelOrbit } from "../components/IndustryWheelOrbit";
import { MdArrowOutward } from "react-icons/md";
import "../components/styles/Pages.css";

const CLIENT_LOGOS = [
  "/Logos/100__1_-removebg-preview 1.png",
  "/Logos/2caf55be-47ac-4373-8088-927b3b572f0c_clean.png",
  "/Logos/58d578af-b023-460d-9fce-00bd0241b8e6_clean.png",
  "/Logos/AccuAi-1-3.png",
  "/Logos/BV3.png",
  "/Logos/cropped-Untitled-design-4-150x101_clean.png",
  "/Logos/Integratorz - 1.jpg",
  "/Logos/Layer_1-2.svg",
  "/Logos/logo-header.svg",
  "/Logos/logo.fb9bac30ae49f42d4650.png",
  "/Logos/logo_clean.png",
  "/Logos/logo12-DKwHiysW.png",
  "/Logos/logo_transparent-removebg-preview-Hdvp_fqn.png",
  "/Logos/majestic-pride.svg",
  "/Logos/orbof_clean.png",
  "/Logos/oveBG-DVQSTMaC.webp",
  "/Logos/PAPERBILL - 1_clean.png",
  "/Logos/prshil.png",
  "/Logos/studyiq.webp",
  "/Logos/Tni - 1.png",
  "/Logos/trider-logo.7715c798dd4cf1aceebf.png",
  "/Logos/Waseeny Logo Final (1) 1.png",
  "/Logos/WhatsApp Image 2026-02-14 at 7.38.27 PM 2_transparent.png",
  "/Logos/White-Logo-PNG-horizontal.webp",
];

export const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Home — IDEAS HAVE A TIME. WE MAKE IT COUNT."
        description={COMPANY_INFO.heroDescription}
      />

      {/* Hero Section */}
      <Landing />

      {/* Enterprise Technology Side-by-Side Section */}
      <section className="section-container" style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: "var(--cMaxWidth)", width: "var(--cWidth)", margin: "0 auto" }}>
          <div className="enterprise-tech-grid">
            {/* Left Column: Text Content & Capabilities CTA */}
            <div className="enterprise-tech-text-col">
              <span className="section-tag">ENTERPRISE TECHNOLOGY</span>
              <h2
                style={{
                  fontSize: "clamp(32px, 4.5vw, 54px)",
                  fontWeight: 900,
                  color: "#ffffff",
                  lineHeight: 1.1,
                  margin: "12px 0 16px 0",
                  letterSpacing: "-1px",
                }}
              >
                Technology Built Around Your Vision
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  color: "#aaaaaa",
                  lineHeight: 1.7,
                  marginBottom: "28px",
                }}
              >
                We are an enterprise technology partner dedicated to crafting high-performance digital systems, custom web & mobile software, cloud infrastructure, and AI solutions. Engineered in India, serving enterprise client partners worldwide.
              </p>
              <div>
                <Link to="/services" className="btn-primary">
                  Explore Our Capabilities <MdArrowOutward />
                </Link>
              </div>
            </div>

            {/* Right Column: Featured Image */}
            <div className="enterprise-tech-image-col">
              <div className="enterprise-tech-img-wrapper">
                <img
                  src="/images/a51b7f496e5f3021e4fbbbb1f808325c.jpg"
                  alt="Enterprise Technology Built Around Your Vision"
                  className="enterprise-tech-featured-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive TechStack Section */}
      <TechStack />

      {/* Radial Spoke Wheel Orbit for "Industries We Serve" */}
      <IndustryWheelOrbit />

      {/* Client Trust Section - Infinite Single-Line Logo Marquee Loop */}
      <section className="section-container" style={{ padding: "60px 0", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: "100%", width: "100%", textAlign: "center" }}>
          <span className="section-tag">Client Trust & Global Reach</span>
          <h3 style={{ fontSize: "24px", color: "#ffffff", fontWeight: 800, margin: "8px 0 32px 0", letterSpacing: "-0.5px" }}>
            Trusted By Businesses Moving Forward
          </h3>

          {/* Single Line Infinite Logo Marquee Slider */}
          <div className="client-marquee-container">
            <div className="client-marquee-track">
              {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logoUrl, idx) => (
                <div key={`client-logo-${idx}`} className="client-logo-circle">
                  <img
                    src={logoUrl}
                    alt={`Client Logo ${idx + 1}`}
                    className="client-logo-img"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work 3D Coverflow Curved Gallery */}
      <section className="section-container" style={{ padding: "80px 0 40px 0" }}>
        <div style={{ maxWidth: "var(--cMaxWidth)", width: "var(--cWidth)", margin: "0 auto" }}>
          <div className="section-head">
            <h2 className="section-title">Our Best Works</h2>
          </div>

          {/* Interactive 3D Curved Coverflow Carousel */}
          <ProjectCoverflow projects={PROJECTS_DATA} />

          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <Link to="/works" className="btn-primary">
              Explore All Works <MdArrowOutward />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <div style={{ maxWidth: "var(--cMaxWidth)", width: "var(--cWidth)", margin: "0 auto" }}>
        <div className="cta-banner">
          <h3>Have an Idea? Let's Build It.</h3>
          <p>
            Tell us what you're building. We'll help you turn the idea into a scalable, high-performance digital product.
          </p>
          <Link to="/contact" className="btn-primary">
            Start a Project <MdArrowOutward />
          </Link>
        </div>
      </div>
    </>
  );
};
