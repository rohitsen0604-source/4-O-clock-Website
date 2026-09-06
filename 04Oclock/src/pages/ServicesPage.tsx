import React from "react";
import { SEO } from "../components/SEO";
import { Link } from "../router";
import { IndustryWheelOrbit } from "../components/IndustryWheelOrbit";
import { ServicesBranchDiagram } from "../components/ServicesBranchDiagram";
import { MdArrowOutward } from "react-icons/md";
import "../components/styles/Pages.css";

export const ServicesPage: React.FC = () => {
  return (
    <div className="page-wrapper">
      <SEO
        title="Services — Technology Solutions Built for What's Next"
        description="Explore 04 O'Clock Technologies' comprehensive IT services: Web & Mobile App Development, AI & ML, SaaS, Cloud & DevOps, APIs, and Automation."
      />

      {/* Services Hero */}
      <section className="page-hero">
        <div style={{ maxWidth: "var(--cMaxWidth)", width: "var(--cWidth)", margin: "0 auto" }}>
          <span className="section-tag">Enterprise Services</span>
          <h1 className="page-hero-title">TECHNOLOGY SOLUTIONS BUILT FOR WHAT'S NEXT</h1>
          <p className="page-hero-subtitle">
            From web & mobile software engineering to AI integration and cloud infrastructure, we deliver high-value technology solutions tailored for business scale.
          </p>
        </div>
      </section>

      {/* Services Branch Diagram (Matching Reference Screenshot 1) */}
      <ServicesBranchDiagram />

      {/* Radial Spoke Wheel Orbit for Industries We Serve */}
      <IndustryWheelOrbit />

      {/* Final CTA Banner */}
      <div style={{ maxWidth: "var(--cMaxWidth)", width: "var(--cWidth)", margin: "0 auto" }}>
        <div className="cta-banner">
          <h3>Need a Custom Solution for Your Business?</h3>
          <p>
            Contact our engineering team to map out a clear technical proposal and architecture blueprint.
          </p>
          <Link to="/contact" className="btn-primary">
            Start a Project <MdArrowOutward />
          </Link>
        </div>
      </div>
    </div>
  );
};
