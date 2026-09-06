import React from "react";
import {
  MdOutlineCode,
  MdOutlinePhoneIphone,
  MdOutlineTerminal,
  MdOutlinePsychology,
  MdOutlineCloudQueue,
  MdOutlineApi,
  MdOutlineDns,
  MdOutlinePalette,
  MdOutlineSecurity,
  MdOutlineAnalytics,
} from "react-icons/md";
import "./styles/ServicesBranchDiagram.css";

export interface BranchServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: React.ReactNode;
  tags: string[];
  deliverables: string[];
  benefits: string[];
}

export const BRANCH_SERVICES_DATA: BranchServiceItem[] = [
  {
    id: "01",
    number: "SERVICE 01",
    title: "Web Development",
    shortDesc: "High-performance, accessible, sub-second web applications.",
    fullDesc:
      "We build modern enterprise web applications engineered for speed, SEO, security, and scalability. From dynamic web portals to high-throughput client platforms, our code adheres to strict web standards and elegant visual aesthetics.",
    icon: <MdOutlineCode />,
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    deliverables: [
      "Custom Server-Side Rendered (SSR) & Static Web Applications",
      "Progressive Web Apps (PWAs) with Offline Support",
      "Headless Content Management Systems (CMS)",
      "Performance & SEO Optimization Audits",
    ],
    benefits: [
      "Lightning-fast load times and sub-second page rendering",
      "Higher conversion rates and user engagement",
      "Superior search engine ranking and discoverability",
    ],
  },
  {
    id: "02",
    number: "SERVICE 02",
    title: "Mobile App Development",
    shortDesc: "Cross-platform and native mobile experiences with smooth animations.",
    fullDesc:
      "Native and cross-platform mobile solutions engineered for iOS and Android. We craft intuitive interfaces, offline-first architectures, and seamless device integrations.",
    icon: <MdOutlinePhoneIphone />,
    tags: ["React Native", "Flutter", "iOS (Swift)", "Android"],
    deliverables: [
      "Cross-Platform iOS & Android Mobile Apps",
      "Biometric Authentication & Device Security Integrations",
      "Offline Sync & Local Database Management",
      "App Store & Google Play Publishing Support",
    ],
    benefits: [
      "Single codebase reducing mobile development lifecycle duration",
      "Consistent high-performance UX across all handheld devices",
      "Direct push notification engagement workflows",
    ],
  },
  {
    id: "03",
    number: "SERVICE 03",
    title: "Custom Software Engineering",
    shortDesc: "Tailored software systems engineered to solve complex challenges.",
    fullDesc:
      "Purpose-built software systems tailored to your proprietary business workflows. We eliminate operational bottlenecks with custom desktop, web, and enterprise platforms.",
    icon: <MdOutlineTerminal />,
    tags: ["Node.js", "Python", "TypeScript", "PostgreSQL"],
    deliverables: [
      "Enterprise Resource Planning (ERP) Modules",
      "Custom Internal Workflow Automation Engines",
      "Legacy Codebase Refactoring & Migration",
      "Role-Based Access Governance Systems",
    ],
    benefits: [
      "100% ownership of custom proprietary code and IP",
      "Elimination of recurring third-party SaaS license fees",
      "Seamless integration with existing internal legacy tools",
    ],
  },
  {
    id: "04",
    number: "SERVICE 04",
    title: "AI & Machine Learning",
    shortDesc: "LLM integrations, natural language search & RAG pipelines.",
    fullDesc:
      "Integrating intelligence into business operations. We build custom RAG knowledge pipelines, LLM fine-tuning, vector search engines, and process automation tools.",
    icon: <MdOutlinePsychology />,
    tags: ["Python", "LangChain", "OpenAI APIs", "Vector DB"],
    deliverables: [
      "Retrieval-Augmented Generation (RAG) Document Assistants",
      "Natural Language Knowledge Search Engines",
      "Automated Document Summarization & Extraction",
      "Predictive Analytics & Recommendation Engines",
    ],
    benefits: [
      "80% reduction in manual document research duration",
      "Instant 24/7 automated intelligent query resolution",
      "Complete enterprise data isolation and security",
    ],
  },
  {
    id: "05",
    number: "SERVICE 05",
    title: "SaaS Development",
    shortDesc: "Multi-tenant software platforms built for high security & billing.",
    fullDesc:
      "End-to-end SaaS engineering for software founders and enterprises. Multi-tenant data architectures, Stripe subscription billing, tenant isolation, and automated onboarding.",
    icon: <MdOutlineCloudQueue />,
    tags: ["Next.js", "Node.js", "Redis", "Stripe API"],
    deliverables: [
      "Multi-Tenant Database & API Architectures",
      "Stripe & Recurring Billing Integration",
      "Automated Tenant Provisioning & Onboarding",
      "Admin Analytics & Subscription Telemetry",
    ],
    benefits: [
      "Predictable recurring revenue model execution",
      "Sub-second tenant provisioning and zero-downtime deploys",
      "Bank-grade enterprise tenant isolation security",
    ],
  },
  {
    id: "06",
    number: "SERVICE 06",
    title: "API & Microservices",
    shortDesc: "High-throughput backend architectures and sub-second APIs.",
    fullDesc:
      "Resilient, high-concurrency microservices architectures. We design RESTful APIs, GraphQL endpoints, WebSocket streams, and API gateway infrastructures.",
    icon: <MdOutlineApi />,
    tags: ["Node.js", "Express", "GraphQL", "Redis"],
    deliverables: [
      "High-Concurrency Microservices Architectures",
      "Sub-Second REST & GraphQL API Endpoints",
      "Real-Time WebSocket Data Streams",
      "API Gateway & Rate-Limiting Protection",
    ],
    benefits: [
      "Sub-100ms response latency across core API endpoints",
      "Independent microservice scalability under traffic spikes",
      "Decoupled frontend and backend development velocity",
    ],
  },
  {
    id: "07",
    number: "SERVICE 07",
    title: "Cloud Infrastructure & DevOps",
    shortDesc: "Automated CI/CD pipelines, containerization & AWS deployment.",
    fullDesc:
      "Automating infrastructure deployment, continuous delivery, and cloud security. Infrastructure as Code (IaC), Docker containerization, Kubernetes, and AWS architectures.",
    icon: <MdOutlineDns />,
    tags: ["AWS", "Docker", "Kubernetes", "GitHub Actions"],
    deliverables: [
      "AWS & Multi-Cloud Architecture Deployment",
      "Automated CI/CD Build & Test Pipelines",
      "Docker Containerization & Kubernetes Clusters",
      "Auto-Scaling & Disaster Recovery Setup",
    ],
    benefits: [
      "99.99% operational system uptime SLA guarantees",
      "Zero-downtime automated deployment release pipelines",
      "Reduced cloud hosting overhead via automated scaling",
    ],
  },
  {
    id: "08",
    number: "SERVICE 08",
    title: "UI/UX & Design Systems",
    shortDesc: "Human-centered digital design systems & interactive visual aesthetics.",
    fullDesc:
      "Transforming complex product logic into effortless, beautiful user interfaces. Design systems, dark-mode visual aesthetics, interactive prototypes, and usability testing.",
    icon: <MdOutlinePalette />,
    tags: ["Figma", "Design Systems", "Prototypes", "UI/UX"],
    deliverables: [
      "Enterprise Component Design Systems",
      "Interactive High-Fidelity Figma Prototypes",
      "User Journey Mapping & Wireframing",
      "Dark-Mode Aesthetic Visual Guidelines",
    ],
    benefits: [
      "Consistent brand equity across all web and mobile touchpoints",
      "Reduced development time via standardized UI tokens",
      "Higher user adoption and intuitive navigation flows",
    ],
  },
  {
    id: "09",
    number: "SERVICE 09",
    title: "Cybersecurity & Compliance",
    shortDesc: "SOC 2 security standards, end-to-end encryption & audit trails.",
    fullDesc:
      "Hardening digital infrastructure against vulnerabilities. Penetration testing, AES-256 end-to-end encryption, automated audit trails, and SOC 2/HIPAA compliance engineering.",
    icon: <MdOutlineSecurity />,
    tags: ["AES-256", "OAuth 2.0", "SOC 2", "HIPAA"],
    deliverables: [
      "AES-256 Data Encryption at Rest & in Transit",
      "Automated Compliance Audit Logging Systems",
      "Penetration Vulnerability Audits",
      "Role-Based Identity & Access Governance (IAM)",
    ],
    benefits: [
      "Complete protection against data breaches and unauthorized access",
      "Simplified enterprise compliance audit sign-offs",
      "Enhanced client trust through bank-grade security protocols",
    ],
  },
  {
    id: "10",
    number: "SERVICE 10",
    title: "Data Engineering & Telemetry",
    shortDesc: "Real-time event streaming, Redis caching & data pipelines.",
    fullDesc:
      "Architecting data pipelines that process high-volume operational events. Real-time telemetry, Redis memory caching, PostgreSQL data warehouses, and analytics dashboards.",
    icon: <MdOutlineAnalytics />,
    tags: ["PostgreSQL", "Redis", "Kafka", "Data Warehousing"],
    deliverables: [
      "High-Volume Data Pipeline Architecture",
      "Real-Time Analytics & Event Telemetry Dashboards",
      "In-Memory Caching Optimization Suites",
      "Automated Database Backup & Replication",
    ],
    benefits: [
      "Instant business decision intelligence visibility",
      "Sub-second data query response execution",
      "High-availability data redundancy and failover safety",
    ],
  },
];

