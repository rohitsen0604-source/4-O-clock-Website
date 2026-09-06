import React, { useState, useRef, useEffect } from "react";
import { MdClose, MdArrowOutward, MdCheck } from "react-icons/md";
import { Link } from "../router";
import "./styles/OrbitGallery.css";

export interface OrbitGalleryItem {
  id: string;
  badge: string;
  title: string;
  shortDesc: string;
  fullDesc?: string;
  chips: string[];
  deliverables?: string[];
  benefits?: string[];
}

interface OrbitGalleryProps {
  tag: string;
  title: string;
  description: string;
  items: OrbitGalleryItem[];
}

export const OrbitGallery: React.FC<OrbitGalleryProps> = ({
  tag,
  title,
  description,
  items,
}) => {
  const [activeItem, setActiveItem] = useState<OrbitGalleryItem | null>(null);
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const containerRef = useRef<HTMLDivElement | null>(null);

  const N = items.length;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scaleFactor = windowWidth < 600 ? 0.4 : windowWidth < 900 ? 0.62 : windowWidth < 1200 ? 0.82 : 1;
  const radiusX = (N > 6 ? 640 : 540) * scaleFactor;
  const radiusY = (N > 6 ? 320 : 270) * scaleFactor;

  // Mouse Wheel Scroll Listener - Rotates Orbit Clockwise (Down Scroll) & Anti-Clockwise (Up Scroll)
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      // Calculate smooth rotation step based on scroll delta
      const delta = e.deltaY > 0 ? 0.08 : -0.08;
      setRotationAngle((prev) => prev + delta);
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
  }, []);

  return (
    <section className="orbit-section" ref={containerRef}>
      <div className="orbit-container">
        {/* Central Headline & Subtitle - Completely Non-blocking Pointer Events */}
        <div className="orbit-center-head">
          <span className="section-tag">{tag}</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        {/* 3D Orbit Floating Node Layer */}
        <div className="orbit-nodes-layer">
          {items.map((item, index) => {
            // Calculate 3D Elliptical Orbit Position with Mouse Wheel Rotation Offset
            const baseAngle = (index / N) * 2 * Math.PI - Math.PI / 2;
            const angle = baseAngle + rotationAngle;

            const x = Math.cos(angle) * radiusX;
            const y = Math.sin(angle) * radiusY;

            // 3D perspective depth transformations & clean Z-Index (500+ baseline)
            const rotateY = Math.sin(angle) * -16;
            const translateZ = Math.cos(angle) * 50;
            const scale = Math.max(0.82, 0.96 + Math.cos(angle) * 0.14);
            const zIndex = Math.round(500 + Math.cos(angle) * 100);
            const opacity = Math.max(0.7, 0.9 + Math.cos(angle) * 0.1);

            return (
              <div
                key={item.id}
                className="orbit-card-node"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveItem(item);
                }}
                style={{
                  left: `calc(50% + ${x}px - 105px)`,
                  top: `calc(50% + ${y}px - 75px)`,
                  transform: `rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`,
                  zIndex,
                  opacity,
                }}
              >
                <span className="orbit-node-badge">{item.badge}</span>
                <h3 className="orbit-node-title">{item.title}</h3>
                <p className="orbit-node-desc">{item.shortDesc}</p>
                <div className="orbit-node-chips">
                  {item.chips.slice(0, 2).map((chip) => (
                    <span key={chip} className="orbit-chip">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Card Grid View (<600px) */}
      <div className="orbit-mobile-section">
        <div className="section-head" style={{ marginBottom: "24px", textAlign: "center" }}>
          <span className="section-tag">{tag}</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-desc">{description}</p>
        </div>
        <div className="orbit-mobile-cards-grid">
          {items.map((item) => (
            <div
              key={`mob-orbit-${item.id}`}
              className="orbit-mobile-card-item"
              onClick={() => setActiveItem(item)}
            >
              <span className="orbit-node-badge">{item.badge}</span>
              <h3 className="orbit-node-title">{item.title}</h3>
              <p className="orbit-node-desc">{item.shortDesc}</p>
              <div className="orbit-node-chips">
                {item.chips.slice(0, 3).map((chip) => (
                  <span key={chip} className="orbit-chip">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Spotlight Detail Modal when Clicking Any Orbit Card */}
      {activeItem && (
        <div
          className="orbit-spotlight-backdrop"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="orbit-spotlight-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="orbit-spotlight-close"
              onClick={() => setActiveItem(null)}
              aria-label="Close"
            >
              <MdClose />
            </button>

            <span className="section-tag" style={{ marginBottom: "8px" }}>
              {activeItem.badge}
            </span>
            <h3
              style={{
                fontSize: "30px",
                color: "#ffffff",
                fontWeight: 800,
                marginBottom: "12px",
              }}
            >
              {activeItem.title}
            </h3>
            <p
              style={{
                fontSize: "15px",
                color: "#ccc",
                lineHeight: 1.6,
                marginBottom: "24px",
              }}
            >
              {activeItem.fullDesc || activeItem.shortDesc}
            </p>

            {activeItem.deliverables && activeItem.deliverables.length > 0 && (
              <div style={{ marginBottom: "20px" }}>
                <h4
                  style={{
                    fontSize: "13px",
                    color: "var(--accentColor)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    marginBottom: "10px",
                  }}
                >
                  Deliverables & Key Features:
                </h4>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  {activeItem.deliverables.map((deliv) => (
                    <li
                      key={deliv}
                      style={{
                        fontSize: "13px",
                        color: "#bbb",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <MdCheck style={{ color: "var(--accentColor)" }} /> {deliv}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {activeItem.chips.map((chip) => (
                  <span key={chip} className="orbit-chip" style={{ fontSize: "11px", padding: "4px 10px" }}>
                    {chip}
                  </span>
                ))}
              </div>

              <Link
                to="/contact"
                className="btn-primary"
                style={{ padding: "10px 24px", fontSize: "13px" }}
                onClick={() => setActiveItem(null)}
              >
                Inquire Now <MdArrowOutward />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
