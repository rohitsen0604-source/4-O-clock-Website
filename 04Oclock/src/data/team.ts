export interface TeamMember {
  id: string;
  name: string;
  role: string;
  tagline: string;
  bio: string;
  image: string;
  colorTheme: "cyan" | "magenta" | "purple" | "dark";
  size: "large" | "medium" | "small";
  skills: string[];
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export interface StatBubble {
  id: string;
  label: string;
  value?: string;
  colorTheme: "cyan" | "magenta" | "purple" | "dark";
  size: "medium" | "small" | "mini";
  type: "stat" | "role" | "accent";
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "kanha-meena",
    name: "Kanha Meena",
    role: "Founder & Senior Software Developer",
    tagline: "Full-Stack System Architecture & Scalable Web Platforms",
    bio: "Passionate technology leader, founder, and senior software developer with extensive experience in building high-scale cloud platforms, distributed microservices, modern web applications, and AI integrations. Driven by crafting software that balances performance with elegance.",
    image: "/people/KanhaMeena.png",
    colorTheme: "cyan",
    size: "large",
    skills: ["React", "TypeScript", "Node.js", "Python", "Cloud Architecture", "System Design", "Full-Stack Dev"],
    socials: {},
  },
  {
    id: "sarah-jenkins",
    name: "Sarah Jenkins",
    role: "Co-Founder & Creative Director",
    tagline: "Human-Centered Design Systems & Brand Strategy",
    bio: "Pioneering human-centered UI/UX design and brand systems. Sarah believes every digital touchpoint should deliver delight, clarity, and conversion while enforcing brand consistency.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80",
    colorTheme: "magenta",
    size: "large",
    skills: ["Figma", "UI/UX Design", "Design Systems", "Brand Identity", "Design Tokens"],
    socials: {},
  },
  {
    id: "alex-rivera",
    name: "Alex Rivera",
    role: "Lead Full-Stack Engineer",
    tagline: "High-Performance Next.js & Cloud Platform Architect",
    bio: "Crafting bulletproof web and mobile platforms with Next.js and GraphQL. Alex focuses on performance optimization, serverless architectures, and zero-latency user experiences.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80",
    colorTheme: "cyan",
    size: "large",
    skills: ["Next.js", "React Native", "GraphQL", "TailwindCSS", "PostgreSQL"],
    socials: {},
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    role: "AI & Machine Learning Lead",
    tagline: "LLM Pipelines, Vector Databases & RAG Systems",
    bio: "Specializing in LLM fine-tuning, vector database retrieval (RAG), and custom AI pipelines. Transforming complex enterprise data into intelligent automated decisions.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80",
    colorTheme: "magenta",
    size: "large",
    skills: ["Python", "PyTorch", "LangChain", "Pinecone", "OpenAI API", "FastAPI"],
    socials: {},
  },
  {
    id: "marcus-chen",
    name: "Marcus Chen",
    role: "Senior DevOps & Infrastructure Lead",
    tagline: "Kubernetes, Terraform & Zero-Trust Cloud Security",
    bio: "Automating CI/CD pipelines, Kubernetes clusters, and multi-region cloud security. Ensuring our software systems operate with 99.99% availability.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=80",
    colorTheme: "purple",
    size: "medium",
    skills: ["Kubernetes", "Terraform", "AWS", "Docker", "CI/CD", "Cybersecurity"],
    socials: {},
  },
  {
    id: "sophia-martinez",
    name: "Sophia Martinez",
    role: "Senior UI/UX Designer",
    tagline: "Micro-Animations & Fluid Dark-Mode Interfaces",
    bio: "Designing interactive web experiences, micro-animations, and fluid design tokens. Obsessed with micro-interactions, accessibility standards, and dark-mode elegance.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80",
    colorTheme: "cyan",
    size: "medium",
    skills: ["Figma", "Framer", "Prototyping", "User Research", "Micro-animations"],
    socials: {},
  },
  {
    id: "david-kim",
    name: "David Kim",
    role: "Senior Backend Engineer",
    tagline: "High-Concurrency APIs & Distributed Caching",
    bio: "Building high-concurrency microservices, distributed caches, and database schemas that process millions of requests smoothly.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=80",
    colorTheme: "purple",
    size: "medium",
    skills: ["Go", "Node.js", "Redis", "Kafka", "Microservices", "MongoDB"],
    socials: {},
  },
  {
    id: "aria-thorne",
    name: "Aria Thorne",
    role: "Motion & WebGL Specialist",
    tagline: "3D Canvas Experiences & Shader Development",
    bio: "Creating 3D WebGL experiences, Three.js custom shaders, and GSAP animation trajectories that blow users away.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80",
    colorTheme: "magenta",
    size: "medium",
    skills: ["Three.js", "WebGL", "GSAP", "GLSL", "Canvas API"],
    socials: {},
  },
  {
    id: "lucas-vance",
    name: "Lucas Vance",
    role: "QA & Automation Specialist",
    tagline: "End-to-End Automated Testing & Security Audit",
    bio: "Engineers comprehensive test suites, load testing simulations, and continuous security audits to guarantee zero-defect releases.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=80",
    colorTheme: "cyan",
    size: "small",
    skills: ["Playwright", "Cypress", "Jest", "Load Testing", "Security Auditing"],
    socials: {},
  },
  {
    id: "hannah-schmidt",
    name: "Hannah Schmidt",
    role: "Technical Product Manager",
    tagline: "Agile Roadmap Delivery & Client Strategy",
    bio: "Translates enterprise client visions into precise technical requirements, managing agile execution sprints with zero friction.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
    colorTheme: "purple",
    size: "small",
    skills: ["Agile/Scrum", "Product Roadmap", "Jira", "Technical Docs"],
    socials: {},
  },
];

export const STAT_BUBBLES: StatBubble[] = [
  { id: "stat-1", label: "+200", value: "projects", colorTheme: "cyan", size: "medium", type: "stat" },
  { id: "stat-2", label: "2", value: "founders", colorTheme: "cyan", size: "medium", type: "stat" },
  { id: "stat-3", label: "5", value: "associates", colorTheme: "purple", size: "medium", type: "stat" },
  { id: "stat-4", label: "Created in", value: "2026", colorTheme: "cyan", size: "medium", type: "stat" },
  { id: "role-1", label: "developers", colorTheme: "cyan", size: "small", type: "role" },
  { id: "role-2", label: "UX designers", colorTheme: "purple", size: "medium", type: "role" },
  { id: "role-3", label: "creative", colorTheme: "magenta", size: "small", type: "role" },
  { id: "role-4", label: "motion designers", colorTheme: "purple", size: "small", type: "role" },
  { id: "role-5", label: "community managers", colorTheme: "magenta", size: "small", type: "role" },
  { id: "role-6", label: "planners", colorTheme: "cyan", size: "small", type: "role" },
  { id: "accent-1", label: "★ partnership", colorTheme: "cyan", size: "small", type: "accent" },
  { id: "accent-2", label: "04 O'Clock Tech", colorTheme: "dark", size: "medium", type: "accent" },
];
