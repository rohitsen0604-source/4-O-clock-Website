export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: "Web" | "Mobile" | "SaaS" | "AI" | "FinTech" | "Healthcare";
  industry: string;
  shortDesc: string;
  fullDesc: string;
  client: string;
  year: string;
  technologies: string[];
  services: string[];
  image: string;
  videoUrl?: string;
  videoPoster?: string;
  projectUrl?: string;
  challenge: string;
  solution: string;
  keyFeatures: string[];
  results: string[];
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "01",
    slug: "tech-master-media",
    title: "Tech Master",
    category: "Web",
    industry: "Tech, Automotive & Entertainment Media",
    shortDesc:
      "Indian tech, automotive and entertainment media company covering technology, mobility, automotive innovations, and digital culture stories.",
    fullDesc:
      "Tech Master is a premier Indian tech, automotive, and entertainment media company delivering breaking coverage of cutting-edge technology, smart mobility, electric vehicles, and digital culture with high-fidelity interactive media experiences.",
    client: "Tech Master Studio",
    year: "2026",
    technologies: ["React", "TypeScript", "Three.js", "Vite", "Tailwind CSS", "Node.js"],
    services: ["Web Development", "UI/UX Design", "3D Web Graphics", "Cloud & DevOps"],
    image: "/Projects/techmaster.jpg",
    videoPoster: "/Projects/techmaster.jpg",
    projectUrl: "https://www.techmasterco.com/",
    challenge:
      "Tech Master required an ultra-fast, high-performance interactive media portal capable of handling viral traffic surges during major vehicle launches and tech reveals, with fluid 3D vehicle visualizers and real-time editorial feeds.",
    solution:
      "We engineered a Next.js and Three.js-powered digital media web platform optimized with Vite, edge caching, responsive typography, and custom dark-mode aesthetics tailored for automotive and technology enthusiasts.",
    keyFeatures: [
      "Interactive 3D vehicle telemetry & specifications showcase",
      "Real-time tech and automotive news publishing pipeline",
      "Sub-second global load speeds optimized with edge caching",
      "Cinematic dark-mode UI with fluid micro-interactions",
    ],
    results: [
      "Sub-150ms global average page load performance",
      "Over 100,000+ monthly active readers and automotive enthusiasts engaged",
      "48% increase in average session duration through interactive 3D media",
    ],
  },
  {
    id: "02",
    slug: "nexus-fintech-platform",
    title: "Nexus FinTech Operating System",
    category: "FinTech",
    industry: "FinTech & Financial Services",
    shortDesc: "Next-gen enterprise banking dashboard featuring real-time transaction telemetry and automated compliance audit trails.",
    fullDesc:
      "Nexus is a modern financial technology platform engineered to process high-concurrency cross-border settlement requests, automated ledger reconciliation, and real-time risk analytics.",
    client: "Nexus Global Capital",
    year: "2025",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Tailwind CSS"],
    services: ["Web Development", "API & Backend", "UI/UX Design", "Cloud & DevOps"],
    image: "/Projects/82c0298f-6b2f-49ba-92ac-cbe8b8afbf82.png",
    videoPoster: "/Projects/82c0298f-6b2f-49ba-92ac-cbe8b8afbf82.png",
    projectUrl: "https://nexus.04oclock.tech",
    challenge:
      "The client relied on legacy banking portals that suffered from high latency during peak market volume hours and lacked unified real-time transaction visibility.",
    solution:
      "We engineered a distributed microservices backend coupled with a sub-second Next.js web application utilizing WebSockets for real-time order matching and data stream rendering.",
    keyFeatures: [
      "Sub-second real-time transaction data stream",
      "Automated multi-currency ledger reconciliation",
      "Bank-grade AES-256 end-to-end data encryption",
      "Custom role-based admin governance permissions",
    ],
    results: [
      "99.99% system uptime achieved during peak trading events",
      "65% reduction in manual ledger audit processing time",
      "Sub-100ms response time across core API endpoints",
    ],
  },
  {
    id: "02",
    slug: "pulse-health-telemedicine",
    title: "Pulse Care Health Portal",
    category: "Healthcare",
    industry: "Healthcare & Life Sciences",
    shortDesc: "HIPAA-compliant telemedicine platform featuring encrypted video consultations and automated patient scheduling.",
    fullDesc:
      "Pulse Care connects healthcare providers directly with patients through secure HD video consultations, automated electronic health records (EHR) sync, and AI clinical summaries.",
    client: "PulseCare Health Network",
    year: "2025",
    technologies: ["React Native", "Next.js", "Python", "OpenAI APIs", "PostgreSQL", "WebRTC"],
    services: ["Mobile App Development", "Web Development", "AI & Machine Learning", "UI/UX Design"],
    image: "/Projects/ChatGPT Image 17 मार्च 2026, 11_23_36 pm.png",
    videoPoster: "/Projects/ChatGPT Image 17 मार्च 2026, 11_23_36 pm.png",
    projectUrl: "https://pulsecare.04oclock.tech",
    challenge:
      "Patients experienced friction when booking specialist appointments, while practitioners spent up to 3 hours daily filling out manual clinical notes.",
    solution:
      "We developed a unified cross-platform mobile and web application with integrated WebRTC video consultations and an AI notes assistant that converts voice consultations into clinical summaries.",
    keyFeatures: [
      "End-to-end encrypted WebRTC video consultation suite",
      "AI clinical summary generator for healthcare professionals",
      "Interactive appointment calendar with SMS/Push alerts",
      "HIPAA-compliant encrypted cloud storage architecture",
    ],
    results: [
      "Over 40,000 successful telehealth consultations conducted",
      "70% reduction in practitioner administrative paperwork duration",
      "4.9/5 patient satisfaction score across App Store platforms",
    ],
  },
  {
    id: "03",
    slug: "omni-commerce-saas",
    title: "OmniScale Cloud SaaS",
    category: "SaaS",
    industry: "E-Commerce & Retail",
    shortDesc: "Multi-tenant e-commerce management engine handling inventory sync across global marketplaces.",
    fullDesc:
      "OmniScale allows high-volume retail brands to unify multi-channel inventory management, warehouse fulfillment, and real-time shipping analytics under a single SaaS roof.",
    client: "OmniScale Retail Group",
    year: "2025",
    technologies: ["Next.js", "Node.js", "Express", "MongoDB", "Redis", "Docker", "AWS"],
    services: ["SaaS Development", "API & Backend", "Cloud & DevOps", "Business Automation"],
    image: "/Projects/ChatGPT Image 18 मार्च 2026, 01_07_21 am.png",
    videoPoster: "/Projects/ChatGPT Image 18 मार्च 2026, 01_07_21 am.png",
    projectUrl: "https://omniscale.04oclock.tech",
    challenge:
      "Managing stock inventory levels across Shopify, Amazon, and physical brick-and-mortar stores resulted in frequent stock-outs and inventory overselling.",
    solution:
      "We built an event-driven SaaS engine utilizing webhooks and Redis caching to synchronize inventory changes across all channels in under 3 seconds.",
    keyFeatures: [
      "Sub-3 second inventory synchronization engine",
      "Multi-tenant billing dashboard with Stripe subscription tiers",
      "Automated order routing to nearest fulfillment hubs",
      "Custom drag-and-drop analytics dashboard builder",
    ],
    results: [
      "Processed over $15M in multi-channel merchant volume",
      "Eliminated inventory overselling incidents completely",
      "99.98% platform reliability across peak Black Friday traffic",
    ],
  },
  {
    id: "04",
    slug: "synth-ai-automation",
    title: "SynthAI Intelligence Workflow",
    category: "AI",
    industry: "Business Automation & AI",
    shortDesc: "Enterprise AI knowledge engine enabling natural language querying over millions of unstructured documents.",
    fullDesc:
      "SynthAI empowers legal, compliance, and enterprise consulting teams to query, analyze, and summarize massive internal document repositories using natural language.",
    client: "Synth Technologies",
    year: "2026",
    technologies: ["Python", "LangChain", "OpenAI APIs", "Vector Database", "React", "TypeScript"],
    services: ["AI & Machine Learning", "Web Development", "Custom Software", "API Development"],
    image: "/Projects/ChatGPT Image 18 मार्च 2026, 12_01_37 am (2).png",
    videoPoster: "/Projects/ChatGPT Image 18 मार्च 2026, 12_01_37 am (2).png",
    projectUrl: "https://synthai.04oclock.tech",
    challenge:
      "Enterprise analysts spent days manually reviewing contracts, research papers, and audit files to locate specific policy clauses.",
    solution:
      "We built a Retrieval-Augmented Generation (RAG) knowledge pipeline backed by vector embeddings and a sleek dark-mode React interface for instant document synthesis.",
    keyFeatures: [
      "Natural language contract & audit query engine",
      "Vector search over millions of PDF and Word files",
      "Source citation highlighting with line-level accuracy",
      "Enterprise SSO integration with active directory",
    ],
    results: [
      "85% reduction in document research time for legal teams",
      "Instant query answers generated in under 2 seconds",
      "Complete data isolation ensuring private enterprise security",
    ],
  },
  {
    id: "05",
    slug: "logix-smart-freight",
    title: "Logix Track Logistics Suite",
    category: "Web",
    industry: "Logistics & Supply Chain",
    shortDesc: "Real-time fleet telemetry and route optimization engine for international cargo transportation.",
    fullDesc:
      "Logix Track provides supply chain operators with real-time GPS fleet tracking, automated route optimization, and driver dispatch workflows.",
    client: "Logix Global Freight",
    year: "2025",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Google Maps APIs", "Tailwind CSS"],
    services: ["Web Development", "Custom Software", "UI/UX Design", "API & Backend"],
    image: "/Projects/ChatGPT Image 18 मार्च 2026, 12_16_15 am.png",
    videoPoster: "/Projects/ChatGPT Image 18 मार्च 2026, 12_16_15 am.png",
    projectUrl: "https://logixtrack.04oclock.tech",
    challenge:
      "Logistics dispatches lacked real-time visibility into driver routes and vehicle diagnostics, causing delayed shipments and high fuel consumption.",
    solution:
      "We engineered a interactive web dispatch dashboard featuring live vector maps, traffic-aware re-routing, and automated delivery confirmation alerts.",
    keyFeatures: [
      "Live GPS fleet telemetry & vector map rendering",
      "Automated fuel-efficient route calculation algorithm",
      "Digital proof of delivery with signature & image capture",
      "Automated delay notification alerts to end clients",
    ],
    results: [
      "18% overall reduction in fleet fuel expenditure",
      "94% on-time delivery rate achieved across global routes",
      "Centralized oversight of over 500 active transit vehicles",
    ],
  },
  {
    id: "06",
    slug: "estatia-realestate-platform",
    title: "Estatia Luxury Real Estate",
    category: "Web",
    industry: "Real Estate & Architecture",
    shortDesc: "High-end real estate portal featuring interactive 3D virtual walkthroughs and automated lead matching.",
    fullDesc:
      "Estatia transforms property searching into a premium interactive experience with immersive 3D house tours, financial mortgage calculators, and agent booking.",
    client: "Estatia Properties",
    year: "2025",
    technologies: ["Next.js", "Three.js", "TypeScript", "Tailwind CSS", "GraphQL"],
    services: ["Web Development", "UI/UX Design", "Custom Software"],
    image: "/Projects/ChatGPT Image 18 मार्च 2026, 12_21_10 am.png",
    videoPoster: "/Projects/ChatGPT Image 18 मार्च 2026, 12_21_10 am.png",
    projectUrl: "https://estatia.04oclock.tech",
    challenge:
      "High-value luxury real estate clients required immersive digital property walkthroughs that standard 2D property photos could not deliver.",
    solution:
      "We built a Next.js platform integrating Three.js 3D web graphics, high-resolution media galleries, and fast property filtering.",
    keyFeatures: [
      "Interactive WebGL 3D property virtual tours",
      "Instant mortgage & payment breakdown calculators",
      "Filtered map search with neighborhood insights",
      "Direct agent appointment scheduling widget",
    ],
    results: [
      "3x increase in average session duration on property pages",
      "45% growth in high-value buyer consultation requests",
      "Selected as Top 10 Real Estate Web Platforms of 2025",
    ],
  },
  {
    id: "07",
    slug: "apex-analytics-dashboard",
    title: "Apex Analytics Dashboard",
    category: "SaaS",
    industry: "Enterprise Intelligence & Data",
    shortDesc: "Real-time executive metrics dashboard aggregating enterprise telemetry across cloud infrastructure.",
    fullDesc:
      "Apex Analytics delivers deep data insights, anomaly detection alerts, and executive telemetry reporting for enterprise IT teams.",
    client: "Apex Enterprise Cloud",
    year: "2026",
    technologies: ["React", "TypeScript", "D3.js", "Node.js", "ClickHouse"],
    services: ["SaaS Development", "UI/UX Design", "Data Telemetry"],
    image: "/Projects/ChatGPT Image 18 मार्च 2026, 12_26_44 am (2).png",
    videoPoster: "/Projects/ChatGPT Image 18 मार्च 2026, 12_26_44 am (2).png",
    projectUrl: "https://apex.04oclock.tech",
    challenge:
      "Enterprise executives lacked a unified dashboard to monitor system health and operational spend across multi-cloud deployments.",
    solution:
      "We created an ultra-fast analytics dashboard with custom vector charts, automated threshold alerts, and instant CSV/PDF export.",
    keyFeatures: [
      "Sub-second data visualization with WebGL rendering",
      "Automated anomaly detection alerts via Slack/Email",
      "Role-based workspace view filtering",
    ],
    results: [
      "Reduced incident detection time by 40%",
      "Unified telemetry for over 100 enterprise microservices",
    ],
  },
  {
    id: "08",
    slug: "zenith-mobile-banking",
    title: "Zenith Mobile Banking Suite",
    category: "Mobile",
    industry: "FinTech & Mobile Payments",
    shortDesc: "Intuitive iOS & Android mobile banking application supporting instant P2P payments and smart savings pots.",
    fullDesc:
      "Zenith Banking provides retail banking customers with effortless money transfers, biometric authentication, and intelligent automated budgeting.",
    client: "Zenith Financial",
    year: "2026",
    technologies: ["React Native", "TypeScript", "Node.js", "Redis", "Biometrics API"],
    services: ["Mobile App Development", "FinTech", "UI/UX Design"],
    image: "/Projects/ChatGPT Image Mar 18, 2026, 12_32_25 PM.png",
    videoPoster: "/Projects/ChatGPT Image Mar 18, 2026, 12_32_25 PM.png",
    projectUrl: "https://zenith.04oclock.tech",
    challenge:
      "Legacy mobile banking applications suffered from clunky navigation and slow biometric login response times.",
    solution:
      "We engineered a sleek React Native mobile application with zero-latency screen navigation and bank-grade biometric encryption.",
    keyFeatures: [
      "Instant FaceID / TouchID biometric login",
      "Smart automatic savings vault rules",
      "Real-time push transaction alerts",
    ],
    results: [
      "Over 100,000 active monthly app users",
      "4.8 star rating across App Store & Play Store",
    ],
  },
  {
    id: "09",
    slug: "aura-ai-assistant",
    title: "Aura Enterprise AI Workspace",
    category: "AI",
    industry: "Artificial Intelligence & Productive Software",
    shortDesc: "Cognitive AI copilot integrating directly into internal workflows to streamline task automation.",
    fullDesc:
      "Aura AI streamlines daily operations by automating repetitive data entry, email drafting, and intelligent calendar orchestration.",
    client: "Aura Systems",
    year: "2026",
    technologies: ["Python", "OpenAI APIs", "Next.js", "Tailwind CSS", "FastAPI"],
    services: ["AI & Machine Learning", "Web Development", "Workflow Automation"],
    image: "/Projects/ChatGPT Image Mar 18, 2026, 12_32_56 PM.png",
    videoPoster: "/Projects/ChatGPT Image Mar 18, 2026, 12_32_56 PM.png",
    projectUrl: "https://aura.04oclock.tech",
    challenge:
      "Corporate teams wasted hours daily switching between disparate productivity apps to manually update project statuses.",
    solution:
      "We built a smart AI copilot that acts as a central hub, connecting project tools through intelligent natural language commands.",
    keyFeatures: [
      "Context-aware workflow copilot",
      "Automated summary generation for video meetings",
      "Deep integration with Jira, Slack, and Notion",
    ],
    results: [
      "Saved teams an average of 6 hours per week per employee",
      "Rapid enterprise adoption across 50+ corporate clients",
    ],
  },
  {
    id: "10",
    slug: "medisync-hospital-system",
    title: "MediSync Care Management System",
    category: "Healthcare",
    industry: "Healthcare Systems & Clinical Ops",
    shortDesc: "Integrated clinical workflow system for hospital ward management and patient triage optimization.",
    fullDesc:
      "MediSync empowers medical staff with real-time bed tracking, emergency triage queue management, and electronic prescription workflows.",
    client: "MediSync Health",
    year: "2025",
    technologies: ["React", "TypeScript", "GraphQL", "PostgreSQL", "Docker"],
    services: ["Web Development", "Healthcare Systems", "UI/UX Design"],
    image: "/Projects/ChatGPT Image Mar 18, 2026, 12_35_27 PM.png",
    videoPoster: "/Projects/ChatGPT Image Mar 18, 2026, 12_35_27 PM.png",
    projectUrl: "https://medisync.04oclock.tech",
    challenge:
      "Hospital triage desks experienced bottlenecks during peak ER admission hours due to slow legacy medical record software.",
    solution:
      "We delivered an ultra-responsive web application that streamlined patient intake and bed assignment into 3 clicks.",
    keyFeatures: [
      "Real-time emergency triage dashboard",
      "Electronic prescription generation & pharmacy sync",
      "HIPAA-compliant patient data encryption",
    ],
    results: [
      "50% reduction in patient emergency room check-in wait times",
      "Zero downtime recorded across hospital operations",
    ],
  },
  {
    id: "11",
    slug: "tradecraft-fintech-terminal",
    title: "TradeCraft Financial Terminal",
    category: "FinTech",
    industry: "Trading & Investment Telemetry",
    shortDesc: "Professional trading workstation providing high-frequency candlestick charts and algorithmic execution.",
    fullDesc:
      "TradeCraft delivers institutional-grade market data, custom technical indicators, and automated order execution for active traders.",
    client: "TradeCraft Capital",
    year: "2026",
    technologies: ["Next.js", "TypeScript", "WebSockets", "Rust", "TradingView Lightweight Charts"],
    services: ["FinTech", "Web Development", "High-Throughput APIs"],
    image: "/Projects/b77aec47-9adb-4f23-8ada-b620430a39ef.png",
    videoPoster: "/Projects/b77aec47-9adb-4f23-8ada-b620430a39ef.png",
    projectUrl: "https://tradecraft.04oclock.tech",
    challenge:
      "Retail trading terminals struggled with chart lag during sudden market volatility spikes.",
    solution:
      "We developed a WebGL-accelerated charting engine powered by a high-concurrency Rust WebSocket backend.",
    keyFeatures: [
      "60 FPS real-time WebGL candlestick rendering",
      "Algorithmic strategy backtesting sandbox",
      "Sub-10ms order execution route",
    ],
    results: [
      "Handled 50,000 simultaneous live order streams smoothly",
      "Recognized for top chart responsiveness in 2026 Fintech Awards",
    ],
  },
  {
    id: "12",
    slug: "quantum-cloud-platform",
    title: "Quantum Cloud Infrastructure",
    category: "SaaS",
    industry: "DevOps & Cloud Computing",
    shortDesc: "Serverless container orchestration and automated deployment pipeline management system.",
    fullDesc:
      "Quantum Cloud simplifies Kubernetes cluster management, environment variable sync, and automated CI/CD deployments for developer teams.",
    client: "Quantum Cloud Systems",
    year: "2025",
    technologies: ["React", "TypeScript", "Go", "Docker", "Kubernetes"],
    services: ["Cloud & DevOps", "SaaS Development", "API Development"],
    image: "/Projects/ddddddd.png",
    videoPoster: "/Projects/ddddddd.png",
    projectUrl: "https://quantum.04oclock.tech",
    challenge:
      "DevOps engineers spent hours setting up custom Kubernetes deployment manifests for microservices.",
    solution:
      "We built a single-click deployment portal that automatically provisions cloud infrastructure and SSL certificates.",
    keyFeatures: [
      "Single-click microservice deployment pipeline",
      "Real-time container log streaming terminal",
      "Automated cost allocation optimization suggestions",
    ],
    results: [
      "Cut application deployment setup time from 4 hours to 5 minutes",
      "Adopted by over 200 software engineering teams",
    ],
  },
  {
    id: "13",
    slug: "hyperdrive-mobile-wallet",
    title: "HyperDrive Crypto & Fiat Wallet",
    category: "Mobile",
    industry: "Digital Assets & Crypto Tech",
    shortDesc: "Next-generation multi-currency wallet with instant cross-chain token swapping and NFC contact payments.",
    fullDesc:
      "HyperDrive enables seamless management of digital assets, instant fiat off-ramping, and tap-to-pay merchant checkout.",
    client: "HyperDrive Labs",
    year: "2026",
    technologies: ["React Native", "TypeScript", "Ethers.js", "Web3", "Tailwind CSS"],
    services: ["Mobile App Development", "Web3 & Blockchain", "UI/UX Design"],
    image: "/Projects/dddddddddddddddddd.png",
    videoPoster: "/Projects/dddddddddddddddddd.png",
    projectUrl: "https://hyperdrive.04oclock.tech",
    challenge:
      "Non-technical users found existing crypto wallet interfaces confusing and prone to human transaction errors.",
    solution:
      "We designed a simplified biometric tap-to-pay wallet interface that abstracts away complex blockchain gas mechanics.",
    keyFeatures: [
      "One-tap cross-chain asset swapping",
      "Biometric transaction authorization",
      "Zero-knowledge privacy protection",
    ],
    results: [
      "Over $50M in wallet asset transactions processed securely",
      "Nominated for Best Mobile UX of 2026",
    ],
  },
  {
    id: "14",
    slug: "horizon-smart-city",
    title: "Horizon Smart City Monitoring",
    category: "Web",
    industry: "IoT & Smart Cities",
    shortDesc: "Municipal IoT telemetry control center monitoring urban traffic flow, energy grid status, and air quality metrics.",
    fullDesc:
      "Horizon provides city administrators with a real-time 3D twin map for monitoring traffic congestion, public transit routes, and grid power consumption.",
    client: "Horizon Smart Cities",
    year: "2026",
    technologies: ["Next.js", "Three.js", "TypeScript", "Mapbox GL", "Node.js"],
    services: ["Web Development", "IoT Telemetry", "Custom Software"],
    image: "/Projects/ddddddddddddddddddddddddd.png",
    videoPoster: "/Projects/ddddddddddddddddddddddddd.png",
    projectUrl: "https://horizon.04oclock.tech",
    challenge:
      "Municipal operators managed urban infrastructure using disconnected legacy monitoring tools.",
    solution:
      "We engineered a unified 3D GIS twin platform mapping thousands of live IoT sensor data points onto an interactive digital city model.",
    keyFeatures: [
      "Interactive 3D digital twin map with real-time sensor overlays",
      "Automated traffic light timing optimization alerts",
      "Public transit delay tracking and passenger density heatmaps",
    ],
    results: [
      "Improved emergency vehicle response times by 15%",
      "Reduced municipal street lighting energy overhead by 22%",
    ],
  },
];
