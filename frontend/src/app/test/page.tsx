"use client";

import { useEffect, useState } from "react";
import Logo from "../../components/Logo";

interface NavItemProps {
  label: string;
  delay: string;
  isLoaded: boolean;
}

function NavItem({ label, delay, isLoaded }: NavItemProps) {
  return (
    <div
      className={`relative overflow-hidden cursor-pointer transition-all duration-1000 ease-out ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
      }`}
      style={{ transitionDelay: delay }}
    >
      <div className="group">
        <div className="text-sm text-black font-mono font-bold uppercase transition-transform duration-500 ease-out group-hover:-translate-y-full" style={{ fontFamily: 'var(--font-space-mono)' }}>
          {label}
        </div>
        <div className="text-sm text-black font-mono font-bold uppercase transition-transform duration-500 ease-out translate-y-full group-hover:translate-y-0 absolute inset-0" style={{ fontFamily: 'var(--font-space-mono)' }}>
          {label}
        </div>
      </div>
    </div>
  );
}

export default function TestPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen overflow-y-scroll">
      <Logo />

      {/* Centered Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-16">
          <NavItem label="about" delay="500ms" isLoaded={isLoaded} />
          <NavItem label="portfolio" delay="600ms" isLoaded={isLoaded} />
          <NavItem label="blog" delay="700ms" isLoaded={isLoaded} />
          <NavItem label="contact" delay="800ms" isLoaded={isLoaded} />
        </div>
      </nav>

      {/* Location Info - Top Right */}
      <div className="fixed top-6 right-6 z-50 text-right" style={{ top: '1.5rem', right: '2.25rem' }}>
        <div className="text-xs text-black font-mono font-bold uppercase leading-relaxed" style={{ fontFamily: 'var(--font-space-mono)' }}>
          <div
            className={`transition-all duration-1000 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            ITHACA, NY
          </div>
          <div
            className={`transition-all duration-1000 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            FREDERICK, MD
          </div>
        </div>
      </div>

      {/* Hero Section - Full Screen with Blinds Animation */}
      <section className="h-screen w-full relative overflow-hidden bg-black">
        {/* Full background image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out"
          style={{
            backgroundImage: "url('/bg3.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            transform: isLoaded ? "scale(1)" : "scale(1.2)",
            transformOrigin: "center center",
          }}
        />

        {/* Four black blinds that move up to reveal the image */}
        <div className="absolute inset-0 flex">
          {/* Blind 1 - Leftmost (starts first) */}
          <div
            className="w-1/4 h-full bg-black transition-transform duration-1000 ease-out"
            style={{
              transform: isLoaded ? "translateY(-100%)" : "translateY(0)",
              transformOrigin: "bottom center",
              transitionDelay: "0ms",
            }}
          />

          {/* Blind 2 */}
          <div
            className="w-1/4 h-full bg-black transition-transform duration-1000 ease-out"
            style={{
              transform: isLoaded ? "translateY(-100%)" : "translateY(0)",
              transformOrigin: "bottom center",
              transitionDelay: "150ms",
            }}
          />

          {/* Blind 3 */}
          <div
            className="w-1/4 h-full bg-black transition-transform duration-1000 ease-out"
            style={{
              transform: isLoaded ? "translateY(-100%)" : "translateY(0)",
              transformOrigin: "bottom center",
              transitionDelay: "300ms",
            }}
          />

          {/* Blind 4 - Rightmost (starts last) */}
          <div
            className="w-1/4 h-full bg-black transition-transform duration-1000 ease-out"
            style={{
              transform: isLoaded ? "translateY(-100%)" : "translateY(0)",
              transformOrigin: "bottom center",
              transitionDelay: "450ms",
            }}
          />
        </div>

        {/* Content overlay - can be added later */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          {/* Content will go here */}
        </div>
      </section>

      {/* Additional scrollable content sections */}
      <section className="min-h-screen flex items-center justify-center px-4 bg-foreground/5">
        <div className="text-center max-w-4xl">
          <h2 className="text-4xl font-light text-foreground font-display tracking-tight mb-4">
            Scroll to see more
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Additional content sections can be added here
          </p>
        </div>
      </section>
    </div>
  );
}
