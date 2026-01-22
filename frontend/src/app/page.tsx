"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../components/Logo";
import GitHubHeatmap from "../components/GitHubHeatmap";

interface NavItemProps {
  label: string;
  href: string;
  delay: string;
  isLoaded: boolean;
}

function NavItem({ label, href, delay, isLoaded }: NavItemProps) {
  return (
    <Link
      href={href}
      className={`relative overflow-hidden cursor-pointer transition-all duration-1000 ease-out block ${
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
    </Link>
  );
}

interface SocialLinkProps {
  label: string;
  href: string;
  delay: string;
  isLoaded: boolean;
}

function SocialLink({ label, href, delay, isLoaded }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 transition-all duration-1000 ease-out ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
      style={{ transitionDelay: delay }}
    >
      <span className="text-xs text-white font-mono font-bold uppercase" style={{ fontFamily: 'var(--font-space-mono)' }}>
        {label}
      </span>
      <Image src="/arrowtr.svg" alt="" width={12} height={12} />
    </a>
  );
}

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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const socialLinks = [
    { label: "LINKEDIN", href: "https://linkedin.com" },
    { label: "GITHUB", href: "https://github.com" },
  ];

  return (
    <div className="min-h-screen overflow-y-scroll">
      <Logo />

      {/* Centered Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-16">
          <NavItem label="about" href="/about" delay="500ms" isLoaded={isLoaded} />
          <NavItem label="portfolio" href="/portfolio" delay="600ms" isLoaded={isLoaded} />
          <NavItem label="blog" href="/blog" delay="700ms" isLoaded={isLoaded} />
          <NavItem label="contact" href="/contact" delay="800ms" isLoaded={isLoaded} />
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

      {/* Social Links - Bottom Left */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4" style={{ bottom: '3.25rem', left: '1.5rem' }}>
        {socialLinks.map((link, index) => (
          <SocialLink
            key={link.label}
            label={link.label}
            href={link.href}
            delay={`${1200 + index * 100}ms`}
            isLoaded={isLoaded}
          />
        ))}
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

        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          {/* Content will go here */}
        </div>
      </section>

      {/* Section 1 - GitHub Heatmap and Projects */}
      <section className="min-h-screen flex items-start justify-center px-4 pt-16 pb-8 bg-black overflow-y-auto relative">
        <div className="text-center max-w-6xl w-full space-y-10 mt-8">
          <GitHubHeatmap username="CharlesBai-blc" />

          {/* Current Projects/Interests */}
          <div className="space-y-6">
            <h2 className="text-3xl font-light text-white font-display tracking-tight">
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
    </div>
  );
}
