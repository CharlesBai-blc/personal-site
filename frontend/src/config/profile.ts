export interface ProfileFact {
  label: string;
  value: string;
}

export interface Capability {
  title: string;
  description: string;
  technologies: string;
}

export interface Principle {
  title: string;
  description: string;
}

export const PROFILE_FACTS: ProfileFact[] = [
  { label: "Based", value: "Ithaca, NY / Frederick, MD" },
  { label: "Studying", value: "Computer Science at Cornell" },
  { label: "Focus", value: "Backend, cloud, and applied NLP" },
  { label: "Current mode", value: "Learning, building, shipping" },
];

export const CAPABILITIES: Capability[] = [
  {
    title: "Backend systems",
    description:
      "Reliable APIs, data flows, and services designed around clear contracts and real operating constraints.",
    technologies: "TypeScript / Python / Node.js / SQL",
  },
  {
    title: "Product engineering",
    description:
      "End-to-end web products that balance a deliberate interface with maintainable implementation.",
    technologies: "React / Next.js / REST / Testing",
  },
  {
    title: "Cloud infrastructure",
    description:
      "Practical deployment systems with observability, automation, and room to scale without unnecessary machinery.",
    technologies: "AWS / Docker / CI/CD / Linux",
  },
  {
    title: "Applied intelligence",
    description:
      "Experiments at the intersection of language, retrieval, and useful software—not AI for its own sake.",
    technologies: "NLP / LLMs / Search / Evaluation",
  },
];

export const PRINCIPLES: Principle[] = [
  {
    title: "Clarity compounds",
    description:
      "Readable systems, direct communication, and explicit tradeoffs make teams faster over time.",
  },
  {
    title: "Details signal care",
    description:
      "The small decisions in an interface or API often determine whether the whole product feels trustworthy.",
  },
  {
    title: "Ship, then sharpen",
    description:
      "The best feedback comes from real use. Build the smallest honest version, learn, and improve it.",
  },
];
