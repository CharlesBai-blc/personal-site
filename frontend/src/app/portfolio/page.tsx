"use client";

import { useState, useEffect } from "react";
import CLINav from "../../components/CLINav";

export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    document.title = "CB:\\site\\portfolio";
  }, []);

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
      {/* Navigation - Top Right */}
      <CLINav />

      {/* Filepath Indicator - Top Left */}
      <div className="fixed top-6 left-6 z-50 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg px-4 py-2 shadow-lg pointer-events-none transition-all duration-300">
        <span className="font-mono text-xs text-foreground opacity-80">
          /portfolio
        </span>
      </div>

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-12 w-full">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl sm:text-6xl font-light text-foreground font-display tracking-tight">
              portfolio
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground font-light">
              selected projects
            </p>
          </div>

          {/* Projects Grid */}
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
