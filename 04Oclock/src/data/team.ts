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
    role: "CTO & Senior Fullstack Developer",
    tagline: "Full-Stack System Architecture & Scalable Web Platforms",
    bio: "Passionate technology leader, CTO, and senior fullstack developer with extensive experience in building high-scale cloud platforms, distributed microservices, modern web applications, and AI integrations. Driven by crafting software that balances performance with elegance.",
    image: "/people/Kanha.jpeg",
    colorTheme: "cyan",
    size: "large",
    skills: ["React", "TypeScript", "Node.js", "Python", "Cloud Architecture", "System Design", "Full-Stack Dev"],
    socials: {},
  },
  {
    id: "prince-sharma",
    name: "Prince Sharma",
    role: "Software Engineer",
    tagline: "Backend Architecture, Cloud Systems & High-Scale APIs",
    bio: "Software Engineer dedicated to building high-concurrency microservices, cloud deployment pipelines, and resilient backend systems designed for scalability.",
    image: "/people/Prince Sharma.png?v=2",
    colorTheme: "cyan",
    size: "large",
    skills: ["Node.js", "Python", "Docker", "PostgreSQL", "System Design", "AWS"],
    socials: {},
  },
  {
    id: "rohit-sen",
    name: "Rohit Sen",
    role: "AI/ML & Data Engineer",
    tagline: "Machine Learning Pipelines, AI Integration & Data Infrastructure",
    bio: "AI/ML & Data Engineer specializing in building robust machine learning pipelines, predictive data models, LLM integrations, and scalable data engineering infrastructures for modern applications.",
    image: "/people/Rohit Sen.jpeg",
    colorTheme: "cyan",
    size: "large",
    skills: ["Python", "PyTorch", "TensorFlow", "Scikit-Learn", "Data Pipelines", "SQL", "FastAPI"],
    socials: {},
  },
  {
    id: "pooja",
    name: "Pooja",
    role: "Full Stack Developer",
    tagline: "Scalable Full-Stack Applications & Responsive User Interfaces",
    bio: "Full Stack Developer specializing in modern frontend frameworks, backend microservices, and high-performance database design that deliver intuitive user experiences.",
    image: "/people/Pooja.png",
    colorTheme: "magenta",
    size: "large",
    skills: ["React", "Node.js", "TypeScript", "MongoDB", "Express", "REST APIs"],
    socials: {},
  },
  {
    id: "vaishali-soni",
    name: "Vaishali Soni",
    role: "Full Stack Developer",
    tagline: "Modern Web Applications & Responsive UI Engineering",
    bio: "Full Stack Developer specializing in responsive user interfaces, robust REST APIs, and full-lifecycle web application development. Passionate about writing clean, maintainable code and delivering seamless user experiences.",
    image: "/people/Vaishali Soni.jpeg",
    colorTheme: "magenta",
    size: "large",
    skills: ["React", "Node.js", "JavaScript", "TypeScript", "HTML5/CSS3", "REST APIs", "TailwindCSS"],
    socials: {},
  },
  {
    id: "samyak",
    name: "Samyak",
    role: "Full Stack Engineer",
    tagline: "End-to-End Web Products & Modern Framework Engineering",
    bio: "Full Stack Engineer focused on crafting seamless user experiences, optimized database queries, and clean modular codebases across web applications.",
    image: "/people/Samyak.png",
    colorTheme: "purple",
    size: "large",
    skills: ["React", "TypeScript", "Node.js", "Next.js", "GraphQL", "TailwindCSS"],
    socials: {},
  },
  {
    id: "shankar",
    name: "Shankar",
    role: "Senior Backend Developer",
    tagline: "High-Performance Backend Systems & Database Optimization",
    bio: "Senior Backend Developer specializing in high-throughput database design, microservice architectures, and robust API endpoints for enterprise applications.",
    image: "/people/Shankar.png",
    colorTheme: "cyan",
    size: "large",
    skills: ["Python", "Node.js", "PostgreSQL", "Redis", "Kafka", "Docker"],
    socials: {},
  },
  {
    id: "lakshya",
    name: "Lakshya",
    role: "Business Development Executive (BDE)",
    tagline: "Strategic Business Growth & Client Partnerships",
    bio: "Business Development Executive driving client success, strategic partnerships, project planning, and growth outreach at 04 O'Clock Tech. Bridges client vision with technical execution.",
    image: "/people/Lakshya.jpeg",
    colorTheme: "purple",
    size: "large",
    skills: ["Business Strategy", "Client Relations", "Lead Generation", "Project Planning", "Partnership Outreach"],
    socials: {},
  },
  {
    id: "shruti",
    name: "Shruti",
    role: "UI/UX & Frontend Developer",
    tagline: "Human-Centered UI/UX Design & Interactive Frontend Systems",
    bio: "UI/UX & Frontend Developer creating intuitive user journeys, accessible design systems, and responsive web interfaces for digital products.",
    image: "/people/Shruti.png",
    colorTheme: "magenta",
    size: "large",
    skills: ["Figma", "React", "TypeScript", "CSS3/SASS", "UI/UX Design", "TailwindCSS"],
    socials: {},
  },
  {
    id: "simran",
    name: "Simran",
    role: "Full Stack Developer",
    tagline: "MERN Stack Solutions & Agile Software Engineering",
    bio: "Full Stack Developer adept at delivering end-to-end MERN web products with clean component architecture, state management, and RESTful services.",
    image: "/people/Simran.png",
    colorTheme: "purple",
    size: "large",
    skills: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript", "HTML/CSS"],
    socials: {},
  },
  {
    id: "vandna",
    name: "Vandna",
    role: "Full Stack Developer",
    tagline: "End-to-End Web Solutions & Interactive UI Design",
    bio: "Full Stack Developer focused on building dynamic frontend interfaces, backend microservices, and database schemas that deliver smooth, resilient web applications.",
    image: "/people/Vandna.jpeg",
    colorTheme: "cyan",
    size: "large",
    skills: ["React", "JavaScript", "Node.js", "Express", "Database Design", "REST APIs"],
    socials: {},
  },
  {
    id: "shikha",
    name: "Shikha",
    role: "Full Stack Developer",
    tagline: "Modular Architecture & Full-Lifecycle Software Development",
    bio: "Experienced Full Stack Developer dedicated to crafting reusable UI component libraries, scalable API integrations, and efficient database architectures.",
    image: "/people/Shikha.jpeg",
    colorTheme: "magenta",
    size: "large",
    skills: ["React", "TypeScript", "Node.js", "MongoDB", "Express", "UI/UX Components"],
    socials: {},
  },
  {
    id: "namrata",
    name: "Namrata",
    role: "MERN Full Stack Developer",
    tagline: "MERN Stack Architecture & High-Performance Cloud APIs",
    bio: "MERN Stack Specialist skilled in building scalable MongoDB, Express.js, React, and Node.js applications with high performance, secure authentication, and sleek interactive designs.",
    image: "/people/Namrata.jpeg",
    colorTheme: "purple",
    size: "large",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "REST APIs"],
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
