import React from "react";
import "./styles/TrustedClientsMatrix.css";

interface ClientLogoItem {
  id: string;
  name: string;
  logoUrl: string;
}

// 28 unique client logos from public/Logos arranged in pyramid rows
const CLIENT_MATRIX_ROWS: ClientLogoItem[][] = [
  // Row 1 (8 logos)
  [
    { id: "1", name: "ECD KART", logoUrl: "/Logos/ecdkart_logo.png" },
    { id: "2", name: "Tour & Hop", logoUrl: "/Logos/2caf55be-47ac-4373-8088-927b3b572f0c_clean.png" },
    { id: "5", name: "KhetiSwags", logoUrl: "/Logos/58d578af-b023-460d-9fce-00bd0241b8e6_clean.png" },
    { id: "6", name: "AccuAi", logoUrl: "/Logos/AccuAi-1-3.png" },
    { id: "7", name: "BV3", logoUrl: "/Logos/BV3.png" },
    { id: "8", name: "Ghavri Sports Foundation", logoUrl: "/Logos/cropped-Untitled-design-4-150x101_clean.png" },
  ],
  // Row 2 (7 logos)
  [
    { id: "9", name: "Integratorz", logoUrl: "/Logos/Integratorz - 1.jpg" },
    { id: "10", name: "Client Logo 10", logoUrl: "/Logos/Layer_1-2.svg" },
    { id: "13", name: "Client Logo 13", logoUrl: "/Logos/logo-header.svg" },
    { id: "14", name: "Velocity", logoUrl: "/Logos/logo.fb9bac30ae49f42d4650.png" },
    { id: "15", name: "Client Logo 15", logoUrl: "/Logos/logo_clean.png" },
  ],
  // Row 3 (6 logos)
  [
    { id: "16", name: "Client Logo 16", logoUrl: "/Logos/logo12-DKwHiysW.png" },
    { id: "17", name: "Tech Master", logoUrl: "/Logos/logo_transparent-removebg-preview-Hdvp_fqn.png" },
    { id: "18", name: "Majestic Pride", logoUrl: "/Logos/majestic-pride.svg" },
    { id: "19", name: "Orbof", logoUrl: "/Logos/orbof_clean.png" },
    { id: "20", name: "Client Logo 20", logoUrl: "/Logos/oveBG-DVQSTMaC.webp" },
    { id: "21", name: "Paperbill", logoUrl: "/Logos/PAPERBILL - 1_clean.png" },
  ],
  // Row 4 (4 logos)
  [
    { id: "22", name: "Prshil", logoUrl: "/Logos/prshil.png" },
    { id: "23", name: "StudyIQ", logoUrl: "/Logos/studyiq.webp" },
    { id: "24", name: "TNI", logoUrl: "/Logos/Tni - 1.png" },
    { id: "25", name: "Trider", logoUrl: "/Logos/trider-logo.7715c798dd4cf1aceebf.png" },
  ],
  // Row 5 (3 logos)
  [
    { id: "26", name: "Waseeny", logoUrl: "/Logos/Waseeny Logo Final (1) 1.png" },
    { id: "27", name: "The Gig Community", logoUrl: "/Logos/WhatsApp Image 2026-02-14 at 7.38.27 PM 2_transparent.png" },
    { id: "28", name: "White Logo", logoUrl: "/Logos/White-Logo-PNG-horizontal.webp" },
  ],
];

export const TrustedClientsMatrix: React.FC = () => {
  return (
    <section className="trusted-matrix-section">
      <div className="trusted-matrix-bg">
        <div className="trusted-grid-mesh"></div>
      </div>

      <div className="trusted-matrix-container">
        {CLIENT_MATRIX_ROWS.map((row, rowIdx) => (
          <div key={`row-${rowIdx}`} className="matrix-row">
            {row.map((item) => (
              <div key={item.id} className="matrix-card-pill" title={item.name}>
                <img src={item.logoUrl} alt={item.name} className="matrix-card-img" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
