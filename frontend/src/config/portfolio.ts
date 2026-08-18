export type ProjectVisual = "terminal" | "market";

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  summary: string;
  detail: string;
  year: string;
  status: string;
  stack: string[];
  href?: string;
  visual: ProjectVisual;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "toolbox",
    title: "Toolbox",
    category: "Developer learning platform",
    summary:
      "A hands-on environment for learning data structures and algorithms through explanation, experimentation, and execution.",
    detail:
      "Toolbox pairs a structured technical codex with an AWS-hosted browser sandbox, giving developers one place to understand a concept and immediately put it into practice.",
    year: "2026",
    status: "Live",
    stack: ["Next.js", "TypeScript", "AWS", "Docker"],
    href: "https://toolbox.charles-bai.com",
    visual: "terminal",
  },
  {
    id: "stock-tracker",
    title: "Stock Tracker",
    category: "Market data application",
    summary:
      "A real-time market workspace for tracking prices, understanding portfolio movement, and surfacing useful context.",
    detail:
      "Designed as a focused alternative to information-dense finance dashboards, with an emphasis on clear data hierarchy and fast portfolio checks.",
    year: "2025",
    status: "In development",
    stack: ["React", "Node.js", "Market APIs", "PostgreSQL"],
    visual: "market",
  },
];
