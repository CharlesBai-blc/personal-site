"use client";

import { useState } from "react";
import Nav from "@/components/layout/Nav";
import Logo from "@/components/layout/Logo";

export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Modern e-commerce solution with React, featuring real-time inventory management and seamless payment integration.",
      tags: ["React", "Next.js", "TypeScript"],
    },
    {
      title: "Design System",
      description:
        "Comprehensive design system for a SaaS platform, improving consistency and developer productivity across teams.",
      tags: ["Design", "Figma", "React"],
    },
    {
      title: "Mobile Banking App",
      description:
        "Secure mobile banking application with biometric authentication and real-time transaction monitoring.",
      tags: ["React Native", "TypeScript", "Security"],
    },
    {
      title: "Analytics Dashboard",
      description:
        "Interactive data visualization dashboard with real-time metrics and customizable reporting features.",
      tags: ["React", "D3.js", "Data Visualization"],
    },
  ];

  return (
    <div className="min-h-screen relative">
      <Logo />
      <Nav />

      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-12 w-full">
          <div className="text-center space-y-4">
            <h1 className="text-5xl sm:text-6xl font-light text-foreground font-display tracking-tight">
              portfolio
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground font-light">
              selected projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`
                  bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-6 shadow-lg
                  transition-all duration-300
                  ${hoveredProject === index ? "bg-white/30 scale-105" : ""}
                `}
              >
                <h3 className="text-xl font-light text-foreground mb-3 font-display">
                  {project.title}
                </h3>
                <p className="text-foreground leading-relaxed font-light text-sm mb-4 opacity-80">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="font-mono text-xs text-foreground opacity-60 bg-white/10 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
