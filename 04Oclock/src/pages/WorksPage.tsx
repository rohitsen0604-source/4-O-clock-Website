import React, { useState } from "react";
import { SEO } from "../components/SEO";
import { Link } from "../router";
import { PROJECTS_DATA } from "../data/projects";
import { ProjectCoverflow } from "../components/ProjectCoverflow";
import { VideoModal } from "../components/VideoModal";
import { GlobalReachMap } from "../components/GlobalReachMap";
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

export const WorksPage: React.FC = () => {
  const [activeVideoModal, setActiveVideoModal] = useState<{
    isOpen: boolean;
    videoUrl?: string;
    posterImage?: string;
    title: string;
  }>({
    isOpen: false,
    title: "",
  });

  return (
    <div className="page-wrapper">
      <SEO
        title="Our Works — Digital Experiences Built for Real Impact"
        description="Explore 04 O'Clock Technologies' portfolio of enterprise software, FinTech operating systems, Healthcare telemedicine, and SaaS platforms."
      />

      {/* Works Hero */}
      <section className="page-hero">
        <div style={{ maxWidth: "var(--cMaxWidth)", width: "var(--cWidth)", margin: "0 auto" }}>
          <span className="section-tag">SELECTED PORTFOLIO</span>
          <h1 className="page-hero-title">OUR WORK</h1>
          <p className="page-hero-subtitle">
            From ideas to scalable products, we build digital experiences designed to create measurable business impact.
          </p>
        </div>
      </section>

      {/* 3D Curved Interactive Coverflow Carousel */}
      <section style={{ padding: "20px 0" }}>
        <div style={{ maxWidth: "var(--cMaxWidth)", width: "var(--cWidth)", margin: "0 auto" }}>
          <ProjectCoverflow projects={PROJECTS_DATA} />
        </div>
      </section>

      {/* Client Trust Section - Infinite Single-Line Logo Marquee Loop */}
      <section className="section-container" style={{ padding: "60px 0", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", margin: "40px 0" }}>
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

      {/* Global Reach World Map Section */}
      <GlobalReachMap />

      {/* Video Modal Component */}
      <VideoModal
        isOpen={activeVideoModal.isOpen}
        onClose={() => setActiveVideoModal({ isOpen: false, title: "" })}
        videoUrl={activeVideoModal.videoUrl}
        posterImage={activeVideoModal.posterImage}
        title={activeVideoModal.title}
      />

      {/* CTA */}
      <div style={{ maxWidth: "var(--cMaxWidth)", width: "var(--cWidth)", margin: "0 auto" }}>
        <div className="cta-banner">
          <span className="section-tag" style={{ marginBottom: "10px", display: "inline-block" }}>
            LET'S BUILD TOGETHER
          </span>
          <h3>Want to See a Similar Product Built for Your Brand?</h3>
          <p>
            Share your project concept with us. We'll analyze technical feasibility and provide a detailed blueprint.
          </p>
          <Link to="/contact" className="btn-primary">
            Start a Project <MdArrowOutward />
          </Link>
        </div>
      </div>
    </div>
  );
};
