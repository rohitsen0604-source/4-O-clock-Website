import React, { useState, useRef, useEffect } from "react";
import { ProjectItem } from "../data/projects";
import { MdChevronLeft, MdChevronRight, MdArrowOutward } from "react-icons/md";
import { Link } from "../router";
import "./styles/ProjectCoverflow.css";

interface ProjectCoverflowProps {
  projects: ProjectItem[];
}

export const ProjectCoverflow: React.FC<ProjectCoverflowProps> = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isScrollingRef = useRef<boolean>(false);
  const touchStartXRef = useRef<number | null>(null);

  const N = projects.length;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevProject = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : N - 1));
  };

  const nextProject = () => {
    setActiveIndex((prev) => (prev < N - 1 ? prev + 1 : 0));
  };

  // Touch Swipe Listeners
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartXRef.current - touchEndX;

    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        nextProject();
      } else {
        prevProject();
      }
    }
    touchStartXRef.current = null;
  };

  // Mouse Wheel Scroll Listener - One-by-one Card Step
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (isScrollingRef.current) return;

      if (Math.abs(e.deltaY) > 15) {
        isScrollingRef.current = true;
        if (e.deltaY > 0) {
          nextProject();
        } else {
          prevProject();
        }

        setTimeout(() => {
          isScrollingRef.current = false;
        }, 320);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: true });
    }
    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [N]);

  return (
    <div
      className="coverflow-section"
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="coverflow-container">
        {/* Left Circular Arrow Button */}
        <button
          className="coverflow-arrow-btn coverflow-arrow-left"
          onClick={prevProject}
          aria-label="Previous Project"
        >
          <MdChevronLeft />
        </button>

        {/* 3D Track with Stable Keyed Card Elements for Physical 3D Slide Transition */}
        <div className="coverflow-track">
          {projects.map((project, index) => {
            // Calculate shortest cyclic offset relative to active index (-N/2 to +N/2)
            let offset = (index - activeIndex) % N;
            if (offset > Math.floor(N / 2)) offset -= N;
            if (offset < -Math.floor(N / 2)) offset += N;

            const absOffset = Math.abs(offset);
            const isActive = offset === 0;
            const isVisible = absOffset <= 3; // Show 1 center + 3 left + 3 right

            // Dynamic 3D Arc Spatial Transformations
            const stepX = windowWidth < 480 ? 110 : windowWidth < 768 ? 140 : windowWidth < 1024 ? 180 : 225;
            const translateX = offset * stepX;
            const rotateY = offset * -20;
            const translateZ = isActive ? 80 : 0 - absOffset * 60;
            const scale = isActive ? 1 : Math.max(0.65, 0.88 - (absOffset - 1) * 0.12);
            const opacity = isVisible ? (isActive ? 1 : Math.max(0.25, 0.8 - (absOffset - 1) * 0.25)) : 0;
            const zIndex = 100 - absOffset;
            const filter = isActive
              ? "none"
              : `brightness(${Math.max(0.4, 0.8 - (absOffset - 1) * 0.2)})`;

            return (
              <div
                key={project.id}
                className={`coverflow-card ${isActive ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
                style={{
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity,
                  zIndex,
                  filter,
                  pointerEvents: isVisible ? "auto" : "none",
                }}
              >
                <div className="coverflow-card-image-box">
                  <img
                    src={project.videoPoster || project.image}
                    alt={project.title}
                  />
                </div>

                <div className="coverflow-card-content">
                  <div className="coverflow-card-info">
                    <span className="coverflow-card-tag">{project.industry}</span>
                    <h3 className="coverflow-card-title">{project.title}</h3>
                    <p className="coverflow-card-desc">{project.shortDesc}</p>
                  </div>

                  {/* Card Bottom Action: Visit Project Button */}
                  {project.projectUrl ? (
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="coverflow-visit-btn"
                      onClick={(e: React.MouseEvent) => e.stopPropagation()}
                    >
                      Visit Project <MdArrowOutward />
                    </a>
                  ) : (
                    <Link
                      to={`/works/${project.slug}`}
                      className="coverflow-visit-btn"
                      onClick={(e: React.MouseEvent) => e.stopPropagation()}
                    >
                      Visit Project <MdArrowOutward />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Circular Arrow Button */}
        <button
          className="coverflow-arrow-btn coverflow-arrow-right"
          onClick={nextProject}
          aria-label="Next Project"
        >
          <MdChevronRight />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="coverflow-dots-bar">
        {projects.map((p, i) => (
          <button
            key={p.id}
            className={`coverflow-dot ${i === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(i)}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
