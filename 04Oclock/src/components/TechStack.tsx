import React from "react";
import "./styles/TechStack.css";

// High-contrast clean vector SVG icons for 100% reliable rendering
const TechIcons: Record<string, React.ReactNode> = {
  redux: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-4-9a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4zm-4 5a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  ),
  nextjs: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.49 17.51L10.2 7.85V17H8.5V6.5h1.74l7.25 9.66v-9.66h1.7v11.01h-.7z" />
    </svg>
  ),
  react: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <circle cx="12" cy="12" r="2.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)" />
    </svg>
  ),
  webpack: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8">
      <polygon points="12 2 21 7 21 17 12 22 3 17 3 7 12 2" />
      <polyline points="12 22 12 12 21 7" />
      <polyline points="12 12 3 7" />
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <text x="6" y="17" fontSize="11" fontWeight="900" fontFamily="sans-serif">TS</text>
    </svg>
  ),
  auth0: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M21.98 7.448L19.62 0H4.38L2.02 7.448c-.96 3.037.08 6.37 2.64 8.243L12 24l7.34-8.309c2.56-1.873 3.6-5.206 2.64-8.243zM12 16a4 4 0 110-8 4 4 0 010 8z" />
    </svg>
  ),
  html5: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.234-2.625h10.422l.234-2.625H5.438l.703 7.875h9.188l-.375 4.125-3.047.844-3.047-.844-.188-2.25H6.281l.375 4.875 5.344 1.484 5.344-1.484.75-8.375H8.531z" />
    </svg>
  ),
  css3: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l.234 2.625h6.609l-.281 3.141-3.094.844-3.047-.844-.188-2.25H6.281l.375 4.875 5.344 1.484 5.344-1.484.75-8.375H8.531z" />
    </svg>
  ),
  tailwind: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
    </svg>
  ),
  vue: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M2 3h3.5L12 15 18.5 3H22L12 21 2 3zm4.5 0h3L12 8.5 14.5 3h3L12 13 6.5 3z" />
    </svg>
  ),
  threejs: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.6">
      <polygon points="12 2 22 20 2 20 12 2" />
      <line x1="12" y1="2" x2="12" y2="20" />
      <line x1="17" y1="11" x2="7" y2="11" />
    </svg>
  ),
  express: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <text x="2" y="16" fontSize="14" fontWeight="900" fontFamily="sans-serif">ex</text>
    </svg>
  ),
  nodejs: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M12 1l10.4 6v10L12 23.01 1.6 17V7L12 1zm0 2.3L3.6 8v8l8.4 4.7 8.4-4.7V8L12 3.3z" />
    </svg>
  ),
  nestjs: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L19.2 8.5 12 12.2 4.8 8.5 12 4.8z" />
    </svg>
  ),
  python: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M11.9 2c-5.1 0-4.8 2.2-4.8 2.2v2.3h4.9v.7H5.1S2 6.8 2 12c0 5.1 2.7 4.9 2.7 4.9h1.6v-2.3c0-2.6 2.3-2.6 2.3-2.6h4.9c2.4 0 2.4-2.3 2.4-2.3V4.8S16.4 2 11.9 2zm-2.7 1.6c.5 0 .9.4.9.9 0 .5-.4.9-.9.9-.5 0-.9-.4-.9-.9 0-.5.4-.9.9-.9zm2.9 18.4c5.1 0 4.8-2.2 4.8-2.2v-2.3h-4.9v-.7h6.9s3.1.4 3.1-4.8c0-5.1-2.7-4.9-2.7-4.9h-1.6v2.3c0 2.6-2.3 2.6-2.3 2.6h-4.9c-2.4 0-2.4 2.3-2.4 2.3v4.9s-.5 2.8 4 2.8zm2.7-1.6c-.5 0-.9-.4-.9-.9 0-.5.4-.9.9-.9.5 0 .9.4.9.9 0 .5-.4.9-.9.9z" />
    </svg>
  ),
  fastapi: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.75 4.5l-1.5 6h4.25l-6.25 9 1.5-6H7.5l6.25-9z" />
    </svg>
  ),
  django: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M11.66 0h2.4v17.48c-.68.14-1.52.24-2.33.24-3.52 0-5.18-1.59-5.18-4.66 0-3.08 1.83-4.78 4.7-4.78.14 0 .28 0 .41.01V0zm-.01 10.45c-1.39 0-2.22.82-2.22 2.53 0 1.67.75 2.45 2.22 2.45V10.45zM17.13 8.35v6.52c0 1.81-.54 2.7-1.78 2.7-.49 0-.99-.1-1.33-.24l.34-1.84c.19.07.41.1.61.1.37 0 .54-.25.54-.91V8.35h1.62z" />
    </svg>
  ),
  graphql: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2zm0 2.3L5.34 8.15v7.7L12 19.7l6.66-3.85v-7.7L12 4.3z" />
    </svg>
  ),
  rest: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4" width="18" height="5" rx="2" />
      <rect x="3" y="15" width="18" height="5" rx="2" />
      <line x1="12" y1="9" x2="12" y2="15" />
    </svg>
  ),
  postgresql: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c2.5 0 4.5 1.5 5.2 3.6-.8-.4-1.8-.6-2.7-.6-3 0-5.5 2-5.5 5 0 1.2.4 2.3 1.1 3.1C8.2 15.5 7 13.9 7 12c0-3.9 3.1-7 7-7z" />
    </svg>
  ),
  mongodb: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M12 0c-1.8 4.2-6 8.5-6 13.5C6 18.2 8.7 24 12 24s6-5.8 6-10.5C18 8.5 13.8 4.2 12 0zm0 21.5c-2 0-3.5-3.5-3.5-8 0-3 2-6.5 3.5-9.5 1.5 3 3.5 6.5 3.5 9.5 0 4.5-1.5 8-3.5 8z" />
    </svg>
  ),
  redis: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M2 6l10-4 10 4-10 4L2 6zm0 6l10 4 10-4M2 18l10 4 10-4" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  mysql: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M12 3C7 3 3 6.6 3 11c0 3.5 2.6 6.5 6.3 7.5L8 21l4-2.5c4.7-.2 8.5-3.6 8.5-7.5 0-4.4-4-8-8.5-8z" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  ),
  firebase: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M3.89 15.672L6.57 2.766a.822.822 0 011.53-.163l2.84 5.485M3.89 15.672L1.09 17.5a.82.82 0 01-1.04-.325.845.845 0 01.12-1.04l3.72-3.863M12 24l10.91-6.19a.825.825 0 00.35-.95l-3.32-15.65a.822.822 0 00-1.42-.39L12 24z" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  supabase: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M13.35 0L1.75 14.05a.65.65 0 00.5.95h8.4L9.4 24l12.85-14.8a.65.65 0 00-.5-.95h-8.4l1.6-8.25z" />
    </svg>
  ),
  aws: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M6.7 10.5c0-.8.6-1.5 1.5-1.5s1.5.7 1.5 1.5v3h-3v-3zm9 0c0-.8.6-1.5 1.5-1.5s1.5.7 1.5 1.5v3h-3v-3zM2 17.5c4 2.5 10 3.5 16 1 1-.4 2.5-1.2 2.5-1.2l-1-1.5s-1.2.7-2 1c-4.8 2-10 1.2-13.5-.8L2 17.5z" />
    </svg>
  ),
  docker: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M13.9 11.3h2.3v2.3h-2.3zm-3.2 0h2.3v2.3h-2.3zm-3.2 0h2.3v2.3H7.5zm-3.2 0h2.3v2.3H4.3zm6.4-3.2h2.3v2.3h-2.3zm-3.2 0h2.3v2.3H7.5zm6.4 0h2.3v2.3h-2.3zm-3.2-3.2h2.3v2.3h-2.3zM.5 16.5c1 3.5 4.5 5.5 11 5.5 7.5 0 11.5-3.5 12-8.5-.8 0-2.5.5-3.5 1.5-1.5-1.2-3.5-1.5-5.5-1.5H.5z" />
    </svg>
  ),
  kubernetes: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.6">
      <polygon points="12 2 21 7 21 17 12 22 3 17 3 7 12 2" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  vercel: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M12 1L24 22H0L12 1z" />
    </svg>
  ),
  actions: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M13 2L3 14h8l-2 8 10-12h-8l2-8z" />
    </svg>
  ),
  gcp: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
    </svg>
  ),
  openai: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M22.28 9.82a5.98 5.98 0 00-.52-4.91 6.04 6.04 0 00-6.51-2.9 6.07 6.07 0 00-4.67-2.01 6.06 6.06 0 00-5.8 4.2 6.05 6.05 0 00-4.14 2.91 6.01 6.01 0 00.7 7.11 5.98 5.98 0 00.52 4.91 6.04 6.04 0 006.51 2.9 6.04 6.04 0 004.67 2.01 6.06 6.06 0 005.8-4.2 6.03 6.03 0 004.14-2.91 6.01 6.01 0 00-.7-7.11z" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  pytorch: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M13.5 2a.5.5 0 00-.5.5v3a.5.5 0 001 0v-3a.5.5 0 00-.5-.5zM12 7a5 5 0 100 10 5 5 0 000-10zm4.5 2.5a.5.5 0 11-1 0 .5.5 0 011 0z" />
    </svg>
  ),
  agents: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 2a6 6 0 016 6c0 2.2-1.2 4.1-3 5.2V16H9v-2.8C7.2 12.1 6 10.2 6 8a6 6 0 016-6z" />
      <path d="M9 19h6v2H9z" />
    </svg>
  ),
  tensorflow: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <polygon points="12 2 20 7 20 17 16 19.5 16 9.5 12 7 8 9.5 8 19.5 4 17 4 7 12 2" />
    </svg>
  ),
  figma: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M8 2h4v4H8V2zm4 0h4a4 4 0 010 8h-4V2zm0 8h4a4 4 0 010 8h-4v-8zm-4 4h4v4H8v-4zm0-8h4v4H8V6zm0 12a4 4 0 114-4v4H8z" />
    </svg>
  ),
  postman: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <polygon points="8 12 15 8 13 15 11 13 8 12" />
    </svg>
  ),
  git: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M21.7 10.6l-9.3-9.3c-.8-.8-2-.8-2.8 0L7 3.9l3.5 3.5c.8-.3 1.8-.1 2.4.6.6.6.8 1.6.5 2.4l3.4 3.4c.8-.3 1.8-.1 2.4.6.8.8.8 2 0 2.8s-2 .8-2.8 0c-.6-.6-.8-1.6-.5-2.4l-3.2-3.2v5.7c.3.2.5.5.6.9.4.9 0 2-.9 2.4s-2 0-2.4-.9c-.4-.9 0-2 .9-2.4.3-.1.7-.2 1-.1V9.2c-.3.1-.7 0-1-.1l-3.6-3.6-4 4c-.8.8-.8 2 0 2.8l9.3 9.3c.8.8 2 .8 2.8 0l9.3-9.3c.8-.8.8-2 0-2.8z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  ),
};

