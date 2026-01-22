"use client";

import { useEffect, useState } from "react";
import Logo from "../../components/Logo";
import Nav from "../../components/Nav";

export default function TestPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen overflow-y-scroll">
      <Logo />
      <Nav />

      {/* Hero Section - Full Screen with Blinds Animation */}
      <section className="h-screen w-full relative overflow-hidden bg-black">
        {/* Full background image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out"
          style={{
            backgroundImage: "url('/bg2.jpg')",
            backgroundSize: isLoaded ? "100% 100%" : "110% 110%",
            backgroundPosition: "center center",
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
