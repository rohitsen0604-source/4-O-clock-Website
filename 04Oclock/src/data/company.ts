export interface JourneyStep {
  number: string;
  title: string;
  period: string;
  description: string;
}

export interface ValueItem {
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface WhyChooseUsItem {
  title: string;
  description: string;
  highlight: string;
}

export const COMPANY_INFO = {
  name: "04 O'CLOCK TECHNOLOGIES",
  shortName: "04 O'Clock Tech",
  tagline: "IT'S TIME TO BUILD YOUR STARTS HERE.",
  subTagline: "WHERE IDEAS MEET EXECUTION.",
  heroDescription:
    "04 O'Clock Technologies builds modern digital products, scalable software, and intelligent technology solutions for businesses ready to move forward.",
  introTitle: "Technology Built Around Your Vision",
  introDescription:
    "We are an enterprise technology partner dedicated to crafting high-performance digital systems, custom web & mobile software, cloud infrastructure, and AI solutions. Our engineering-driven approach focuses on speed, security, elegance, and long-term scalability.",
  mission:
    "To build technology that solves real problems, simplifies complexity, and creates measurable business value for organizations globally.",
  vision:
    "To become a trusted global technology partner for forward-thinking enterprises building the future of software.",
};

export const JOURNEY_TIMELINE: JourneyStep[] = [
  {
    number: "01",
    title: "The Beginning",
    period: "Phase 1",
    description:
      "Founded with a vision to combine rapid software engineering with modern, sleek visual aesthetics. Started by delivering high-impact web and backend solutions.",
  },
  {
    number: "02",
    title: "Building the Foundation",
    period: "Phase 2",
    description:
      "Expanded core engineering capabilities to include full-stack SaaS architecture, cloud infrastructure automation, and enterprise UI/UX design systems.",
  },
  {
    number: "03",
    title: "Expanding Capabilities",
    period: "Phase 3",
    description:
      "Integrated AI & Machine Learning, automated workflows, and custom backend API design to empower clients across FinTech, Healthcare, and SaaS industries.",
  },
  {
    number: "04",
    title: "Building for Scale",
    period: "Phase 4",
    description:
      "Operating as an enterprise IT partner, engineering resilient, high-availability software platforms that power modern digital transformation.",
  },
];

export const CORE_VALUES: ValueItem[] = [
  {
    title: "Innovation",
    description:
      "We continuously push technological boundaries, leveraging modern frameworks and intelligent AI tools to deliver superior outcomes.",
    icon: "MdLightbulb",
  },
  {
    title: "Integrity",
    description:
      "Transparent communication, clear project roadmaps, and honest code quality form the bedrock of every client partnership.",
    icon: "MdShield",
  },
  {
    title: "Ownership",
    description:
      "We treat every client product as our own, taking complete accountability for performance, architecture, and long-term success.",
    icon: "MdVerified",
  },
  {
    title: "Quality",
    description:
      "Zero-compromise engineering standards, rigorous test coverage, clean code practices, and bulletproof security protocols.",
    icon: "MdStar",
  },
  {
    title: "Transparency",
    description:
      "Complete visibility into project sprints, code repositories, architecture decisions, and budget allocation.",
    icon: "MdVisibility",
  },
  {
    title: "Continuous Learning",
    description:
      "Our team stays ahead of emerging industry standards, cloud architecture patterns, and next-gen developer technologies.",
    icon: "MdSchool",
  },
  {
    title: "Customer Success",
    description:
      "Our metrics for success are directly tied to the growth, operational efficiency, and revenue impact of the products we engineer.",
    icon: "MdTrendingUp",
  },
];

export const WORK_PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    tagline: "Architecture & Blueprint",
    description:
      "Deep dive into business objectives, target audience analysis, system bottlenecks, and technical requirements.",
    deliverables: ["Product Strategy Document", "Technical Scope & Architecture", "Project Timeline"],
  },
  {
    step: "02",
    title: "Plan",
    tagline: "Sprint Roadmapping",
    description:
      "Defining micro-milestones, database schemas, technology stack selection, and resource allocation for smooth delivery.",
    deliverables: ["Database & API Schemas", "Sprint Backlog", "Design Wireframes"],
  },
  {
    step: "03",
    title: "Design",
    tagline: "User Experience Excellence",
    description:
      "Crafting high-fidelity visual interfaces, dark-mode design systems, dynamic micro-interactions, and accessibility standards.",
    deliverables: ["Interactive Prototypes", "UI Component Library", "Design System Specs"],
  },
  {
    step: "04",
    title: "Build",
    tagline: "Agile Development",
    description:
      "Writing clean, modular TypeScript, Next.js, and backend API code with continuous integration and clean commit history.",
    deliverables: ["Clean Production Codebase", "API Documentation", "Staging Deployments"],
  },
  {
    step: "05",
    title: "Test",
    tagline: "Quality Assurance",
    description:
      "Rigorous unit testing, security penetration testing, load testing, and cross-device performance benchmarking.",
    deliverables: ["QA Audit Reports", "Performance Benchmarks", "Security Clearance"],
  },
  {
    step: "06",
    title: "Launch",
    tagline: "Zero-Downtime Deployment",
    description:
      "Executing smooth production release, DNS configuration, cloud scaling, and real-time application monitoring.",
    deliverables: ["Production Release", "CI/CD Pipelines", "Monitoring Dashboard"],
  },
  {
    step: "07",
    title: "Scale",
    tagline: "Continuous Optimization",
    description:
      "Ongoing maintenance, feature enhancements, infrastructure auto-scaling, and strategic technology consulting.",
    deliverables: ["SLA Support Agreements", "Scale Recommendations", "Feature Upgrades"],
  },
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    title: "Engineering Excellence",
    description: "Built on clean architecture, modern React/Next.js frameworks, and robust microservices.",
    highlight: "Zero Technical Debt",
  },
  {
    title: "Speed to Market",
    description: "Agile sprints and reusable design components accelerate launch timelines by up to 40%.",
    highlight: "Rapid Delivery",
  },
  {
    title: "End-to-End Product Lifecycle",
    description: "From concept ideation to cloud DevOps and post-launch maintenance, we handle the full stack.",
    highlight: "Full Product Ownership",
  },
  {
    title: "Enterprise Security",
    description: "Strict data privacy, encryption, and compliance standards built into every line of code.",
    highlight: "Bank-Grade Protection",
  },
  {
    title: "Dedicated Support & Scaling",
    description: "Round-the-clock technical support, infrastructure monitoring, and proactive system health checks.",
    highlight: "24/7 SLA Guarantees",
  },
];