export interface TechItem {
  id: string;
  name: string;
  category: string;
  iconKey: string;
  highlighted?: boolean;
}

export interface TechGroup {
  id: string;
  categoryName: string;
  items: TechItem[];
}

export const TECH_STACK_GROUPS: TechGroup[] = [
  {
    id: "frontend",
    categoryName: "Frontend Architecture",
    items: [
      { id: "redux", name: "Redux", category: "Frontend", iconKey: "redux", highlighted: true },
      { id: "nextjs", name: "Next.js", category: "Frontend", iconKey: "nextjs", highlighted: true },
      { id: "react", name: "React", category: "Frontend", iconKey: "react", highlighted: true },
      { id: "webpack", name: "Webpack", category: "Frontend", iconKey: "webpack" },
      { id: "typescript", name: "TypeScript", category: "Frontend", iconKey: "typescript", highlighted: true },
      { id: "auth0", name: "Auth0", category: "Frontend", iconKey: "auth0" },
      { id: "html5", name: "HTML5", category: "Frontend", iconKey: "html5" },
      { id: "css3", name: "CSS3", category: "Frontend", iconKey: "css3", highlighted: true },
      { id: "tailwind", name: "Tailwind", category: "Frontend", iconKey: "tailwind" },
      { id: "vue", name: "Vue.js", category: "Frontend", iconKey: "vue" },
      { id: "threejs", name: "Three.js", category: "Frontend", iconKey: "threejs", highlighted: true },
    ],
  },
  {
    id: "backend",
    categoryName: "Backend & Microservices",
    items: [
      { id: "express", name: "Express.js", category: "Backend", iconKey: "express", highlighted: true },
      { id: "nodejs", name: "Node.js", category: "Backend", iconKey: "nodejs", highlighted: true },
      { id: "nestjs", name: "NestJS", category: "Backend", iconKey: "nestjs" },
      { id: "python", name: "Python", category: "Backend", iconKey: "python", highlighted: true },
      { id: "fastapi", name: "FastAPI", category: "Backend", iconKey: "fastapi" },
      { id: "django", name: "Django", category: "Backend", iconKey: "django" },
      { id: "graphql", name: "GraphQL", category: "Backend", iconKey: "graphql", highlighted: true },
      { id: "rest", name: "REST APIs", category: "Backend", iconKey: "rest" },
    ],
  },
  {
    id: "databases",
    categoryName: "Databases & Storage",
    items: [
      { id: "postgresql", name: "PostgreSQL", category: "Databases", iconKey: "postgresql", highlighted: true },
      { id: "mongodb", name: "MongoDB", category: "Databases", iconKey: "mongodb", highlighted: true },
      { id: "redis", name: "Redis", category: "Databases", iconKey: "redis", highlighted: true },
      { id: "mysql", name: "MySQL", category: "Databases", iconKey: "mysql" },
      { id: "firebase", name: "Firebase", category: "Databases", iconKey: "firebase" },
      { id: "supabase", name: "Supabase", category: "Databases", iconKey: "supabase", highlighted: true },
    ],
  },
  {
    id: "cloud",
    categoryName: "Cloud, DevOps & Infrastructure",
    items: [
      { id: "aws", name: "AWS", category: "Cloud", iconKey: "aws", highlighted: true },
      { id: "docker", name: "Docker", category: "Cloud", iconKey: "docker", highlighted: true },
      { id: "kubernetes", name: "Kubernetes", category: "Cloud", iconKey: "kubernetes" },
      { id: "vercel", name: "Vercel", category: "Cloud", iconKey: "vercel", highlighted: true },
      { id: "actions", name: "GitHub Actions", category: "Cloud", iconKey: "actions" },
      { id: "gcp", name: "Google Cloud", category: "Cloud", iconKey: "gcp" },
    ],
  },
  {
    id: "ai",
    categoryName: "Artificial Intelligence & LLM",
    items: [
      { id: "openai", name: "OpenAI", category: "AI", iconKey: "openai", highlighted: true },
      { id: "pytorch", name: "PyTorch", category: "AI", iconKey: "pytorch" },
      { id: "agents", name: "AI Agents / RAG", category: "AI", iconKey: "agents", highlighted: true },
      { id: "tensorflow", name: "TensorFlow", category: "AI", iconKey: "tensorflow" },
    ],
  },
  {
    id: "tools",
    categoryName: "Design & Development Tools",
    items: [
      { id: "figma", name: "Figma", category: "Tools", iconKey: "figma", highlighted: true },
      { id: "postman", name: "Postman", category: "Tools", iconKey: "postman" },
      { id: "git", name: "Git", category: "Tools", iconKey: "git", highlighted: true },
      { id: "github", name: "GitHub", category: "Tools", iconKey: "github" },
    ],
  },
];

