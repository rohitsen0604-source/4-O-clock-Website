import React, { useState, useRef, useEffect } from "react";
import {
  MdOutlineHealthAndSafety,
  MdOutlineAccountBalance,
  MdOutlineApartment,
  MdOutlineSchool,
  MdOutlineShoppingCart,
  MdOutlineCloudQueue,
  MdOutlineLocalShipping,
  MdOutlineDirectionsCar,
  MdOutlinePrecisionManufacturing,
  MdOutlineBolt,
  MdOutlineCellTower,
  MdOutlineSecurity,
  MdOutlineMovie,
  MdOutlineFlight,
  MdOutlineGavel,
  MdOutlineEco,
  MdClose,
  MdArrowOutward,
  MdCheck,
} from "react-icons/md";
import { Link } from "../router";
import "./styles/IndustryWheelOrbit.css";

export interface IndustryItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  solutions: string[];
  description: string;
}

export const INDUSTRY_WHEEL_DATA: IndustryItem[] = [
  {
    id: "01",
    name: "Healthcare & Life Sciences",
    icon: <MdOutlineHealthAndSafety />,
    solutions: ["HIPAA Telemedicine Apps", "EHR/EMR Integrations", "Clinical AI Summaries"],
    description: "HIPAA-compliant software, telemedicine platforms, patient portals, and clinical AI assistants engineered for healthcare providers.",
  },
  {
    id: "02",
    name: "FinTech & Banking",
    icon: <MdOutlineAccountBalance />,
    solutions: ["Digital Banking Portals", "Payment Processing APIs", "Ledger Reconciliation"],
    description: "Secure banking dashboards, payment gateway integrations, automated ledger reconciliation, and real-time risk telemetry.",
  },
  {
    id: "03",
    name: "Real Estate & PropTech",
    icon: <MdOutlineApartment />,
    solutions: ["WebGL 3D Property Tours", "Mortgage Calculators", "Tenant SaaS Portals"],
    description: "Interactive property portals, WebGL 3D virtual walkthroughs, lease automation engines, and tenant management SaaS.",
  },
  {
    id: "04",
    name: "Education & EdTech",
    icon: <MdOutlineSchool />,
    solutions: ["LMS Cloud Platforms", "Virtual Classrooms", "Student Analytics"],
    description: "Scalable Learning Management Systems (LMS), virtual classrooms, automated grading, and interactive student analytics dashboards.",
  },
  {
    id: "05",
    name: "E-Commerce & Retail",
    icon: <MdOutlineShoppingCart />,
    solutions: ["Headless Next.js Stores", "Inventory Sync Engine", "Custom Checkout Flow"],
    description: "High-conversion headless storefronts, multi-channel marketplace inventory synchronization, and sub-second checkout engines.",
  },
  {
    id: "06",
    name: "SaaS & Cloud Platforms",
    icon: <MdOutlineCloudQueue />,
    solutions: ["Multi-Tenant Engines", "Stripe Billing Modules", "Automated User Onboarding"],
    description: "Multi-tenant software-as-a-service platforms built for enterprise security, subscription billing integration, and automated user onboarding.",
  },
  {
    id: "07",
    name: "Logistics & Supply Chain",
    icon: <MdOutlineLocalShipping />,
    solutions: ["Fleet GPS Telemetry", "Route Optimization AI", "Dispatch Dashboards"],
    description: "Real-time fleet telemetry, GPS dispatch dashboards, automated route optimization, and digital proof-of-delivery engines.",
  },
  {
    id: "08",
    name: "Automotive & Mobility",
    icon: <MdOutlineDirectionsCar />,
    solutions: ["EV Charging Telemetry", "Vehicle Diagnostic Portals", "Fleet Management"],
    description: "Electric vehicle charging network portals, connected vehicle diagnostic APIs, and mobility fleet management suites.",
  },
  {
    id: "09",
    name: "Manufacturing & Industry 4.0",
    icon: <MdOutlinePrecisionManufacturing />,
    solutions: ["IoT Equipment Telemetry", "Inventory Pipelines", "Quality Assurance AI"],
    description: "IoT sensor telemetry dashboards, automated inventory pipelines, shop floor monitoring, and predictive quality control engines.",
  },
  {
    id: "10",
    name: "Energy & CleanTech",
    icon: <MdOutlineBolt />,
    solutions: ["Grid Telemetry Dashboards", "Renewable Energy Analytics", "Smart Meter APIs"],
    description: "Smart grid telemetry dashboards, solar/wind asset monitoring systems, and carbon accounting compliance platforms.",
  },
  {
    id: "11",
    name: "Telecommunications",
    icon: <MdOutlineCellTower />,
    solutions: ["Network Operations UI", "Bandwidth Billing APIs", "Customer Portals"],
    description: "Network operations center (NOC) dashboards, automated subscriber billing APIs, and self-service customer telecom portals.",
  },
  {
    id: "12",
    name: "Cybersecurity & Defense",
    icon: <MdOutlineSecurity />,
    solutions: ["Threat Telemetry Dashboards", "Audit Logging Engines", "Zero Trust Auth"],
    description: "Real-time threat monitoring consoles, SOC event dashboards, automated compliance audit logs, and zero-trust identity architectures.",
  },
  {
    id: "13",
    name: "Media & Entertainment",
    icon: <MdOutlineMovie />,
    solutions: ["Video Streaming CDN", "Digital Asset Portals", "Content Monetization"],
    description: "High-concurrency video streaming web applications, digital asset management (DAM) systems, and creator payout engines.",
  },
  {
    id: "14",
    name: "Travel & Hospitality",
    icon: <MdOutlineFlight />,
    solutions: ["Custom Booking Engines", "Guest Concierge Apps", "Reservation Portals"],
    description: "High-conversion hotel & flight booking engines, guest mobile apps, contactless check-in systems, and channel managers.",
  },
  {
    id: "15",
    name: "Legal & Compliance",
    icon: <MdOutlineGavel />,
    solutions: ["Document Search AI", "Audit Workflow Engines", "Client Collaboration"],
    description: "AI-assisted contract research engines, automated compliance audit workflows, and encrypted client collaboration portals.",
  },
  {
    id: "16",
    name: "Agriculture & AgTech",
    icon: <MdOutlineEco />,
    solutions: ["Crop Sensor Telemetry", "Supply Chain Traceability", "Farm Management"],
    description: "Precision farming sensor dashboards, satellite crop yield monitoring, and farm-to-table supply chain traceability software.",
  },
];

