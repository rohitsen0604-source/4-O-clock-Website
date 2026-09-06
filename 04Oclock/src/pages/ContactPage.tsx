import React from "react";
import { SEO } from "../components/SEO";
import { GlassContact } from "../components/GlassContact";
import "../components/styles/Pages.css";

export const ContactPage: React.FC = () => {
  return (
    <div className="page-wrapper" style={{ background: "#000000", minHeight: "100vh" }}>
      <SEO
        title="Contact Us — LET'S BUILD SOMETHING GREAT"
        description="Get in touch with us for project inquiries, custom software development, and technology consulting."
      />

      {/* Main Glassmorphic Contact Section */}
      <section style={{ padding: "40px 0 60px 0" }}>
        <GlassContact />
      </section>
    </div>
  );
};

export default ContactPage;
