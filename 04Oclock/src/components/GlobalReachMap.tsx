import React, { useState } from "react";
import { FaGlobe, FaLocationArrow } from "react-icons/fa";
import "./styles/GlobalReachMap.css";

export interface CountryPin {
  id: string;
  name: string;
  shortCode: string;
  flagId: string;
  region: string;
  x: number; // SVG X coordinate (0 - 1000)
  y: number; // SVG Y coordinate (0 - 500)
  isHub?: boolean;
  isHeadquarters?: boolean;
  projectsCount?: string;
}

const INDIA_HUB: CountryPin = {
  id: "india",
  name: "India",
  shortCode: "DEVELOPMENT HUB",
  flagId: "flag-india",
  region: "Development Headquarters & Core Engineering Hub",
  x: 695,
  y: 235,
  isHub: true,
};

const AUSTRALIA_HQ: CountryPin = {
  id: "australia",
  name: "Australia",
  shortCode: "HEADQUARTERS",
  flagId: "flag-australia",
  region: "Global Headquarters (1 Barrett, Kensington, Victoria)",
  x: 845,
  y: 375,
  isHeadquarters: true,
  projectsCount: "Global Head Office & Regional Operations",
};

const GLOBAL_COUNTRIES: CountryPin[] = [
  { id: "usa", name: "United States", shortCode: "USA", flagId: "flag-usa", region: "North America", x: 215, y: 165, projectsCount: "Enterprise SaaS & Cloud Infrastructure" },
  { id: "uk", name: "United Kingdom", shortCode: "UK", flagId: "flag-uk", region: "Europe", x: 475, y: 120, projectsCount: "FinTech Platforms & Web Systems" },
  { id: "ukraine", name: "Ukraine", shortCode: "UA", flagId: "flag-ukraine", region: "Eastern Europe", x: 555, y: 125, projectsCount: "Custom Software Architecture" },
  { id: "turkey", name: "Turkey", shortCode: "TR", flagId: "flag-turkey", region: "Middle East / Europe", x: 560, y: 160, projectsCount: "E-Commerce Platforms" },
  { id: "iran", name: "Iran", shortCode: "IR", flagId: "flag-iran", region: "Middle East", x: 605, y: 180, projectsCount: "Digital Platforms" },
  { id: "uae", name: "United Arab Emirates", shortCode: "UAE", flagId: "flag-uae", region: "Middle East", x: 615, y: 220, projectsCount: "Logistics & Enterprise Mobility" },
  { id: "nepal", name: "Nepal", shortCode: "NP", flagId: "flag-nepal", region: "South Asia", x: 720, y: 215, projectsCount: "Cloud Systems & IT" },
  { id: "china", name: "China", shortCode: "CN", flagId: "flag-china", region: "East Asia", x: 775, y: 190, projectsCount: "Mobile & Web Apps" },
  { id: "malaysia", name: "Malaysia", shortCode: "MY", flagId: "flag-malaysia", region: "Southeast Asia", x: 775, y: 285, projectsCount: "SaaS Platforms" },
  { id: "singapore", name: "Singapore", shortCode: "SG", flagId: "flag-singapore", region: "Southeast Asia", x: 780, y: 298, projectsCount: "FinTech & Cloud Solutions" },
  { id: "uganda", name: "Uganda", shortCode: "UG", flagId: "flag-uganda", region: "East Africa", x: 575, y: 290, projectsCount: "HealthTech & Web Systems" },
  { id: "south-africa", name: "South Africa", shortCode: "ZA", flagId: "flag-south-africa", region: "Southern Africa", x: 555, y: 400, projectsCount: "Enterprise IT Systems" },
  AUSTRALIA_HQ,
];

export interface GlobalReachMapProps {
  hideHeader?: boolean;
}