export const ServicesBranchDiagram: React.FC = () => {
  const leftServices = BRANCH_SERVICES_DATA.slice(0, 5);
  const rightServices = BRANCH_SERVICES_DATA.slice(5, 10);

  // Precise Hub & Card Edge Geometry Constants
  const cx = 650;
  const cy = 410;
  const hubRadius = 95;
  const leftCardEdge = 440;
  const rightCardEdge = 860;

  return (
    <section className="services-branch-section">
      <div className="section-head" style={{ marginBottom: "50px" }}>
        <span className="section-tag">FULL SERVICE DIRECTORY</span>
        <h2 className="section-title">All Core Capabilities</h2>
        <p className="section-desc">
          Explore our comprehensive end-to-end technology capabilities and core engineering services.
        </p>
      </div>

      <div className="services-branch-container">
        <div className="services-branch-layout">
          {/* SVG Connecting Branch Lines Canvas with Exact Border Coordinate Matching */}
          <svg className="services-svg-canvas" viewBox="0 0 1300 820" preserveAspectRatio="none">
            {/* Left 5 connections */}
            {leftServices.map((_, i) => {
              const targetY = 166 + i * 122;
              const angle = Math.atan2(targetY - cy, leftCardEdge - cx);
              const xHub = cx + hubRadius * Math.cos(angle);
              const yHub = cy + hubRadius * Math.sin(angle);

              return (
                <path
                  key={`left-${i}`}
                  d={`M ${xHub} ${yHub} C ${xHub - 50} ${yHub}, ${leftCardEdge + 50} ${targetY}, ${leftCardEdge} ${targetY}`}
                  fill="none"
                  stroke="rgba(229, 193, 88, 0.45)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
              );
            })}

            {/* Right 5 connections */}
            {rightServices.map((_, i) => {
              const targetY = 166 + i * 122;
              const angle = Math.atan2(targetY - cy, rightCardEdge - cx);
              const xHub = cx + hubRadius * Math.cos(angle);
              const yHub = cy + hubRadius * Math.sin(angle);

              return (
                <path
                  key={`right-${i}`}
                  d={`M ${xHub} ${yHub} C ${xHub + 50} ${yHub}, ${rightCardEdge - 50} ${targetY}, ${rightCardEdge} ${targetY}`}
                  fill="none"
                  stroke="rgba(229, 193, 88, 0.45)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
              );
            })}
          </svg>

          {/* Left Column of 5 Pill Service Cards */}
          <div className="services-column-left">
            {leftServices.map((serv) => (
              <div
                key={serv.id}
                className="service-pill-card"
              >
                <div className="service-pill-icon">{serv.icon}</div>
                <div className="service-pill-content">
                  <h3 className="service-pill-title">{serv.title}</h3>
                  <p className="service-pill-desc">{serv.shortDesc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Central Hub Circle - Circle Logo */}
          <div className="services-center-hub">
            <img
              src="/images/circlelogo.png"
              alt="04 O'Clock Technologies Logo"
              className="services-hub-logo"
            />
          </div>

          {/* Right Column of 5 Pill Service Cards */}
          <div className="services-column-right">
            {rightServices.map((serv) => (
              <div
                key={serv.id}
                className="service-pill-card"
              >
                <div className="service-pill-icon">{serv.icon}</div>
                <div className="service-pill-content">
                  <h3 className="service-pill-title">{serv.title}</h3>
                  <p className="service-pill-desc">{serv.shortDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

