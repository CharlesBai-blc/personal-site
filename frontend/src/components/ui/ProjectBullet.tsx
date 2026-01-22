/**
 * ProjectBullet Component
 * Displays project information with hover tooltip and kintsugi styling
 *
 * Reasons for separate file:
 * 1. Complexity: Contains state management, hover interactions, and complex styling
 * 2. Reusability: Can be used in portfolio page, project showcases, or other contexts
 */

"use client";

import { useState } from "react";

interface ProjectBulletProps {
  title: string;
  description: string;
  link?: string;
}

export default function ProjectBullet({
  title,
  description,
  link,
}: ProjectBulletProps) {
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
        <span className="font-light text-white text-sm tracking-wide">
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
          <p className="relative z-10 text-xs text-white/90 font-light leading-relaxed">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}
