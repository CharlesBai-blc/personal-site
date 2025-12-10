import React from "react";

interface KintsugiBulletProps {
  size?: number | string; // Allow custom sizing (e.g., '24px' or '1.5em')
  className?: string; // Allow passing CSS classes
}

const KintsugiBullet: React.FC<KintsugiBulletProps> = ({
  size = "1.2em", // Default size relative to text font size
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24" // Standard icon viewbox
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // Center the icon vertically relative to the text line
      style={{ verticalAlign: "-0.2em", shapeRendering: "geometricPrecision" }}
      className={className}
    >
      <defs>
        {/* 1. THE 3D MARBLE GRADIENT
          Offsetting cx/cy and fx/fy creates the spherical 3D lighting effect.
        */}
        <radialGradient
          id="marble3D"
          cx="35%"
          cy="35%"
          r="65%"
          fx="30%"
          fy="30%"
        >
          <stop offset="0%" stopColor="#FFFFFF" /> {/* Bright highlight */}
          <stop offset="70%" stopColor="#E8E8E8" /> {/* Midtone stone */}
          <stop offset="100%" stopColor="#B0B0B0" /> {/* Shadow edge */}
        </radialGradient>

        {/* 2. THE METALLIC GOLD GRADIENT
          Makes the cracks look like real gold leaf, not just flat yellow color.
        */}
        <linearGradient id="goldLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="10%" stopColor="#C9A63C" /> {/* Darker Gold */}
          <stop offset="45%" stopColor="#FFD700" /> {/* Shiny Gold Hit */}
          <stop offset="80%" stopColor="#B4922B" /> {/* Darker Gold */}
        </linearGradient>

        {/* Optional subtle drop shadow to lift the ball off the page slightly */}
        <filter id="subtleShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="1" stdDeviation="0.5" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* The Marble Sphere Base */}
      <circle
        cx="12"
        cy="12"
        r="11"
        fill="url(#marble3D)"
        filter="url(#subtleShadow)"
      />

      {/* 3. THE JAGGED CRACKS
        Using 'L' (Line to) instead of curves creates sharp, broken fractures.
        strokeLinejoin="bevel" makes the corners sharp.
      */}
      <g
        stroke="url(#goldLeaf)"
        strokeLinejoin="bevel"
        strokeLinecap="round"
        fill="none"
      >
        {/* Main jagged fissure across the sphere */}
        <path
          d="M 7 21 L 8.5 18 L 7.5 16 L 10 13 L 9 10 L 12 8 L 14 9 L 16 6 L 17 7"
          strokeWidth="1.1"
        />
        {/* Branching crack splitting off the main one */}
        <path d="M 10 13 L 13 14 L 15 12 L 18 13" strokeWidth="0.9" />
        {/* Smaller isolated fracture */}
        <path d="M 4 14 L 6 13 L 5 11" strokeWidth="0.7" />
      </g>
    </svg>
  );
};

export default KintsugiBullet;
