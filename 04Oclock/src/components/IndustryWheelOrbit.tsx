import React, { useState } from "react";
import {
  MdOutlineHealthAndSafety,
  MdOutlineAccountBalance,
  MdOutlineApartment,
  MdOutlineSchool,
  MdOutlineShoppingCart,
  MdOutlineCloudQueue,
  MdOutlineLocalShipping,
  MdOutlineHotel,
  MdOutlinePrecisionManufacturing,
  MdOutlineMovie,
  MdOutlineBusiness,
  MdOutlineFlashOn,
  MdClose,
  MdArrowOutward,
  MdCheck,
} from "react-icons/md";
import { Link } from "../router";
import "./styles/IndustryWheelOrbit.css";

export interface IndustryItem {
  id: string;
  name: string;
  shortName: string;
  icon: React.ReactNode;
  variant?: "dark" | "white" | "accent";
  description: string;
  solutions: string[];
}

export const HONEYCOMB_INDUSTRIES: IndustryItem[][] = [
  // Row 1 (3 Hexagons)
  [
    {
      id: "01",
      name: "Healthcare & HealthTech",
      shortName: "HEALTHCARE & HEALTHTECH",
      icon: <MdOutlineHealthAndSafety />,
      variant: "dark",
      description: "Digital healthcare platforms, patient solutions & automation",
      solutions: [
        "Digital Healthcare Platforms",
        "Patient Engagement & Portals",
        "Clinical Workflow Automation",
        "Telemedicine & EHR Integrations",
      ],
    },
    {
      id: "02",
      name: "FinTech & Banking",
      shortName: "FINTECH & BANKING",
      icon: <MdOutlineAccountBalance />,
      variant: "white",
      description: "Secure financial platforms, payments & intelligent solutions",
      solutions: [
        "Secure Financial Platforms",
        "Payment Gateway & API Integrations",
        "Intelligent Banking Solutions",
        "Automated Reconciliation Engines",
      ],
    },
    {
      id: "03",
      name: "Real Estate & PropTech",
      shortName: "REAL ESTATE & PROPTECH",
      icon: <MdOutlineApartment />,
      variant: "dark",
      description: "Property platforms, CRM, marketplaces & automation",
      solutions: [
        "Property Management Platforms",
        "Real Estate CRM & Leads",
        "Digital Property Marketplaces",
        "Lease & Contract Automation",
      ],
    },
  ],
  // Row 2 (3 Hexagons)
  [
    {
      id: "04",
      name: "Education & EdTech",
      shortName: "EDUCATION & EDTECH",
      icon: <MdOutlineSchool />,
      variant: "dark",
      description: "Learning platforms, management systems & digital classrooms",
      solutions: [
        "Cloud Learning Platforms (LMS)",
        "School & Student Management Systems",
        "Interactive Digital Classrooms",
        "AI Assessment & Analytics",
      ],
    },
    {
      id: "05",
      name: "E-Commerce & Retail",
      shortName: "E-COMMERCE & RETAIL",
      icon: <MdOutlineShoppingCart />,
      variant: "accent",
      description: "Online stores, marketplaces & customer experiences",
      solutions: [
        "High-Conversion Online Stores",
        "Multi-Vendor Marketplace Engines",
        "Omnichannel Customer Experiences",
        "Inventory Sync & Checkout APIs",
      ],
    },
    {
      id: "06",
      name: "SaaS & Technology",
      shortName: "SAAS & TECHNOLOGY",
      icon: <MdOutlineCloudQueue />,
      variant: "white",
      description: "Scalable SaaS products, dashboards & cloud platforms",
      solutions: [
        "Scalable Multi-Tenant SaaS Products",
        "Real-Time Executive Dashboards",
        "Enterprise Cloud Platforms",
        "API & Integration Infrastructure",
      ],
    },
  ],
  // Row 3 (3 Hexagons)
  [
    {
      id: "07",
      name: "Logistics & Supply Chain",
      shortName: "LOGISTICS & SUPPLY CHAIN",
      icon: <MdOutlineLocalShipping />,
      variant: "dark",
      description: "Fleet, delivery, tracking & operational solutions",
      solutions: [
        "Real-Time Fleet & Dispatch Systems",
        "On-Demand Delivery Applications",
        "GPS Tracking & Telemetry",
        "Operational Supply Chain Solutions",
      ],
    },
    {
      id: "08",
      name: "Travel & Hospitality",
      shortName: "TRAVEL & HOSPITALITY",
      icon: <MdOutlineHotel />,
      variant: "dark",
      description: "Booking platforms, travel technology & guest experiences",
      solutions: [
        "Direct Booking Platforms",
        "Travel Technology Engines",
        "Seamless Guest Experiences",
        "Reservation & Hotel PMS Apps",
      ],
    },
    {
      id: "09",
      name: "Manufacturing & Industry 4.0",
      shortName: "MANUFACTURING & INDUSTRY 4.0",
      icon: <MdOutlinePrecisionManufacturing />,
      variant: "dark",
      description: "Digital operations, automation & intelligent systems",
      solutions: [
        "Digital Plant Operations",
        "Shop Floor Automation Systems",
        "IoT & Equipment Telemetry",
        "Intelligent Quality Control",
      ],
    },
  ],
  // Row 4 (3 Hexagons)
  [
    {
      id: "10",
      name: "Media & Entertainment",
      shortName: "MEDIA & ENTERTAINMENT",
      icon: <MdOutlineMovie />,
      variant: "dark",
      description: "Content platforms, streaming & digital experiences",
      solutions: [
        "High-Concurrency Content Platforms",
        "Live & On-Demand Streaming Apps",
        "Digital Asset Management (DAM)",
        "Interactive Creator Experiences",
      ],
    },
    {
      id: "11",
      name: "Professional Services",
      shortName: "PROFESSIONAL SERVICES",
      icon: <MdOutlineBusiness />,
      variant: "accent",
      description: "Business platforms, workflow automation & client portals",
      solutions: [
        "Corporate Business Platforms",
        "Enterprise Workflow Automation",
        "Secure Client Portals",
        "Document & Billing Systems",
      ],
    },
    {
      id: "12",
      name: "Startups & New Ventures",
      shortName: "STARTUPS & NEW VENTURES",
      icon: <MdOutlineFlashOn />,
      variant: "dark",
      description: "MVPs, product development, SaaS & technology strategy",
      solutions: [
        "Rapid Production MVP Development",
        "Full-Lifecycle Product Engineering",
        "Scalable SaaS Architectures",
        "Technology Strategy & Advisory",
      ],
    },
  ],
];

