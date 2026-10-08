export interface DevThought {
  id: string;
  tag: string;
  thought: string;
  focus: string;
  philosophy: string;
  pillars: string[];
  takeaway: string;
}

export const DEV_THOUGHTS: DevThought[] = [
  {
    id: "thought-1",
    tag: "// MINDSET",
    thought: "First solve the problem, then write clean code.",
    focus: "✦ Clean Thinking",
    philosophy: "Great software architecture begins in the mind before touching the keyboard. Breaking down complex requirements into first principles leads to resilient, bug-free implementations.",
    pillars: ["Problem Deconstruction", "Mental Clarity", "Architectural Intent"],
    takeaway: "Clarity of thought always precedes clarity of code."
  },
  {
    id: "thought-2",
    tag: "// CRAFT",
    thought: "Code is poetry written with logic and purpose.",
    focus: "✦ Craftsmanship",
    philosophy: "Writing code isn't just instructing a machine; it's communicating with future engineers. Expressive, readable code is a work of intellectual craftsmanship.",
    pillars: ["Readable Syntax", "Logical Harmony", "Self-Documenting Code"],
    takeaway: "Write code that humans can read effortlessly and computers execute flawlessly."
  },
  {
    id: "thought-3",
    tag: "// AGILITY",
    thought: "Continuous iteration beats delayed perfection.",
    focus: "✦ Ship & Evolve",
    philosophy: "The fastest path to engineering excellence is real-world feedback loops. Ship incremental value, observe performance, and refine continuously.",
    pillars: ["Incremental Delivery", "Real-World Feedback", "Adaptive Agility"],
    takeaway: "Working software in production teaches more than hypothetical perfection in drafts."
  },
  {
    id: "thought-4",
    tag: "// RESILIENCE",
    thought: "Every resolved bug is a masterclass in resilience.",
    focus: "✦ Growth Spirit",
    philosophy: "Edge cases and bugs are inevitable in distributed systems. Elite engineers embrace anomalies with curiosity, turning every fix into a permanent architectural upgrade.",
    pillars: ["Root Cause Analysis", "System Hardening", "Tenacious Curiosity"],
    takeaway: "Embrace debugging as the ultimate teacher of system internals."
  },
  {
    id: "thought-5",
    tag: "// VISION",
    thought: "Dream in algorithms, architect for humanity.",
    focus: "✦ Purpose Driven",
    philosophy: "Technology attains true significance when deep algorithmic power solves real human challenges—bringing speed, reliability, and delight to everyday lives.",
    pillars: ["Human-Centric UX", "Scalable Algorithms", "Impact Engineering"],
    takeaway: "Build technology that makes human life richer, faster, and simpler."
  },
  {
    id: "thought-6",
    tag: "// SIMPLICITY",
    thought: "Simplicity is the soul of robust software.",
    focus: "✦ Elegant Code",
    philosophy: "Complexity is easy to add, but simplicity requires deep mastery. The best systems are minimal, modular, and easy to reason about under pressure.",
    pillars: ["Minimal Bloat", "Decoupled Modules", "Clear Abstractions"],
    takeaway: "Perfection is achieved when there is nothing left to take away."
  },
  {
    id: "thought-7",
    tag: "// PASSION",
    thought: "Stay curious, iterate fearlessly, keep building.",
    focus: "✦ Relentless Drive",
    philosophy: "The technological horizon expands every single day. Unbounded curiosity turns industry shifts into opportunities, transforming bold ideas into breakthrough products.",
    pillars: ["Lifelong Learning", "Rapid Prototyping", "Builder Mentality"],
    takeaway: "The only constant in tech is evolution—stay endlessly curious."
  },
  {
    id: "thought-8",
    tag: "// INNOVATION",
    thought: "Turn complex challenges into elegant solutions.",
    focus: "✦ Smart Systems",
    philosophy: "Real-world tech challenges are messy and multivariate. Great engineering synthesizes chaos into clean APIs, deterministic pipelines, and effortless user journeys.",
    pillars: ["Pattern Recognition", "API Elegance", "Robust Logic"],
    takeaway: "Great engineers tame complexity into effortless simplicity."
  },
  {
    id: "thought-9",
    tag: "// DISCIPLINE",
    thought: "Clean code reflects a disciplined mind.",
    focus: "✦ Code Standards",
    philosophy: "Consistency in style, strong typing, comprehensive tests, and clean architecture reflect an engineer's commitment to team harmony and long-term maintainability.",
    pillars: ["Predictable Patterns", "Strict Typing", "Defensive Design"],
    takeaway: "Discipline in small details prevents catastrophe at scale."
  },
  {
    id: "thought-10",
    tag: "// DEDICATION",
    thought: "Great software is crafted with patience and grit.",
    focus: "✦ Dev Excellence",
    philosophy: "Remarkable software is never accidental. It is forged through profiling, recursive refactoring, and an uncompromising commitment to performance.",
    pillars: ["Deep Focus", "Active Refactoring", "High Standards"],
    takeaway: "Quality is never an accident; it is always the result of sincere effort."
  },
  {
    id: "thought-11",
    tag: "// EVOLUTION",
    thought: "Fail fast, debug faster, and evolve relentlessly.",
    focus: "✦ Rapid Learning",
    philosophy: "Fear of failure causes architectural stagnation. Controlled experiments paired with deep observability create the fastest highway to groundbreaking innovations.",
    pillars: ["Deep Observability", "Blameless Culture", "Rapid Pivoting"],
    takeaway: "Speed of recovery and iteration defines world-class engineering."
  },
  {
    id: "thought-12",
    tag: "// MASTERY",
    thought: "Consistency in practice unlocks mastery in tech.",
    focus: "✦ Daily Growth",
    philosophy: "Mastery isn't born in hackathons; it is built through daily code reviews, exploring open-source repositories, and mastering system trade-offs.",
    pillars: ["Deliberate Practice", "Peer Code Reviews", "Compound Learning"],
    takeaway: "Small daily improvements compound into monumental engineering breakthroughs."
  },
  {
    id: "thought-13",
    tag: "// SCALE",
    thought: "Architecting scalable futures, commit by commit.",
    focus: "✦ Future Ready",
    philosophy: "Every service endpoint, database index, and pull request is a brick in the digital infrastructure of tomorrow. Build to withstand the test of scale and time.",
    pillars: ["Distributed Systems", "Horizontal Scaling", "Long-Term Vision"],
    takeaway: "Write today's code with tomorrow's scale in mind."
  },
];
