/**
 * Projects configuration
 * Centralized project data for maintainability
 */

export interface Project {
  title: string;
  description: string;
  link?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Stock Tracker",
    description:
      "A real-time stock tracking application that monitors market prices, tracks portfolio performance, and provides detailed analytics for informed investment decisions.",
  },
  {
    title: "Toolbox",
    description:
      "A comprehensive codex and learning platform for developers to master Data Structures & Algorithms. Features an in-browser code sandbox hosted on AWS, enabling hands-on practice with interactive coding challenges and real-time execution.",
    link: "https://toolbox.charles-bai.com",
  },
  {
    title: "Project 3",
    description: "Placeholder description for project 3",
  },
  {
    title: "Project 4",
    description: "Placeholder description for project 4",
  },
];