export const IndustryWheelOrbit: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem | null>(null);

  return (
    <section className="honeycomb-section" id="industries">
      <div className="honeycomb-bg-overlay" />
      <div className="honeycomb-map-pattern" />

      <div style={{ maxWidth: "var(--cMaxWidth)", width: "var(--cWidth)", margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Section Header */}
        <div className="honeycomb-head">
          <span className="honeycomb-tag">INDUSTRIES WE SERVE</span>
          <h2 className="honeycomb-title">Technology Solutions Built Across Industry Domains</h2>
          <p className="honeycomb-subtitle">
            Engineered digital products, scalable cloud platforms, and automated software solutions tailored for high-growth sectors.
          </p>
        </div>

        {/* Responsive Honeycomb Matrix */}
        <div className="honeycomb-matrix">
          {HONEYCOMB_INDUSTRIES.map((row, rIdx) => (
            <div key={`row-${rIdx}`} className="honeycomb-row">
              {row.map((ind) => {
                const variantClass = ind.variant ? `variant-${ind.variant}` : "variant-dark";
                return (
                  <div
                    key={ind.id}
                    className={`hex-outer ${variantClass}`}
                    onClick={() => setSelectedIndustry(ind)}
                    title={`Click to explore ${ind.name}`}
                  >
                    <div className="hex-inner">
                      <div className="hex-icon">{ind.icon}</div>
                      <div className="hex-label">{ind.shortName}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Industry Detail Spotlight Modal */}
      {selectedIndustry && (
        <div className="honeycomb-modal-backdrop" onClick={() => setSelectedIndustry(null)}>
          <div className="honeycomb-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="honeycomb-modal-close"
              onClick={() => setSelectedIndustry(null)}
              aria-label="Close modal"
            >
              <MdClose />
            </button>

            <div className="honeycomb-modal-header">
              <div className="honeycomb-modal-icon-box">{selectedIndustry.icon}</div>
              <div>
                <span className="honeycomb-modal-tag">{selectedIndustry.id} — INDUSTRY DOMAIN</span>
                <h3 className="honeycomb-modal-title">{selectedIndustry.name}</h3>
              </div>
            </div>

            <p className="honeycomb-modal-desc">{selectedIndustry.description}</p>

            <div className="honeycomb-modal-solutions">
              <h4 className="honeycomb-solutions-heading">Key Capabilities & Deliverables:</h4>
              <ul className="honeycomb-solutions-list">
                {selectedIndustry.solutions.map((sol, idx) => (
                  <li key={idx}>
                    <MdCheck className="honeycomb-check-icon" />
                    <span>{sol}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="honeycomb-modal-actions">
              <Link
                to="/contact"
                className="btn-primary"
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
