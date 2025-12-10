"use client";

import Link from "next/link";
import { useState } from "react";
import GitHubHeatmap from "../components/GitHubHeatmap";

interface ProjectBulletProps {
  title: string;
  description: string;
}

function ProjectBullet({ title, description }: ProjectBulletProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className="px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg hover:bg-white/30 transition-all duration-300 shadow-lg text-left min-w-[200px]">
        <div className="flex items-center gap-2">
          <div
            className={`w-2 h-2 rounded-full bg-foreground transition-all duration-300 ${
              isHovered ? "scale-150" : ""
            }`}
          />
          <span className="font-light text-foreground text-sm">{title}</span>
        </div>
      </button>
      {isHovered && (
        <div className="absolute top-full left-0 mt-2 w-64 px-4 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg shadow-lg z-10 pointer-events-none">
          <p className="text-xs text-muted-foreground font-light leading-relaxed">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const navItems = [
    { name: "about", href: "/about" },
    { name: "portfolio", href: "/portfolio" },
    { name: "blog", href: "/blog" },
    { name: "contact", href: "/contact" },
  ];

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {/* Main Hero Section - Full Screen */}
      <section className="h-screen flex items-center justify-center px-4 relative snap-start">
        {/* Navigation - Top Right */}
        <nav className="fixed top-6 right-6 flex gap-6 z-50">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              prefetch={true}
              onMouseEnter={() => setHoveredButton(item.name)}
              onMouseLeave={() => setHoveredButton(null)}
              className={`
                relative
                font-extralight text-foreground
                transition-all duration-300 ease-out
                cursor-pointer
                text-xs tracking-widest
                lowercase
                ${
                  hoveredButton === item.name
                    ? "opacity-100 scale-105"
                    : "opacity-50 hover:opacity-70"
                }
              `}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Main Content */}
        <div className="text-center space-y-12 max-w-2xl">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl font-light text-foreground font-display tracking-tight">
              Charles Bai
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground font-light">
              fun-ware developer
            </p>
          </div>
        </div>

        {/* Scroll Indicator - Bottom Center */}
        <div className="absolute bottom-8 left-1/2 animate-bounce-subtle">
          <svg
            className="w-6 h-6 text-foreground opacity-40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Section 1 */}
      <section className="h-screen flex items-start justify-center px-4 pt-16 pb-8 snap-start bg-foreground/5 overflow-y-auto">
        <div className="text-center max-w-6xl w-full space-y-10 mt-8">
          <GitHubHeatmap username="CharlesBai-blc" />

          {/* Current Projects/Interests */}
          <div className="space-y-6">
            <h2 className="text-3xl font-light text-foreground font-display tracking-tight">
              current projects / interests
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                {
                  title: "Project 1",
                  description: "Placeholder description for project 1",
                },
                {
                  title: "Project 2",
                  description: "Placeholder description for project 2",
                },
                {
                  title: "Interest 1",
                  description: "Placeholder description for interest 1",
                },
                {
                  title: "Interest 2",
                  description: "Placeholder description for interest 2",
                },
              ].map((item, index) => (
                <ProjectBullet
                  key={index}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="h-screen flex items-center justify-center px-4 snap-start bg-foreground/10">
        <div className="text-center max-w-4xl">
          {/* Empty section - placeholder */}
        </div>
      </section>
    </div>
  );
}