const TechStack: React.FC = () => {
  return (
    <section className="tech-stack-section">
      <div className="tech-stack-container">
        {/* Single Unified Square Card Box Container */}
        <div className="tech-stack-card-box">
          {/* Header Block */}
          <div className="tech-stack-header">
            <h2 className="tech-stack-title">Technology Stack</h2>
            <p className="tech-stack-subtitle">
              Our choice of technology stack was critical to the project's success. It included:
            </p>
          </div>

          {/* Categorized Tech Stack Nodes in Flow Order */}
          {TECH_STACK_GROUPS.map((group) => (
            <div key={group.id} className="tech-flow-group">
              <div className="tech-group-title-wrapper">
                <div className="tech-group-line left" />
                <h3 className="tech-group-title">{group.categoryName}</h3>
                <div className="tech-group-line" />
              </div>

              <div className="tech-nodes-grid">
                {group.items.map((item) => (
                  <div
                    key={item.id}
                    className={`tech-node-item ${item.highlighted ? "highlighted" : ""}`}
                    title={`${item.name} (${item.category})`}
                  >
                    {/* Dashed Circular Ring SVG */}
                    <svg className="tech-node-dashed-svg" viewBox="0 0 121 121">
                      <circle
                        cx="60.5"
                        cy="60.5"
                        r="55.5"
                        fill="none"
                        stroke={item.highlighted ? "#ffffff" : "rgba(255, 255, 255, 0.22)"}
                        strokeWidth="1.5"
                        strokeDasharray="4 5"
                      />
                    </svg>

                    {/* Inner Circle (Matte Black matching theme) */}
                    <div className="tech-node-circle">
                      <div className="tech-node-icon">
                        {TechIcons[item.iconKey] || TechIcons.react}
                      </div>
                      <span className="tech-node-label">{item.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
