"use client";

import { useState, useEffect } from "react";
import GitHubHeatmap from "../components/GitHubHeatmap";
import CLINav from "../components/CLINav";

interface ProjectBulletProps {
  title: string;
  description: string;
  link?: string;
}

function ProjectBullet({ title, description, link }: ProjectBulletProps) {
  const [isHovered, setIsHovered] = useState(false);

  const content = (
    <div className="relative px-6 py-4 marble-kintsugi rounded-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl text-left min-w-[220px] group/button">
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
            <div className="w-4 h-4 rounded-full bg-white/30 backdrop-blur-sm border border-white/40 shadow-inner glassy-bullet"></div>
          </div>
          {isHovered && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-white/40 backdrop-blur-sm animate-ping"></div>
            </div>
          )}
        </div>
        <span className="font-light text-foreground text-sm tracking-wide">
          {title}
        </span>
      </div>
    </div>
  );

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {content}
        </a>
      ) : (
        <button className="w-full">{content}</button>
      )}

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
  const [currentPath, setCurrentPath] = useState("/main");

  // Track which section is visible for filepath indicator
  useEffect(() => {
    const sections = [
      { id: "hero", path: "/main" },
      { id: "section1", path: "/projects" },
      { id: "section2", path: "/archive" },
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Trigger when section is 40% visible
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = sections.find((s) => s.id === entry.target.id);
          if (section) {
            setCurrentPath(section.path);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* Filepath Indicator - Top Left (Single, Updates on Scroll) */}
      <div className="fixed top-6 left-6 z-50 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg px-4 py-2 shadow-lg pointer-events-none transition-all duration-300">
        <span className="font-mono text-xs text-foreground opacity-80">
          {currentPath}
        </span>
      </div>

      {/* Main Hero Section - Full Screen */}
      <section
        id="hero"
        className="h-screen flex items-center justify-center px-4 relative snap-start"
      >
        {/* Navigation - Top Right */}
        <CLINav onSectionChange={setCurrentPath} />

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
      <section
        id="section1"
        className="h-screen flex items-start justify-center px-4 pt-16 pb-8 snap-start bg-foreground/5 overflow-y-auto relative"
      >
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
                  title: "Stock Tracker",
                  description: "A real-time stock tracking application that monitors market prices, tracks portfolio performance, and provides detailed analytics for informed investment decisions.",
                },
                {
                  title: "Toolbox",
                  description: "A comprehensive codex and learning platform for developers to master Data Structures & Algorithms. Features an in-browser code sandbox hosted on AWS, enabling hands-on practice with interactive coding challenges and real-time execution.",
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
              ].map((item, index) => (
                <ProjectBullet
                  key={index}
                  title={item.title}
                  description={item.description}
                  link={item.link}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section
        id="section2"
        className="h-screen flex items-center justify-center px-4 snap-start bg-foreground/10 relative"
      >
        <div className="text-center max-w-4xl">
          {/* Empty section - placeholder */}
        </div>
      </section>
    </div>
  );
}
