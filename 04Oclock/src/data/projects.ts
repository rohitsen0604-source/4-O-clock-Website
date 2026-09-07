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
    slug: "popli-creator-app",
    title: "Popli",
    category: "Mobile",
    industry: "Creator Economy & Social Video",
    shortDesc:
      "India's next-generation creator platform empowering video creators to monetize from day one with ₹5 per 1,000 views and zero follower minimums.",
    fullDesc:
      "Popli is India's next-generation short-form video and creator economy mobile platform engineered to democratize content monetization. With a transparent pay-per-view payout model of ₹5 per 1,000 views starting from the very first video with zero follower requirements, Popli connects creators with hyper-local audiences and automated earnings telemetry.",
    client: "Popli Creator Network",
    year: "2026",
    technologies: ["React Native", "Next.js", "TypeScript", "Node.js", "AWS CloudFront", "Tailwind CSS"],
    services: ["Mobile App Development", "UI/UX Design", "Web Development", "Cloud Architecture"],
    image: "/Projects/popli.jpg",
    videoPoster: "/Projects/popli.jpg",
    projectUrl: "https://www.popliapp.com/",
    challenge:
      "Traditional video platforms impose high follower counts and watch-time thresholds, blocking emerging creators from earning. Popli required a scalable, low-latency mobile streaming architecture with instant view telemetry and transparent per-thousand view payouts.",
    solution:
      "We engineered a high-performance cross-platform mobile app featuring adaptive video streaming, fraud-resistant view analytics, and a hyper-local discovery feed that matches new creators directly with engaged audiences.",
    keyFeatures: [
      "Direct video monetization with ₹5 per 1,000 views baseline",
      "Zero follower threshold for creator payouts from day one",
      "Hyper-local discovery engine matching creators by location & interest",
      "Ultra-low latency adaptive video streaming mobile feed",
    ],
    results: [
      "Over 10,000+ early creator pre-registrations secured prior to launch",
      "Sub-100ms video start times across mobile 4G and 5G networks",
      "100% transparent automated creator earnings telemetry",
    ],
  },
  {
    id: "03",
    slug: "medsseva-healthcare-network",
    title: "MedsSeva",
    category: "Healthcare",
    industry: "Healthcare & Diagnostics Network",
    shortDesc:
      "India's leading healthcare, pharmacy, and diagnostic franchise network empowering communities with affordable medicine and pathology solutions.",
    fullDesc:
      "MedsSeva is India's rapidly expanding integrated healthcare and pharmacy franchise network dedicated to democratizing affordable medicine, digital prescriptions, and NABL-grade diagnostic solutions across Tier 1, 2, and 3 cities with automated supply chain and clinic management telemetry.",
    client: "MedsSeva Group",
    year: "2026",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "AWS"],
    services: ["Web Development", "UI/UX Design", "Healthcare Logistics", "Cloud Infrastructure"],
    image: "/Projects/medsseva.jpg",
    videoPoster: "/Projects/medsseva.jpg",
    projectUrl: "https://medsseva.com/",
    challenge:
      "Healthcare accessibility in Tier 2 and Tier 3 Indian towns suffered from fragmented medicine supply chains, lack of local diagnostic labs, and slow manual inventory management for independent pharmacy owners.",
    solution:
      "We developed a centralized cloud-driven healthcare franchise management platform featuring real-time pharmaceutical stock synchronization, digital diagnostic appointment scheduling, and automated compliance tracking.",
    keyFeatures: [
      "Centralized digital pharmacy inventory replenishment pipeline",
      "Integrated diagnostic test booking & e-report dispatch system",
      "Omnichannel franchise onboarding and performance telemetry",
      "Multi-tier patient consultation scheduling and tele-health support",
    ],
    results: [
      "Over 50+ franchise healthcare centers onboarded across India",
      "99.9% on-time critical medicine dispatch to remote tier 2/3 locations",
      "Sub-second patient appointment and diagnostic report retrieval",
    ],
  },
  {
    id: "04",
    slug: "mafrend-social-map",
    title: "Mafrend",
    category: "Web",
    industry: "Decentralized Social & Geo-Spatial Tech",
    shortDesc:
      "Map-first decentralized social network and Nostr client bringing private group chats, shared places, and time-bound location updates into one unified map.",
    fullDesc:
      "Mafrend is a groundbreaking privacy-first, map-centric social networking client powered by the Nostr open protocol and Marmot private groups. It seamlessly integrates real-time geo-spatial coordinate sharing, end-to-end encrypted private group chats, and persistent community place discovery on a shared live map without centralized data tracking.",
    client: "Mafrend Protocol Labs",
    year: "2026",
    technologies: ["Nostr Protocol", "TypeScript", "React", "MapLibre GL", "WebSockets", "Tailwind CSS"],
    services: ["Web3 & Nostr Engineering", "Geo-Spatial Mapping", "UI/UX Design", "End-to-End Cryptography"],
    image: "/Projects/mafrend.jpg",
    videoPoster: "/Projects/mafrend.jpg",
    projectUrl: "https://mafrend.com/",
    challenge:
      "Traditional social mapping apps compromise user privacy through persistent location tracking and centralized databases, while existing decentralized protocols lacked intuitive spatial UX for localized group coordination.",
    solution:
      "We developed a high-performance map-first Nostr web client featuring zero-knowledge time-bound location beacons, cryptographic Marmot group messaging, and vector map tile rendering with zero user tracking.",
    keyFeatures: [
      "Decentralized Nostr protocol identity & key management",
      "Time-bound location beacons with granular privacy expiration",
      "End-to-end encrypted Marmot private group map channels",
      "High-performance vector map tile rendering with zero surveillance",
    ],
    results: [
      "Seamless sub-50ms relay broadcast speed across global Nostr nodes",
      "Zero centralized server data retention or user IP telemetry",
      "Featured as an innovative open-source geospatial client of 2026",
    ],
  },
  {
    id: "05",
    slug: "ecd-kart-food-delivery",
    title: "ECD KART",
    category: "Mobile",
    industry: "Food Delivery & Hyper-Local Logistics",
    shortDesc:
      "Sohna's #1 local food ordering and instant delivery app bringing fresh meals from 85+ local restaurants to doorsteps in minutes.",
    fullDesc:
      "ECD KART is Sohna, Haryana's premier hyper-local food ordering and instant delivery ecosystem. Connecting residents with over 85+ top local restaurant partners, ECD KART offers real-time order tracking, sub-15 minute average delivery telemetry, contactless digital payments, and streamlined rider dispatch management.",
    client: "ECD KART Delivery Network",
    year: "2026",
    technologies: ["React Native", "TypeScript", "Node.js", "Express", "MongoDB", "Cloudflare"],
    services: ["Mobile App Development", "UI/UX Design", "Hyper-Local Logistics", "Cloud Infrastructure"],
    image: "/Projects/ecdkart.jpg",
    videoPoster: "/Projects/ecdkart.jpg",
    projectUrl: "https://www.ecdkart.co.in/",
    challenge:
      "Hyper-local food delivery in Tier 2/3 towns faced long dispatch delays, lack of live driver tracking, and poor digital ordering accessibility for local restaurant partners.",
    solution:
      "We engineered a high-throughput mobile ordering application with real-time GPS rider telemetry, sub-15 minute delivery routing algorithms, and automated restaurant merchant dispatch portals.",
    keyFeatures: [
      "Sub-15 minute average delivery routing algorithm",
      "Real-time GPS order telemetry and live rider tracking",
      "Partner merchant portal supporting 85+ local restaurants",
      "Contactless digital payments and hygiene certified delivery",
    ],
    results: [
      "Over 85+ restaurant partners onboarded across Sohna",
      "4.8 star average app store rating with 3,000+ positive user reviews",
      "Sub-15 min express delivery benchmark achieved across active routes",
    ],
  },
  {
    id: "06",
    slug: "oveventz-event-platform",
    title: "Oveventz",
    category: "Web",
    industry: "AI Event Management & Booking Platform",
    shortDesc:
      "India's premier AI-powered event management platform bringing concept-to-delivery planning for weddings, corporate galas, and milestone celebrations.",
    fullDesc:
      "Oveventz is an innovative AI-driven event planning and execution platform that transforms event coordination from concept to delivery. With automated AI discovery blueprints, curated vendor management (photography, decor, catering, venue banquets), real-time event telemetry, and bespoke packages like Oveventz Luxury, Signature Gala, and Milestone Celebrations.",
    client: "Oveventz Entertainment Network",
    year: "2026",
    technologies: ["React", "TypeScript", "Node.js", "AI Engine", "Vite", "Tailwind CSS"],
    services: ["Web Development", "UI/UX Design", "AI Integration", "Cloud Infrastructure"],
    image: "/Projects/82c0298f-6b2f-49ba-92ac-cbe8b8afbf82.png",
    videoPoster: "/Projects/82c0298f-6b2f-49ba-92ac-cbe8b8afbf82.png",
    projectUrl: "https://www.oveventz.com/",
    challenge:
      "Traditional event management suffered from fragmented vendor coordination, opaque pricing, and time-consuming manual planning for clients organizing weddings and corporate galas.",
    solution:
      "We engineered an AI-powered event discovery and booking platform featuring automated vision blueprints, integrated photography and decor vendor management, and real-time event execution telemetry.",
    keyFeatures: [
      "AI-driven event blueprint & budget discovery engine",
      "Integrated vendor management (decor, photography, catering, venues)",
      "Bespoke packages: Oveventz Luxury, Signature Gala & Milestones",
      "Real-time event manager coordination & progress telemetry",
    ],
    results: [
      "Over 150+ luxury weddings and corporate galas managed",
      "99.2% on-time vendor execution and event satisfaction score",
      "Sub-second event blueprint generation and instant booking",
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
    slug: "market99-value-retail",
    title: "Market99",
    category: "Web",
    industry: "E-Commerce & Value Retail",
    shortDesc:
      "India's premier value retail e-commerce platform offering 5,000+ affordable home decor, kitchenware, dining, and bath products with 96+ physical stores.",
    fullDesc:
      "Market99 is a leading Indian value-retail brand with 96+ physical stores and over 15M+ satisfied customers. Engineered with multi-location inventory synchronization, GoKwik 1-click checkout integration, flash speed page optimization, and a catalog spanning 5,000+ home decor, kitchen, and dining SKUs.",
    client: "Market99 Retail",
    year: "2026",
    technologies: [
      "Shopify Plus",
      "Next.js",
      "TypeScript",
      "GoKwik",
      "Tailwind CSS",
      "Clarity Analytics",
    ],
    services: [
      "E-Commerce Development",
      "UI/UX Design",
      "Retail Tech",
      "Omnichannel Integration",
    ],
    image: "/Projects/ChatGPT Image Mar 18, 2026, 12_32_25 PM.png",
    videoPoster: "/Projects/ChatGPT Image Mar 18, 2026, 12_32_25 PM.png",
    projectUrl: "https://market99.com/",
    challenge:
      "Managing high-concurrency flash sales across a 5,000+ SKU catalog while maintaining instant cart checkout and stock synchronization with 96+ brick-and-mortar stores.",
    solution:
      "We engineered an ultra-responsive Shopify Plus e-commerce storefront integrated with GoKwik 1-click express checkout, real-time inventory telemetry, and edge CDN asset delivery.",
    keyFeatures: [
      "5,000+ SKU E-Commerce Catalog (Home Decor, Kitchen & Bath)",
      "Omnichannel Retail Sync with 96+ Physical Store Locations",
      "GoKwik 1-Click Express Checkout & Multi-UPI Payment Gateway",
      "Flash-Speed Page Loading handling 15M+ Customer Scale",
    ],
    results: [
      "15M+ satisfied retail and e-commerce customers across India",
      "Sub-second page loading speed optimized with Shopify Plus & edge CDN",
      "4.8★ customer satisfaction rating across 96+ retail store locations",
    ],
  },
  {
    id: "09",
    slug: "joyalukkas-e-commerce",
    title: "Joyalukkas",
    category: "Web",
    industry: "E-Commerce & Luxury Retail",
    shortDesc:
      "India's premier luxury jewelry e-commerce platform offering certified gold, diamond, platinum, and precious gemstone collections with real-time rate tracking.",
    fullDesc:
      "Joyalukkas is a world-renowned luxury jewelry retail brand and global e-commerce enterprise. Engineered with high-concurrency order placement, real-time bullion rate integration, digital gold schemes, virtual try-on technology, and end-to-end insured shipping, Joyalukkas delivers a seamless luxury shopping experience across 11 countries.",
    client: "Joyalukkas India Limited",
    year: "2026",
    technologies: ["Next.js", "TypeScript", "Node.js", "Magento", "Tailwind CSS", "Fortinet Security"],
    services: ["Web Development", "E-Commerce Engineering", "UI/UX Design", "Cloud Architecture"],
    image: "/Projects/ChatGPT Image Mar 18, 2026, 12_32_56 PM.png",
    videoPoster: "/Projects/ChatGPT Image Mar 18, 2026, 12_32_56 PM.png",
    projectUrl: "https://www.joyalukkas.in/",
    challenge:
      "Luxury jewelry buyers faced latency during peak festive shopping events (Dhanteras/Akshaya Tritiya), fluctuating gold rate recalculations, and lack of digital gold scheme tracking.",
    solution:
      "We engineered an ultra-fast Magento-Next.js e-commerce architecture with real-time bullion price ticker APIs, automated digital gold scheme enrollment, and insured global checkout.",
    keyFeatures: [
      "Real-time 22K/24K live gold & silver rate pricing engine",
      "Digital Gold purchase & monthly savings scheme tracking portal",
      "Interactive high-resolution 3D jewelry showcase & collection viewer",
      "Bank-grade encrypted checkout with 100% door-to-door insured shipping",
    ],
    results: [
      "Processed over 1M+ online jewelry orders globally across 11 countries",
      "Sub-second live gold rate calculation across 50,000+ catalog SKUs",
      "4.9★ customer satisfaction rating for online diamond & gold purchases",
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
    slug: "scalyx-ai-retail-platform",
    title: "Scalyx",
    category: "AI",
    industry: "AI Retail & Operations Platform",
    shortDesc:
      "AI-powered operations and inventory intelligence system built for independent retail, wholesale, and multi-channel e-commerce brands.",
    fullDesc:
      "Scalyx is an AI-driven retail operations platform that unifies inventory management, POS transactions, customer intelligence, and automated accounting. Featuring Clara AI digital manager, real-time stock sync across physical stores and online channels, predictive replenishment, and automated invoice matching, Scalyx empowers modern retailers to scale faster with optimized margins.",
    client: "Scalyx AI Inc.",
    year: "2026",
    technologies: ["React", "TypeScript", "Python", "Clara AI Engine", "Node.js", "Tailwind CSS"],
    services: ["AI Integration", "Web Development", "Retail Operations Tech", "UI/UX Design"],
    image: "/Projects/ddddddd.png",
    videoPoster: "/Projects/ddddddd.png",
    projectUrl: "https://scalyx.ai/",
    challenge:
      "Independent retail and wholesale businesses struggled with manual inventory tracking, dead stock build-up, disconnected POS systems, and time-consuming manual accounting reconciliations.",
    solution:
      "We engineered an AI-first operations platform that unifies stock management across physical stores and online marketplaces, automates purchase replenishment, and provides Clara natural language AI insights.",
    keyFeatures: [
      "Clara AI Digital Manager for natural language store telemetry",
      "Smart inventory order & low-stock predictive replenishment",
      "Omnichannel POS & online e-commerce single stock synchronization",
      "Automated accounting & invoice matching for QuickBooks/Xero/NetSuite",
    ],
    results: [
      "+15% average net profit growth for active retail clients",
      "Eliminated stockouts & dead stock accumulation by 80%",
      "Saved store managers over 15+ hours weekly on manual paperwork",
    ],
  },
  {
    id: "13",
    slug: "zero-brokerage-dubai",
    title: "ZeroBrokerage",
    category: "Web",
    industry: "Direct-to-Owner Real Estate Tech",
    shortDesc:
      "Dubai's premier zero-commission real estate platform connecting buyers and tenants directly with verified property owners.",
    fullDesc:
      "ZeroBrokerage is a revolutionary Dubai real estate marketplace engineered to eliminate traditional 5% agent commissions. By providing Title Deed verified property listings, direct owner-tenant communication channels, and transparent transaction tools, ZeroBrokerage saves property buyers and tenants thousands of AED on every deal with zero middleman markup.",
    client: "ZeroBrokerage AE Labs",
    year: "2026",
    technologies: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Title Deed Verification", "Cloudflare"],
    services: ["Web Development", "UI/UX Design", "Real Estate Tech", "Cloud Architecture"],
    image: "/Projects/dddddddddddddddddd.png",
    videoPoster: "/Projects/dddddddddddddddddd.png",
    projectUrl: "https://zerobrokerage.ae/",
    challenge:
      "Property buyers and tenants in Dubai lost millions annually to high 5% brokerage fees, slow communication loops, and unverified duplicate agent listings.",
    solution:
      "We engineered a sub-second direct-to-owner property marketplace with automated Dubai Land Department Title Deed verification, direct owner messaging, and zero-commission transaction workflows.",
    keyFeatures: [
      "Direct owner-to-buyer & tenant connection portal",
      "Verified Title Deed badge for scam-free authentic listings",
      "Zero commission (Save 5% / 100,000+ AED on average property deals)",
      "Seamless buy, sell, and rent property search engine",
    ],
    results: [
      "Saved Dubai property buyers over 10M+ AED in cumulative commissions",
      "100% verified Title Deed authenticity on active marketplace listings",
      "4.9/5 average satisfaction rating among verified property owners",
    ],
  },
  {
    id: "14",
    slug: "vctc-pune-it-training",
    title: "VCTC Pune",
    category: "Web",
    industry: "Corporate IT Training & Placement",
    shortDesc:
      "India's premier AI-powered IT training institute offering 21+ job-oriented courses with 100% placement assistance and 65,000+ placed alumni.",
    fullDesc:
      "Velocity Corporate Training Center (VCTC Pune) is an ISO 9001:2015 certified IT training institute delivering job-oriented courses in Data Science, Software Testing, AWS DevOps, Full Stack Development, Salesforce, and Cyber Security. Featuring live instructor-led projects, industry expert mentorship, 100% placement support, and dual branches in Katraj & Viman Nagar.",
    client: "Velocity Corporate Training Center",
    year: "2026",
    technologies: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Bootstrap", "Google Tag Manager"],
    services: ["Web Development", "EdTech Platform", "UI/UX Design", "Cloud Infrastructure"],
    image: "/Projects/ddddddddddddddddddddddddd.png",
    videoPoster: "/Projects/ddddddddddddddddddddddddd.png",
    projectUrl: "https://www.vctcpune.com/",
    challenge:
      "Aspiring IT professionals and freshers faced hurdles finding industry-relevant hands-on IT courses with guaranteed placement assistance and expert corporate mentorship.",
    solution:
      "We engineered a high-throughput EdTech portal supporting online and classroom course booking, live demo scheduling, student progress dashboards, and corporate recruitment dispatch.",
    keyFeatures: [
      "21+ job-oriented IT courses (Data Science, Software Testing, AWS DevOps, Full Stack)",
      "100% placement assistance with 500+ corporate hiring partners",
      "Live instructor-led training with hands-on real-world projects",
      "Dual-branch offline & online learning management system (Katraj & Viman Nagar)",
    ],
    results: [
      "Over 65,000+ students successfully placed across top IT MNCs",
      "4.7★ average rating from 3,900+ verified student Google reviews",
      "ISO 9001:2015 certified corporate IT training curriculum",
    ],
  },
  {
    id: "15",
    slug: "afnan-perfumes-luxury-e-commerce",
    title: "Afnan Perfumes",
    category: "Web",
    industry: "E-Commerce & Luxury Fragrances",
    shortDesc:
      "Global UAE luxury perfume house operating across 120+ countries, offering iconic scent collections like 9 PM, Supremacy, and Turathi.",
    fullDesc:
      "Afnan Perfumes is a premier UAE-founded global luxury fragrance house established in 2007 by Imran Fazlani. Operating across 120+ countries with localized digital storefronts, Afnan combines Middle Eastern olfactory heritage with contemporary craftsmanship. Engineered with multi-region Geo-IP routing, Shopify Plus high-concurrency checkout, custom luxury prestige aesthetics, and a catalog featuring world-renowned fragrance lines including 9 PM, Supremacy, and Turathi.",
    client: "Afnan Perfumes Global",
    year: "2026",
    technologies: [
      "Shopify Plus",
      "Next.js",
      "TypeScript",
      "Geo-IP Routing",
      "Tailwind CSS",
      "Google Tag Manager",
    ],
    services: [
      "E-Commerce Development",
      "UI/UX Design",
      "Luxury Retail Tech",
      "Multi-Region Architecture",
    ],
    image: "/Projects/afnan.jpg",
    videoPoster: "/Projects/afnan.jpg",
    projectUrl: "https://afnan.com/",
    challenge:
      "Managing multi-region localized e-commerce storefronts across 120+ countries while maintaining sub-second page loading speed, real-time inventory synchronization, and high-concurrency flash promotion sales.",
    solution:
      "We engineered a high-performance Shopify Plus luxury storefront featuring intelligent Geo-IP regional store routing, multi-currency payment gateway integrations, and edge CDN asset delivery.",
    keyFeatures: [
      "Multi-Region Store Routing across 120+ Countries (US, UAE, UK, India, KSA)",
      "Iconic Fragrance Collections (9 PM, Supremacy, Turathi, Mystique Bouquet)",
      "High-Concurrency Shopify Plus Checkout with Multi-Currency & Digital Wallets",
      "Bespoke Luxury UI/UX with Fluid Animations & Interactive Fragrance Discovery",
    ],
    results: [
      "Global presence across 120+ countries with millions of fragrance enthusiasts",
      "Sub-second page load times and seamless cross-device shopping experience",
      "4.9★ customer satisfaction rating across international retail storefronts",
    ],
  },
];
