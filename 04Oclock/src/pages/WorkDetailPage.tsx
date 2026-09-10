import React, { useState } from "react";
import { SEO } from "../components/SEO";
import { Link, useRouter } from "../router";
import { PROJECTS_DATA, ProjectItem } from "../data/projects";
import { VideoModal } from "../components/VideoModal";
import { MdArrowOutward, MdPlayCircleOutline, MdCheckCircleOutline } from "react-icons/md";
import "../components/styles/Pages.css";

interface WorkDetailPageProps {
  slug?: string;
}

export const WorkDetailPage: React.FC<WorkDetailPageProps> = ({ slug }) => {
  const { path } = useRouter();
  const currentSlug = slug || path.replace("/works/", "");

  const project: ProjectItem | undefined = PROJECTS_DATA.find((p) => p.slug === currentSlug) || PROJECTS_DATA[0];

  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="page-wrapper">
      <SEO
        title={`${project.title} — Case Study`}
        description={project.shortDesc}
      />

      {/* Project Hero Header */}
      <section className="page-hero" style={{ paddingBottom: "20px" }}>
        <div style={{ maxWidth: "var(--cMaxWidth)", width: "var(--cWidth)", margin: "0 auto" }}>
          <div style={{ marginBottom: "16px" }}>
            <Link to="/works" style={{ color: "var(--accentColor)", fontSize: "13px", fontWeight: 700, textDecoration: "none" }}>
              ← BACK TO WORKS
            </Link>
          </div>
          <span className="section-tag">{project.category} • {project.industry}</span>
          <h1 className="page-hero-title">{project.title}</h1>
          <p className="page-hero-subtitle">{project.shortDesc}</p>
        </div>
      </section>

      {/* Project Meta Details Bar */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "24px 0", backgroundColor: "rgba(255,255,255,0.01)" }}>
        <div style={{ maxWidth: "var(--cMaxWidth)", width: "var(--cWidth)", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "24px" }}>
          <div>
            <span style={{ fontSize: "11px", color: "#777", textTransform: "uppercase", fontWeight: 700 }}>Client</span>
            <div style={{ fontSize: "15px", color: "#fff", fontWeight: 700, marginTop: "4px" }}>{project.client}</div>
          </div>
          <div>
            <span style={{ fontSize: "11px", color: "#777", textTransform: "uppercase", fontWeight: 700 }}>Industry</span>
            <div style={{ fontSize: "15px", color: "#fff", fontWeight: 700, marginTop: "4px" }}>{project.industry}</div>
          </div>
          <div>
            <span style={{ fontSize: "11px", color: "#777", textTransform: "uppercase", fontWeight: 700 }}>Year</span>
            <div style={{ fontSize: "15px", color: "#fff", fontWeight: 700, marginTop: "4px" }}>{project.year}</div>
          </div>
          <div>
            <span style={{ fontSize: "11px", color: "#777", textTransform: "uppercase", fontWeight: 700 }}>Category</span>
            <div style={{ fontSize: "15px", color: "var(--accentColor)", fontWeight: 700, marginTop: "4px" }}>{project.category}</div>
          </div>
          {project.projectUrl && !project.hideVisitBtn && (
            <div>
              <span style={{ fontSize: "11px", color: "#777", textTransform: "uppercase", fontWeight: 700 }}>Live Platform</span>
              <div style={{ marginTop: "4px" }}>
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--accentColor)",
                    fontSize: "14px",
                    fontWeight: 700,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    textDecoration: "none",
                  }}
                >
                  Visit Site <MdArrowOutward />
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Main Image & Video Poster */}
      <section className="section-container" style={{ padding: "40px 0" }}>
        <div style={{ maxWidth: "var(--cMaxWidth)", width: "var(--cWidth)", margin: "0 auto" }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "clamp(240px, 45vh, 480px)",
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.1)",
              backgroundColor: "#0d0b10",
            }}
          >
            <img
              src={project.videoPoster || project.image}
              alt={project.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />

            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                onClick={() => setIsVideoOpen(true)}
                className="btn-primary"
                style={{ backdropFilter: "blur(8px)", display: "flex", alignItems: "center", gap: "10px" }}
              >
                <MdPlayCircleOutline style={{ fontSize: "22px" }} />
                Watch Video Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution Grid */}
      <section className="section-container" style={{ padding: "40px 0" }}>
        <div style={{ maxWidth: "var(--cMaxWidth)", width: "var(--cWidth)", margin: "0 auto" }}>
          <div className="cards-grid-2">
            <div className="elegant-card" style={{ padding: "36px" }}>
              <span className="section-tag">THE PROBLEM</span>
              <h3 className="card-title" style={{ fontSize: "24px" }}>The Challenge</h3>
              <p style={{ fontSize: "15px", color: "#aaa", lineHeight: 1.7, margin: 0 }}>
                {project.challenge}
              </p>
            </div>

            <div className="elegant-card" style={{ padding: "36px", borderColor: "rgba(229, 193, 88, 0.2)" }}>
              <span className="section-tag">OUR APPROACH</span>
              <h3 className="card-title" style={{ fontSize: "24px" }}>The Solution</h3>
              <p style={{ fontSize: "15px", color: "#aaa", lineHeight: 1.7, margin: 0 }}>
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features & Tech Stack */}
      <section className="section-container" style={{ padding: "40px 0", backgroundColor: "rgba(255,255,255,0.01)" }}>
        <div style={{ maxWidth: "var(--cMaxWidth)", width: "var(--cWidth)", margin: "0 auto" }}>
          <div className="cards-grid-2">
            <div>
              <span className="section-tag">CORE ARCHITECTURE</span>
              <h3 style={{ fontSize: "28px", color: "#fff", fontWeight: 800, marginBottom: "20px" }}>
                Key System Features
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {project.keyFeatures.map((feat) => (
                  <div key={feat} className="elegant-card" style={{ padding: "18px 24px", display: "flex", alignItems: "center", gap: "12px" }}>
                    <MdCheckCircleOutline style={{ color: "var(--accentColor)", fontSize: "20px", flexShrink: 0 }} />
                    <span style={{ fontSize: "15px", color: "#eee", fontWeight: 600 }}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="section-tag">TECHNOLOGY & STACK</span>
              <h3 style={{ fontSize: "28px", color: "#fff", fontWeight: 800, marginBottom: "20px" }}>
                Technologies Used
              </h3>
              <div className="elegant-card" style={{ padding: "32px", marginBottom: "24px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className="card-tag-chip" style={{ fontSize: "13px", padding: "8px 16px" }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <h4 style={{ fontSize: "16px", color: "#fff", fontWeight: 700, marginBottom: "12px" }}>
                Services Provided:
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {project.services.map((serv) => (
                  <span key={serv} className="card-tag-chip" style={{ backgroundColor: "rgba(229,193,88,0.12)", color: "var(--accentColor)", border: "1px solid rgba(229,193,88,0.3)" }}>
                    {serv}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Measured Results */}
      <section className="section-container" style={{ padding: "60px 0" }}>
        <div style={{ maxWidth: "var(--cMaxWidth)", width: "var(--cWidth)", margin: "0 auto" }}>
          <div className="section-head">
            <span className="section-tag">IMPACT & METRICS</span>
            <h2 className="section-title">Measured Results</h2>
          </div>

          <div className="cards-grid-3">
            {project.results.map((res, index) => (
              <div key={index} className="elegant-card" style={{ textAlign: "center", padding: "32px" }}>
                <div style={{ fontSize: "12px", color: "var(--accentColor)", fontWeight: 800, textTransform: "uppercase", marginBottom: "8px" }}>
                  METRIC 0{index + 1}
                </div>
                <p style={{ fontSize: "16px", color: "#ffffff", fontWeight: 700, lineHeight: 1.5, margin: 0 }}>
                  {res}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl={project.videoUrl}
        posterImage={project.videoPoster}
        title={project.title}
      />

      {/* CTA Banner */}
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
