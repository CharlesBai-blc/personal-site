/**
 * HeroSection Component
 * Full-screen hero section with blinds animation and background zoom effect
 *
 * Reasons for separate file:
 * 1. Complexity: Contains complex animation logic (blinds, zoom, staggered timing)
 * 2. Reusability: Can be reused in other landing pages or promotional sections
 */

"use client";

interface HeroSectionProps {
  isLoaded: boolean;
  backgroundImage?: string;
}

const BLIND_COUNT = 4;
const BLIND_DELAY_INCREMENT = 150; // milliseconds

export default function HeroSection({
  isLoaded,
  backgroundImage = "/bg3.jpg",
}: HeroSectionProps) {
  return (
    <section className="h-screen w-full relative overflow-hidden bg-black">
      {/* Full background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          transform: isLoaded ? "scale(1)" : "scale(1.2)",
          transformOrigin: "center center",
        }}
      />

      {/* Four black blinds that move up to reveal the image */}
      <div className="absolute inset-0 flex">
        {Array.from({ length: BLIND_COUNT }).map((_, index) => (
          <div
            key={index}
            className="w-1/4 h-full bg-black transition-transform duration-1000 ease-out"
            style={{
              transform: isLoaded ? "translateY(-100%)" : "translateY(0)",
              transformOrigin: "bottom center",
              transitionDelay: `${index * BLIND_DELAY_INCREMENT}ms`,
            }}
          />
        ))}
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div
          className="absolute top-2/5 -translate-y-1/2"
          style={{
            left: "55%",
            fontFamily: "var(--font-space-mono)",
          }}
        >
          <div className="text-black font-bold uppercase leading-tight">
            <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl">CHARLES</div>
            <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl">BAI</div>
          </div>
        </div>
      </div>
    </section>
  );
}
