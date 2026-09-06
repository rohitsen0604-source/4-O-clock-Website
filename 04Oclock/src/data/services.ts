export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  technologies: string[];
  deliverables: string[];
  businessBenefits: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "01",
    slug: "web-development",
    title: "Web Development",
    shortDesc: "High-performance, accessible, and responsive web applications engineered with Next.js, React, and TypeScript.",
    fullDesc:
      "We build modern enterprise web applications engineered for speed, SEO, security, and scalability. From dynamic web portals to high-throughput client platforms, our code adheres to strict web standards and elegant visual aesthetics.",
    iconName: "MdCode",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL"],
    deliverables: [
      "Custom Server-Side Rendered (SSR) & Static Web Applications",
      "Progressive Web Apps (PWAs) with Offline Support",
      "Headless Content Management Systems (CMS)",
      "Performance & SEO Optimization Audits",
    ],
    businessBenefits: [
      "Lightning-fast load times and sub-second page rendering",
      "Higher conversion rates and user engagement",
      "Superior search engine ranking and discoverability",
    ],
  },
  {
    id: "02",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDesc: "Cross-platform and native mobile experiences with smooth animations and intuitive interfaces.",
    fullDesc:
      "Crafting mobile applications for iOS and Android platforms using React Native and Flutter. We emphasize fluid 60fps animations, intuitive gesture navigation, and robust offline data synchronization.",
    iconName: "MdPhoneIphone",
    technologies: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)", "Firebase"],
    deliverables: [
      "Cross-Platform Native Mobile Apps",
      "Offline-First Sync Architecture",
      "Push Notification & Real-Time Alert Engines",
      "App Store & Google Play Publishing Support",
    ],
    businessBenefits: [
      "Single codebase reducing development cost and time",
      "Seamless mobile customer experience across iOS & Android",
      "Enhanced user retention through real-time notifications",
    ],
  },
  {
    id: "03",
    slug: "custom-software-development",
    title: "Custom Software Development",
    shortDesc: "Tailored software systems engineered to solve complex operational challenges and scale with growth.",
    fullDesc:
      "Off-the-shelf software rarely fits specialized enterprise processes. We architect bespoke software applications designed around your exact workflows, compliance requirements, and integration needs.",
    iconName: "MdSettings",
    technologies: ["Node.js", "Python", "TypeScript", "PostgreSQL", "Docker", "REST/gRPC"],
    deliverables: [
      "Enterprise Resource & Workflow Management Systems",
      "Custom Legacy Software Modernization",
      "Automated Business Data Pipelines",
      "Role-Based Access Control (RBAC) Architecture",
    ],
    businessBenefits: [
      "100% alignment with proprietary enterprise workflows",
      "Elimination of ongoing per-user licensing overhead",
      "Full ownership of source code and intellectual property",
    ],
  },
  {
    id: "04",
    slug: "saas-development",
    title: "SaaS Development",
    shortDesc: "Multi-tenant software-as-a-service platforms built for high security, billing integration, and scale.",
    fullDesc:
      "Turn your product idea into a enterprise-ready SaaS business. We design and develop multi-tenant platforms complete with automated billing, subscription management, security isolation, and tenant analytics.",
    iconName: "MdCloud",
    technologies: ["Next.js", "Node.js", "Stripe", "PostgreSQL", "Redis", "AWS"],
    deliverables: [
      "Multi-Tenant Database & Application Architecture",
      "Stripe & Paddle Payment Gateway Integration",
      "Subscription Management & Tiered Billing Systems",
      "User Onboarding & Admin Control Dashboards",
    ],
    businessBenefits: [
      "Predictable recurring revenue model readiness",
      "Seamless scalability from 100 to 1,000,000+ active tenants",
      "Automated user provisioning and self-service portal",
    ],
  },
  {
    id: "05",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortDesc: "Human-centered digital design systems, dark-mode aesthetics, and interactive visual interfaces.",
    fullDesc:
      "Design is more than visual appeal—it's how your software thinks and feels. We design clean, dark-mode visual identities, intuitive micro-interactions, and accessible user journeys that convert visitors into loyal customers.",
    iconName: "MdPalette",
    technologies: ["Figma", "Design Systems", "Prototyping", "User Research", "Micro-Animations"],
    deliverables: [
      "Comprehensive UI Design Systems & Component Libraries",
      "High-Fidelity Wireframes & Clickable Prototypes",
      "Usability Testing & Conversion Rate Audits",
      "Dark Mode & Light Mode Theme Token Systems",
    ],
    businessBenefits: [
      "Reduced user onboarding friction and support tickets",
      "Unified brand impression across all digital touchpoints",
      "Faster development through structured UI component libraries",
    ],
  },
  {
    id: "06",
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    shortDesc: "Intelligent automation, LLM API integrations, custom machine learning models, and predictive analytics.",
    fullDesc:
      "Empower your digital products with artificial intelligence. We integrate Large Language Models (LLMs), custom NLP pipelines, intelligent data processing, and predictive analytics engines directly into your applications.",
    iconName: "MdPsychology",
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI APIs", "LangChain", "Vector Databases"],
    deliverables: [
      "Generative AI & LLM Custom Integrations",
      "AI Knowledge Assistants & Retrieval-Augmented Generation (RAG)",
      "Predictive Analytics & Forecasting Models",
      "Automated Text, Speech & Image Processing Pipelines",
    ],
    businessBenefits: [
      "Automated repetitive manual business tasks",
      "Data-driven predictive insights for leadership",
      "Next-generation customer service automation",
    ],
  },
  {
    id: "07",
    slug: "api-backend-development",
    title: "API & Backend Development",
    shortDesc: "Scalable backend microservices, RESTful and GraphQL APIs, and high-performance database architectures.",
    fullDesc:
      "The backbone of every robust application. We construct resilient, high-concurrency microservices, GraphQL and REST APIs, and database architectures optimized for zero data loss and low latency.",
    iconName: "MdStorage",
    technologies: ["Node.js", "Express", "Python", "GraphQL", "PostgreSQL", "MongoDB", "Redis"],
    deliverables: [
      "High-Throughput RESTful & GraphQL APIs",
      "Real-Time WebSockets & Event-Driven Services",
      "Database Schema Design & Query Optimization",
      "Comprehensive OpenAPI / Swagger Documentation",
    ],
    businessBenefits: [
      "Sub-millisecond database query performance",
      "Clean integration with third-party software tools",
      "Bulletproof data integrity and ACID transaction safety",
    ],
  },
  {
    id: "08",
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    shortDesc: "Automated CI/CD pipelines, containerization, cloud infrastructure scaling, and monitoring.",
    fullDesc:
      "Streamline software deployment with modern Cloud DevOps. We architect automated CI/CD pipelines, Docker containerization, Kubernetes orchestration, and cloud infrastructure on AWS, Azure, and Vercel.",
    iconName: "MdCloudQueue",
    technologies: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Terraform", "Nginx"],
    deliverables: [
      "Automated CI/CD Deployment Pipelines",
      "Docker Containerization & Infrastructure as Code",
      "Cloud Server Load Balancing & Auto-Scaling",
      "24/7 Server Health & Alerting Dashboards",
    ],
    businessBenefits: [
      "Zero-downtime automated software releases",
      "Reduced cloud hosting costs through resource optimization",
      "Automated disaster recovery and backup safeguards",
    ],
  },
  {
    id: "09",
    slug: "business-automation",
    title: "Business Automation",
    shortDesc: "Streamlining enterprise workflows, internal tools, and system integrations to increase operational efficiency.",
    fullDesc:
      "Replace manual spreadsheets and repetitive tasks with custom automated internal tools, webhook workflows, and integrated enterprise software solutions.",
    iconName: "MdAutorenew",
    technologies: ["Python Automation", "Webhooks", "Node.js", "Zapier/Make APIs", "Cron Engines"],
    deliverables: [
      "Custom Internal Admin Dashboards",
      "Automated Invoice & Reporting Generators",
      "Cross-System Webhook & Data Sync Pipelines",
      "Task Scheduling & Cron Management Systems",
    ],
    businessBenefits: [
      "Up to 80% reduction in manual data entry work",
      "Elimination of human data entry errors",
      "Accelerated internal approval and processing cycles",
    ],
  },
  {
    id: "10",
    slug: "technology-consulting",
    title: "Technology Consulting",
    shortDesc: "Strategic guidance on architecture selection, technical feasibility, code audits, and modernization.",
    fullDesc:
      "Navigating complex technology decisions requires expert leadership. We provide fractional CTO advisory, code security audits, cloud cost optimization, and technology roadmap consulting.",
    iconName: "MdPsychologyAlt",
    technologies: ["Architecture Audits", "CTO Advisory", "Security Analysis", "Tech Stacks"],
    deliverables: [
      "Comprehensive Architecture & Security Audit Reports",
      "Technology Roadmap & Modernization Plans",
      "Vendor & Third-Party Tool Evaluation",
      "Fractional CTO Technical Leadership",
    ],
    businessBenefits: [
      "Avoid costly technology stack mistakes",
      "Clear, actionable technology roadmap for investors and leadership",
      "Confidence in system security and stability",
    ],
  },
];
