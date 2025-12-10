"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import GitHubHeatmap from "../components/GitHubHeatmap";
import KintsugiBullet from "../components/KintsugiBullet";

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
      <button className="relative px-6 py-4 marble-kintsugi rounded-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl text-left min-w-[220px] group/button">
        {/* Marble background */}
        <div className="absolute inset-0 marble-pattern opacity-40 group-hover/button:opacity-60 transition-opacity duration-500"></div>

        {/* Kintsugi golden seams */}
        <div className="absolute inset-0 kintsugi-seams opacity-0 group-hover/button:opacity-100 transition-opacity duration-500"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="relative flex items-center justify-center">
            <div
              className={`transition-all duration-500 ${
                isHovered ? "scale-125 drop-shadow-lg" : ""
              }`}
            >
              <KintsugiBullet className="w-4 h-4" />
            </div>
            {isHovered && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-amber-300/30 animate-ping"></div>
              </div>
            )}
          </div>
          <span className="font-light text-foreground text-sm tracking-wide">
            {title}
          </span>
        </div>
      </button>

      {isHovered && (
        <div className="absolute top-full left-0 mt-3 w-72 px-5 py-4 marble-kintsugi rounded-lg shadow-xl z-10 pointer-events-none animate-in fade-in slide-in-from-top-2 duration-300">
          {/* Marble background for tooltip */}
          <div className="absolute inset-0 marble-pattern opacity-30 rounded-lg"></div>
          {/* Kintsugi border */}
          <div className="absolute inset-0 kintsugi-border rounded-lg"></div>
          <p className="relative z-10 text-xs text-muted-foreground font-light leading-relaxed">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const router = useRouter();

  const navItems = [
    { name: "about", href: "/about" },
    { name: "portfolio", href: "/portfolio" },
    { name: "blog", href: "/blog" },
    { name: "contact", href: "/contact" },
  ];

  // Prefetch all pages on mount for instant navigation
  useEffect(() => {
    navItems.forEach((item) => {
      router.prefetch(item.href);
    });
  }, [router, navItems]);

  // Prefetch on hover for faster navigation
  const handleMouseEnter = (href: string, name: string) => {
    setHoveredButton(name);
    router.prefetch(href);
  };

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* Main Hero Section - Full Screen */}
      <section className="h-screen flex items-center justify-center px-4 relative snap-start">
        {/* Navigation - Top Right */}
        <nav className="fixed top-8 right-8 sm:top-10 sm:right-10 flex gap-8 z-50">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              prefetch={true}
              onMouseEnter={() => handleMouseEnter(item.href, item.name)}
              onMouseLeave={() => setHoveredButton(null)}
              className={`
                relative
                font-light text-foreground
                transition-all duration-300 ease-out
                cursor-pointer
                text-sm tracking-widest
                lowercase
                ${
                  hoveredButton === item.name
                    ? "opacity-100 scale-105"
                    : "opacity-70 hover:opacity-90"
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
