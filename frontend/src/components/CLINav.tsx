"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

interface CLINavProps {
  onSectionChange?: (section: string) => void;
}

export default function CLINav({ onSectionChange }: CLINavProps) {
  const [cliInput, setCliInput] = useState("");
  const [isCliFocused, setIsCliFocused] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const placeholderCommands = [
    "main",
    "projects",
    "archive",
    "about",
    "portfolio",
    "blog",
    "contact",
    "..",
  ];

  // Cycle through placeholder commands with fade out/in
  useEffect(() => {
    if (isCliFocused) return; // Don't cycle when focused

    const interval = setInterval(() => {
      // Fade out
      setIsFading(true);
      // After fade out completes, change index and fade in
      setTimeout(() => {
        setPlaceholderIndex((prev) => (prev + 1) % placeholderCommands.length);
        setIsFading(false);
      }, 300); // Half of animation duration
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isCliFocused, placeholderCommands.length]);

  const navItems = [
    { name: "about", href: "/about" },
    { name: "portfolio", href: "/portfolio" },
    { name: "blog", href: "/blog" },
    { name: "contact", href: "/contact" },
  ];

  // Handle CLI commands
  const handleCliCommand = (command: string) => {
    const trimmed = command.trim().toLowerCase();

    // Handle cd commands
    if (trimmed.startsWith("cd ")) {
      const path = trimmed.substring(3).trim();

      // Handle cd .. to go back to main
      if (path === ".." || path === "/..") {
        router.push("/");
        setCliInput("");
        return;
      }

      // Main page sections (only works on home page)
      if (path === "/main" || path === "main") {
        if (pathname === "/" && onSectionChange) {
          const hero = document.getElementById("hero");
          hero?.scrollIntoView({ behavior: "smooth" });
          onSectionChange("/main");
          setCliInput("");
          return;
        } else if (pathname !== "/") {
          router.push("/");
          setTimeout(() => {
            const hero = document.getElementById("hero");
            hero?.scrollIntoView({ behavior: "smooth" });
          }, 100);
          setCliInput("");
          return;
        }
      }
      if (path === "/projects" || path === "projects") {
        if (pathname === "/" && onSectionChange) {
          const section1 = document.getElementById("section1");
          section1?.scrollIntoView({ behavior: "smooth" });
          onSectionChange("/projects");
          setCliInput("");
          return;
        } else if (pathname !== "/") {
          router.push("/");
          setTimeout(() => {
            const section1 = document.getElementById("section1");
            section1?.scrollIntoView({ behavior: "smooth" });
          }, 100);
          setCliInput("");
          return;
        }
      }
      if (path === "/archive" || path === "archive") {
        if (pathname === "/" && onSectionChange) {
          const section2 = document.getElementById("section2");
          section2?.scrollIntoView({ behavior: "smooth" });
          onSectionChange("/archive");
          setCliInput("");
          return;
        } else if (pathname !== "/") {
          router.push("/");
          setTimeout(() => {
            const section2 = document.getElementById("section2");
            section2?.scrollIntoView({ behavior: "smooth" });
          }, 100);
          setCliInput("");
          return;
        }
      }

      // Other pages
      const pageMap: Record<string, string> = {
        "/about": "/about",
        about: "/about",
        "/portfolio": "/portfolio",
        portfolio: "/portfolio",
        "/blog": "/blog",
        blog: "/blog",
        "/contact": "/contact",
        contact: "/contact",
        "/": "/",
        home: "/",
      };

      if (pageMap[path]) {
        router.push(pageMap[path]);
        setCliInput("");
        return;
      }
    }

    // Clear on invalid command
    setCliInput("");
  };

  const handleCliKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCliCommand(cliInput);
    } else if (e.key === "Escape") {
      setCliInput("");
      setIsCliFocused(false);
    }
  };

  const handleMouseEnter = (href: string, name: string) => {
    setHoveredButton(name);
    router.prefetch(href);
  };

  return (
    <nav className="fixed top-8 right-8 sm:top-10 sm:right-10 flex items-center gap-4 z-50">
      {/* CLI Input - Leftmost */}
      <div className="relative flex items-center">
        <span className="font-mono text-xs text-foreground opacity-70 mr-1">
          $
        </span>
        <div className="relative">
          {!isCliFocused && (
            <div className="absolute inset-0 flex items-center pointer-events-none">
              <span className="font-mono text-xs text-foreground/50">cd</span>
              <span
                key={placeholderIndex}
                className={`font-mono text-xs text-foreground/50 ml-1 ${
                  isFading ? "animate-fade-out" : "animate-fade-in"
                }`}
              >
                {placeholderCommands[placeholderIndex]}
              </span>
            </div>
          )}
          <input
            type="text"
            value={cliInput}
            onChange={(e) => setCliInput(e.target.value)}
            onKeyDown={handleCliKeyDown}
            onFocus={() => setIsCliFocused(true)}
            onBlur={() => setIsCliFocused(false)}
            className={`
              font-mono text-xs text-foreground
              bg-transparent
              border-none
              outline-none
              w-20
              transition-all duration-300
              ${
                isCliFocused
                  ? "w-28 opacity-100"
                  : "opacity-70 hover:opacity-85"
              }
            `}
          />
        </div>
        {isCliFocused && (
          <span className="font-mono text-xs text-foreground opacity-70 animate-pulse ml-0.5">
            |
          </span>
        )}
      </div>

      {/* Navigation Links */}
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
  );
}
