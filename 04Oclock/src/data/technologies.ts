export interface TechCategory {
  category: string;
  items: {
    name: string;
    description: string;
    icon: string;
  }[];
}

export const TECH_CATEGORIES: TechCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "Next.js", description: "React Framework for Production & SSR", icon: "/images/next.webp" },
      { name: "React", description: "UI Component Library for Dynamic Apps", icon: "/images/react.webp" },
      { name: "TypeScript", description: "Typed JavaScript for Resilient Code", icon: "/images/typescript.webp" },
      { name: "JavaScript", description: "Modern ES6+ Client & Server Scripting", icon: "/images/javascript.webp" },
      { name: "Tailwind CSS", description: "Utility-First High Performance Styling", icon: "MdCss" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", description: "Asynchronous Event-Driven Runtime", icon: "/images/node.webp" },
      { name: "Express", description: "Minimalist Web Framework for Node", icon: "/images/express.webp" },
      { name: "Python", description: "High-level Backend & Machine Learning Language", icon: "MdCode" },
      { name: "REST APIs", description: "Standardized Scalable Endpoint Architecture", icon: "MdApi" },
      { name: "GraphQL", description: "Flexible Query Language for Data Fetching", icon: "MdGraphicEq" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", description: "Enterprise Relational ACID Database", icon: "MdStorage" },
      { name: "MySQL", description: "Scalable High-Throughput Relational Storage", icon: "/images/mysql.webp" },
      { name: "MongoDB", description: "Flexible NoSQL Document Storage", icon: "/images/mongo.webp" },
      { name: "Redis", description: "In-Memory Caching & Real-Time Data Store", icon: "MdMemory" },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "React Native", description: "Cross-Platform Native iOS & Android Apps", icon: "/images/react.webp" },
      { name: "Flutter", description: "Google's High Performance UI Toolkit", icon: "MdPhoneAndroid" },
    ],
  },
  {
    category: "AI & Automation",
    items: [
      { name: "Python AI", description: "Machine Learning & Data Science Pipelines", icon: "MdPsychology" },
      { name: "LLM APIs", description: "OpenAI, Claude, & Gemini Model Integration", icon: "MdAutoAwesome" },
      { name: "Generative AI", description: "RAG & Knowledge Retrieval Systems", icon: "MdBolt" },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", description: "Global Enterprise Cloud Infrastructure", icon: "MdCloud" },
      { name: "Docker", description: "Isolated Containerization & Deployment", icon: "MdDns" },
      { name: "CI/CD & Git", description: "Automated Build, Test & Deployment Workflows", icon: "MdMergeType" },
    ],
  },
];