export const GlobalReachMap: React.FC<GlobalReachMapProps> = ({ hideHeader = false }) => {
  const [activePin, setActivePin] = useState<CountryPin | null>(null);

  // Helper to calculate SVG arc quadratic curve
  const getArcPath = (targetX: number, targetY: number) => {
    const startX = INDIA_HUB.x;
    const startY = INDIA_HUB.y;
    const midX = (startX + targetX) / 2;
    const midY = (startY + targetY) / 2;
    const dist = Math.sqrt(Math.pow(targetX - startX, 2) + Math.pow(targetY - startY, 2));
    const curveOffset = Math.min(80, Math.max(25, dist * 0.22));
    const controlY = midY - curveOffset;

    return `M ${startX} ${startY} Q ${midX} ${controlY} ${targetX} ${targetY}`;
  };

  return (
    <section className="global-reach-section" style={hideHeader ? { padding: "0" } : undefined}>
      <div className="global-reach-container" style={hideHeader ? { maxWidth: "100%", width: "100%" } : undefined}>
        {/* Section Header */}
        {!hideHeader && (
          <div className="section-head" style={{ marginBottom: "24px", textAlign: "center" }}>
            <span className="section-tag" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <FaGlobe style={{ color: "#ffffff" }} /> OUR GLOBAL REACH
            </span>
            <h2 className="section-title" style={{ fontSize: "clamp(28px, 4vw, 44px)", margin: "10px 0 12px 0", color: "#ffffff" }}>
              Connecting Solutions Across Boundaries
            </h2>
            <p className="section-desc" style={{ maxWidth: "680px", margin: "0 auto", color: "#aaaaaa" }}>
              Engineered in India, delivering enterprise software, cloud infrastructure, and AI solutions across 13+ countries globally.
            </p>
          </div>
        )}

        {/* Matte Black Map Canvas Container */}
        <div className="global-map-wrapper-matte">
          <svg
            className="global-map-svg"
            viewBox="0 0 1000 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* ALL 14 VECTOR COUNTRY SVG FLAGS DEFINITIONS */}
              {/* 1. India */}
              <g id="flag-india">
                <rect width="18" height="12" rx="2" fill="#ffffff" stroke="#333333" strokeWidth="0.5" />
                <rect width="18" height="4" fill="#FF9933" />
                <rect y="8" width="18" height="4" fill="#138808" />
                <circle cx="9" cy="6" r="1.4" fill="#000080" />
              </g>

              {/* 2. USA */}
              <g id="flag-usa">
                <rect width="18" height="12" rx="2" fill="#B31942" stroke="#333333" strokeWidth="0.5" />
                <rect y="2" width="18" height="2" fill="#ffffff" />
                <rect y="6" width="18" height="2" fill="#ffffff" />
                <rect y="10" width="18" height="2" fill="#ffffff" />
                <rect width="8.5" height="6" fill="#0A3161" />
                <circle cx="4.2" cy="3" r="0.9" fill="#ffffff" />
              </g>

              {/* 3. UK */}
              <g id="flag-uk">
                <rect width="18" height="12" rx="2" fill="#00247D" stroke="#333333" strokeWidth="0.5" />
                <path d="M 0 0 L 18 12 M 18 0 L 0 12" stroke="#ffffff" strokeWidth="2.4" />
                <path d="M 0 0 L 18 12 M 18 0 L 0 12" stroke="#CF142B" strokeWidth="1.3" />
                <path d="M 9 0 V 12 M 0 6 H 18" stroke="#ffffff" strokeWidth="3.4" />
                <path d="M 9 0 V 12 M 0 6 H 18" stroke="#CF142B" strokeWidth="2" />
              </g>

              {/* 4. Ukraine */}
              <g id="flag-ukraine">
                <rect width="18" height="12" rx="2" fill="#FFD700" stroke="#333333" strokeWidth="0.5" />
                <rect width="18" height="6" fill="#0057B7" />
              </g>

              {/* 5. Turkey */}
              <g id="flag-turkey">
                <rect width="18" height="12" rx="2" fill="#E30A17" stroke="#333333" strokeWidth="0.5" />
                <circle cx="7" cy="6" r="3.2" fill="#ffffff" />
                <circle cx="8" cy="6" r="2.5" fill="#E30A17" />
                <polygon points="11,6 12.4,5.2 12.4,6.8" fill="#ffffff" />
              </g>

              {/* 6. Iran */}
              <g id="flag-iran">
                <rect width="18" height="12" rx="2" fill="#ffffff" stroke="#333333" strokeWidth="0.5" />
                <rect width="18" height="4" fill="#239F40" />
                <rect y="8" width="18" height="4" fill="#DA0000" />
                <circle cx="9" cy="6" r="1.3" fill="#DA0000" />
              </g>

              {/* 7. UAE */}
              <g id="flag-uae">
                <rect width="18" height="12" rx="2" fill="#ffffff" stroke="#333333" strokeWidth="0.5" />
                <rect width="18" height="4" fill="#00732F" />
                <rect y="8" width="18" height="4" fill="#000000" />
                <rect width="5" height="12" fill="#FF0000" />
              </g>

              {/* 8. Nepal */}
              <g id="flag-nepal">
                <rect width="18" height="12" rx="2" fill="#000000" stroke="#333333" strokeWidth="0.5" />
                <polygon points="2,1 12,6 4.5,6 13,11 2,11" fill="#DC143C" stroke="#003893" strokeWidth="0.8" />
                <circle cx="5.5" cy="4.5" r="1" fill="#ffffff" />
                <circle cx="5.5" cy="8.5" r="1" fill="#ffffff" />
              </g>

              {/* 9. China */}
              <g id="flag-china">
                <rect width="18" height="12" rx="2" fill="#DE2910" stroke="#333333" strokeWidth="0.5" />
                <polygon points="4.5,3 5,4.5 3.5,3.5 5.5,3.5 4,4.5" fill="#FFDE00" />
              </g>

              {/* 10. Malaysia */}
              <g id="flag-malaysia">
                <rect width="18" height="12" rx="2" fill="#CC0000" stroke="#333333" strokeWidth="0.5" />
                <rect y="1.6" width="18" height="1.6" fill="#ffffff" />
                <rect y="4.8" width="18" height="1.6" fill="#ffffff" />
                <rect y="8.0" width="18" height="1.6" fill="#ffffff" />
                <rect width="9" height="6.4" fill="#000066" />
                <circle cx="4.5" cy="3.2" r="2" fill="#FFCC00" />
                <circle cx="5.2" cy="3.2" r="1.6" fill="#000066" />
              </g>

              {/* 11. Singapore */}
              <g id="flag-singapore">
                <rect width="18" height="12" rx="2" fill="#ffffff" stroke="#333333" strokeWidth="0.5" />
                <rect width="18" height="6" fill="#ED2939" />
                <circle cx="4.5" cy="3" r="1.8" fill="#ffffff" />
                <circle cx="5.2" cy="3" r="1.5" fill="#ED2939" />
              </g>

              {/* 12. Uganda */}
              <g id="flag-uganda">
                <rect width="18" height="12" rx="2" fill="#000000" stroke="#333333" strokeWidth="0.5" />
                <rect y="2" width="18" height="2" fill="#FCDC04" />
                <rect y="4" width="18" height="2" fill="#D9241D" />
                <rect y="6" width="18" height="2" fill="#000000" />
                <rect y="8" width="18" height="2" fill="#FCDC04" />
                <rect y="10" width="18" height="2" fill="#D9241D" />
                <circle cx="9" cy="6" r="1.8" fill="#ffffff" />
              </g>

              {/* 13. South Africa */}
              <g id="flag-south-africa">
                <rect width="18" height="12" rx="2" fill="#002395" stroke="#333333" strokeWidth="0.5" />
                <rect width="18" height="6" fill="#DE3831" />
                <polygon points="0,0 8,6 0,12" fill="#000000" />
                <polygon points="0,0 8,6 0,12" stroke="#FFB81C" strokeWidth="0.9" fill="none" />
                <path d="M 0 6 H 18" stroke="#007A4D" strokeWidth="2.5" />
              </g>

              {/* 14. Australia */}
              <g id="flag-australia">
                <rect width="18" height="12" rx="2" fill="#000085" stroke="#333333" strokeWidth="0.5" />
                <rect width="9" height="6" fill="#00247D" />
                <path d="M 0 0 L 9 6 M 9 0 L 0 6" stroke="#ffffff" strokeWidth="1.3" />
                <path d="M 4.5 0 V 6 M 0 3 H 9" stroke="#CF142B" strokeWidth="0.9" />
                <circle cx="13.5" cy="8.5" r="0.9" fill="#ffffff" />
                <circle cx="15.5" cy="4.5" r="0.7" fill="#ffffff" />
              </g>
            </defs>

            {/* HIGH-PRECISION MONOCHROME VECTOR WORLD MAP SILHOUETTE */}
            <g className="world-continents-matte">
              {/* North America mainland */}
              <path
                d="M 60 110 L 90 70 L 140 50 L 220 45 L 290 55 L 320 85 L 305 130 L 290 145 L 295 165 L 280 185 L 260 205 L 220 215 L 195 255 L 180 275 L 165 240 L 170 210 L 140 190 L 110 180 L 80 140 Z"
                fill="rgba(255, 255, 255, 0.05)"
                stroke="rgba(255, 255, 255, 0.22)"
                strokeWidth="1"
              />
              {/* Alaska & Islands */}
              <path
                d="M 40 90 L 80 75 L 75 110 L 45 115 Z"
                fill="rgba(255, 255, 255, 0.04)"
                stroke="rgba(255, 255, 255, 0.18)"
                strokeWidth="0.8"
              />
              {/* Greenland */}
              <path
                d="M 310 40 L 380 30 L 400 65 L 340 75 Z"
                fill="rgba(255, 255, 255, 0.04)"
                stroke="rgba(255, 255, 255, 0.18)"
                strokeWidth="0.8"
              />
              {/* South America */}
              <path
                d="M 250 270 L 290 260 L 330 280 L 360 320 L 350 370 L 310 440 L 280 470 L 270 430 L 275 360 L 255 310 Z"
                fill="rgba(255, 255, 255, 0.05)"
                stroke="rgba(255, 255, 255, 0.22)"
                strokeWidth="1"
              />
              {/* British Isles (UK & Ireland) */}
              <path
                d="M 465 110 L 485 105 L 485 130 L 470 135 Z"
                fill="rgba(255, 255, 255, 0.09)"
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="1"
              />
              {/* Scandinavia */}
              <path
                d="M 510 50 L 550 45 L 565 75 L 535 110 L 515 90 Z"
                fill="rgba(255, 255, 255, 0.05)"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="1"
              />
              {/* Mainland Europe */}
              <path
                d="M 460 140 L 500 120 L 550 110 L 570 120 L 560 155 L 530 165 L 490 160 Z"
                fill="rgba(255, 255, 255, 0.05)"
                stroke="rgba(255, 255, 255, 0.22)"
                strokeWidth="1"
              />
              {/* Africa */}
              <path
                d="M 460 190 L 520 180 L 580 190 L 600 230 L 580 270 L 580 320 L 560 390 L 540 430 L 520 400 L 510 340 L 490 300 L 450 240 L 450 210 Z"
                fill="rgba(255, 255, 255, 0.05)"
                stroke="rgba(255, 255, 255, 0.22)"
                strokeWidth="1"
              />
              {/* Madagascar */}
              <path
                d="M 605 340 L 620 350 L 610 395 L 595 385 Z"
                fill="rgba(255, 255, 255, 0.04)"
                stroke="rgba(255, 255, 255, 0.18)"
                strokeWidth="0.8"
              />
              {/* Middle East & Arabia */}
              <path
                d="M 560 165 L 610 160 L 640 180 L 630 220 L 620 250 L 580 240 L 570 200 Z"
                fill="rgba(255, 255, 255, 0.05)"
                stroke="rgba(255, 255, 255, 0.22)"
                strokeWidth="1"
              />
              {/* Asia & Russia */}
              <path
                d="M 570 140 L 650 110 L 750 75 L 880 65 L 920 95 L 890 150 L 840 170 L 820 220 L 780 250 L 750 280 L 730 250 L 710 210 L 670 200 L 630 170 Z"
                fill="rgba(255, 255, 255, 0.05)"
                stroke="rgba(255, 255, 255, 0.22)"
                strokeWidth="1"
              />
              {/* India Subcontinent */}
              <path
                d="M 670 200 L 715 200 L 730 240 L 710 285 L 685 275 L 670 230 Z"
                fill="rgba(255, 255, 255, 0.09)"
                stroke="rgba(255, 255, 255, 0.35)"
                strokeWidth="1.2"
              />
              {/* SE Asia & Indochina */}
              <path
                d="M 750 250 L 780 250 L 775 295 L 755 280 Z"
                fill="rgba(255, 255, 255, 0.05)"
                stroke="rgba(255, 255, 255, 0.22)"
                strokeWidth="1"
              />
              {/* Indonesian Archipelago */}
              <path
                d="M 760 300 L 850 310 L 840 330 L 760 315 Z"
                fill="rgba(255, 255, 255, 0.04)"
                stroke="rgba(255, 255, 255, 0.18)"
                strokeWidth="0.8"
              />
              {/* Australia */}
              <path
                d="M 810 340 L 870 330 L 900 360 L 890 410 L 840 430 L 810 400 L 810 370 Z"
                fill="rgba(255, 255, 255, 0.05)"
                stroke="rgba(255, 255, 255, 0.22)"
                strokeWidth="1"
              />
              {/* New Zealand */}
              <path
                d="M 915 410 L 935 415 L 925 450 L 910 440 Z"
                fill="rgba(255, 255, 255, 0.04)"
                stroke="rgba(255, 255, 255, 0.18)"
                strokeWidth="0.8"
              />
              {/* Japan */}
              <path
                d="M 870 160 L 890 175 L 880 200 L 865 180 Z"
                fill="rgba(255, 255, 255, 0.07)"
                stroke="rgba(255, 255, 255, 0.25)"
                strokeWidth="1"
              />
            </g>

            {/* Tech Grid Coordinates Overlay */}
            <g opacity="0.08">
              {Array.from({ length: 25 }).map((_, rx) =>
                Array.from({ length: 12 }).map((_, cy) => (
                  <circle
                    key={`dot-${rx}-${cy}`}
                    cx={40 + rx * 39}
                    cy={30 + cy * 39}
                    r="1"
                    fill="#ffffff"
                  />
                ))
              )}
            </g>

            {/* 1. Simple Clean Static Arc Lines from India Hub */}
            {GLOBAL_COUNTRIES.map((c) => {
              const pathD = getArcPath(c.x, c.y);
              const isActive = activePin?.id === c.id;

              return (
                <path
                  key={`arc-path-${c.id}`}
                  d={pathD}
                  stroke={isActive ? "#ffffff" : "rgba(255, 255, 255, 0.22)"}
                  strokeWidth={isActive ? "2" : "1.2"}
                  fill="none"
                />
              );
            })}

            {/* 2. Destination Country Pins (Except Australia HQ) */}
            {GLOBAL_COUNTRIES.filter((c) => c.id !== "australia").map((c) => {
              const isActive = activePin?.id === c.id;

              return (
                <g
                  key={`pin-${c.id}`}
                  className={`map-pin-group ${isActive ? "active" : ""}`}
                  onClick={() => setActivePin(c)}
                  onMouseEnter={() => setActivePin(c)}
                  onMouseLeave={() => setActivePin(null)}
                  style={{ cursor: "pointer" }}
                >
                  {/* Outer White Pulse Ring */}
                  <circle
                    cx={c.x}
                    cy={c.y}
                    r={isActive ? "10" : "5.5"}
                    fill="rgba(255, 255, 255, 0.15)"
                    stroke="#ffffff"
                    strokeWidth={isActive ? "1.5" : "0.8"}
                  />

                  {/* Inner Solid White Core */}
                  <circle
                    cx={c.x}
                    cy={c.y}
                    r={isActive ? "4" : "2.5"}
                    fill="#ffffff"
                    stroke="#000000"
                    strokeWidth="1"
                  />

                  {/* Visual SVG Flag Badge */}
                  <g transform={`translate(${c.x - 9}, ${c.y - 18})`}>
                    <use href={`#${c.flagId}`} x="0" y="0" />
                  </g>
                </g>
              );
            })}

            {/* 3. INDIA DEVELOPMENT HUB PIN */}
            <g className="map-hub-pin" style={{ cursor: "pointer" }} onClick={() => setActivePin(INDIA_HUB)}>
              {/* Core Dot */}
              <circle cx={INDIA_HUB.x} cy={INDIA_HUB.y} r="5.5" fill="#ffffff" stroke="#000000" strokeWidth="1.5" />

              {/* DEVELOPMENT HUB Badge */}
              <g transform={`translate(${INDIA_HUB.x - 78}, ${INDIA_HUB.y + 12})`}>
                <rect x="0" y="0" width="156" height="20" rx="10" fill="rgba(5, 5, 5, 0.95)" stroke="#ffffff" strokeWidth="1.2" />
                <use href="#flag-india" x="5" y="4" />
                <text x="82" y="14" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="900" letterSpacing="0.6">
                  DEVELOPMENT HUB
                </text>
              </g>
            </g>

            {/* 4. AUSTRALIA HEADQUARTERS PIN */}
            <g className="map-hq-pin" style={{ cursor: "pointer" }} onClick={() => setActivePin(AUSTRALIA_HQ)}>
              {/* Core Dot */}
              <circle cx={AUSTRALIA_HQ.x} cy={AUSTRALIA_HQ.y} r="5.5" fill="#ffffff" stroke="#000000" strokeWidth="1.5" />

              {/* HEADQUARTERS Badge */}
              <g transform={`translate(${AUSTRALIA_HQ.x - 70}, ${AUSTRALIA_HQ.y + 12})`}>
                <rect x="0" y="0" width="140" height="20" rx="10" fill="rgba(5, 5, 5, 0.95)" stroke="#ffffff" strokeWidth="1.2" />
                <use href="#flag-australia" x="5" y="4" />
                <text x="74" y="14" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="900" letterSpacing="0.6">
                  HEADQUARTERS
                </text>
              </g>
            </g>
          </svg>

          {/* Floating Active Info Card Overlay */}
          {activePin && (
            <div className="global-map-tooltip-matte">
              <div className="tooltip-header">
                <svg width="24" height="16" viewBox="0 0 18 12" style={{ borderRadius: "2px", overflow: "hidden" }}>
                  <use href={`#${activePin.flagId}`} />
                </svg>
                <div>
                  <h4 className="tooltip-title">{activePin.name}</h4>
                  <span className="tooltip-region">{activePin.region}</span>
                </div>
              </div>
              <div className="tooltip-body">
                <span className="tooltip-status">
                  <FaLocationArrow /> {activePin.isHeadquarters ? "Global Headquarters Office" : activePin.isHub ? "Development Headquarters & Engineering Hub" : "Active Client Delivery"}
                </span>
                {activePin.projectsCount && (
                  <p className="tooltip-desc">{activePin.projectsCount}</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