export const IndustryWheelOrbit: React.FC = () => {
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const containerRef = useRef<HTMLDivElement | null>(null);

  const N = INDUSTRY_WHEEL_DATA.length;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mouse Wheel Scroll Listener - Clockwise (Down Scroll) & Anti-Clockwise (Up Scroll)
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      const delta = e.deltaY > 0 ? 0.05 : -0.05;
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

  // Calculate dynamic scale factor based on screen width
  const scaleFactor = windowWidth < 600 ? 0.42 : windowWidth < 900 ? 0.65 : windowWidth < 1200 ? 0.85 : 1;

  return (
    <section className="wheel-section" ref={containerRef}>
      <div className="wheel-section-head">
        <span className="section-tag">DOMAIN EXPERTISE</span>
        <h2 className="section-title">Industries We Serve</h2>
      </div>

      <div className="wheel-container">
        {/* SVG Radial Dashed Connecting Lines Canvas */}
        <svg
          className="wheel-svg-spokes"
          viewBox="0 0 1400 900"
          preserveAspectRatio="xMidYMid meet"
        >
          {INDUSTRY_WHEEL_DATA.map((_, index) => {
            const baseAngle = (index / N) * 2 * Math.PI - Math.PI / 2;
            const angle = baseAngle + rotationAngle;
            const radius = (index % 2 === 0 ? 320 : 420);

            const cx = 700;
            const cy = 450;
            const hubRadius = 110;

            const x1 = cx + hubRadius * Math.cos(angle);
            const y1 = cy + hubRadius * Math.sin(angle);
            const x2 = cx + radius * Math.cos(angle);
            const y2 = cy + radius * Math.sin(angle);

            return (
              <line
                key={index}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="rgba(229, 193, 88, 0.35)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            );
          })}
        </svg>

        {/* Central Circular Hub */}
        <div className="wheel-center-hub">
          <img
            src="/images/circlelogo.png"
            alt="04 O'Clock Technologies Emblem"
            className="wheel-hub-circle-img"
          />
          <h3 className="wheel-hub-title">INDUSTRIES WE SERVE</h3>
        </div>

        {/* Outer Circular Industry Nodes */}
        <div className="wheel-nodes-layer">
          {INDUSTRY_WHEEL_DATA.map((ind, index) => {
            const baseAngle = (index / N) * 2 * Math.PI - Math.PI / 2;
            const angle = baseAngle + rotationAngle;
            const radius = (index % 2 === 0 ? 320 : 420) * scaleFactor;

            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <div
                key={ind.id}
                className="wheel-node-item"
                onClick={() => setSelectedIndustry(ind)}
                style={{
                  left: `calc(50% + ${x}px - 50px)`,
                  top: `calc(50% + ${y}px - 40px)`,
                }}
              >
                <div className="wheel-node-icon-ring">{ind.icon}</div>
                <div className="wheel-node-label">{ind.name}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Touch Card Grid (<768px) */}
      <div className="wheel-mobile-grid">
        {INDUSTRY_WHEEL_DATA.map((ind) => (
          <div
            key={`mob-ind-${ind.id}`}
            className="wheel-mobile-card"
            onClick={() => setSelectedIndustry(ind)}
          >
            <div className="wheel-mobile-icon-ring">{ind.icon}</div>
            <div className="wheel-mobile-card-title">{ind.name}</div>
          </div>
        ))}
      </div>

      {/* Industry Detail Spotlight Modal */}
      {selectedIndustry && (
        <div
          className="orbit-spotlight-backdrop"
          onClick={() => setSelectedIndustry(null)}
        >
          <div
            className="orbit-spotlight-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="orbit-spotlight-close"
              onClick={() => setSelectedIndustry(null)}
              aria-label="Close"
            >
              <MdClose />
            </button>

            <span className="section-tag" style={{ marginBottom: "8px" }}>
              {selectedIndustry.id} — INDUSTRY DOMAIN
            </span>
            <h3
              style={{
                fontSize: "30px",
                color: "#ffffff",
                fontWeight: 800,
                marginBottom: "12px",
              }}
            >
              {selectedIndustry.name}
            </h3>
            <p
              style={{
                fontSize: "15px",
                color: "#ccc",
                lineHeight: 1.6,
                marginBottom: "24px",
              }}
            >
              {selectedIndustry.description}
            </p>

            <div style={{ marginBottom: "24px" }}>
              <h4
                style={{
                  fontSize: "13px",
                  color: "var(--accentColor)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Tailored Digital Solutions & Engineering Services:
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {selectedIndustry.solutions.map((sol) => (
                  <li
                    key={sol}
                    style={{
                      fontSize: "14px",
                      color: "#ddd",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <MdCheck style={{ color: "var(--accentColor)", fontSize: "18px" }} />
                    {sol}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", justifyContent: "flex-end" }}>
              <Link
                to="/contact"
                className="btn-primary"
                style={{ padding: "10px 24px", fontSize: "13px" }}
                onClick={() => setSelectedIndustry(null)}
              >
                Discuss Industry Project <MdArrowOutward />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
