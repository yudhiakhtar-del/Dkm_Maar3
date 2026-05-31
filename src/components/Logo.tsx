import React from 'react';

interface LogoProps {
  className?: string;
  size?: number | string;
}

export default function Logo({ className = '', size = 120 }: LogoProps) {
  return (
    <svg
      id="masjid-maar3-official-logo"
      className={`${className} select-none`}
      width={size}
      height={size}
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Top text path - clockwise arch */}
        <path
          id="topTextPath"
          d="M 32,120 A 88,88 0 0,1 208,120"
          fill="none"
        />
        {/* Bottom text path - counter-clockwise bowl */}
        <path
          id="bottomTextPath"
          d="M 28,120 A 92,92 0 0,0 212,120"
          fill="none"
        />
        {/* Star Orange Gradient */}
        <linearGradient id="starOrangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        {/* Golden Border Gradient */}
        <linearGradient id="goldBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d97706" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
      </defs>

      {/* Outer subtle gold circular outline */}
      <circle cx="120" cy="120" r="117" stroke="url(#goldBorderGrad)" strokeWidth="1.5" />
      <circle cx="120" cy="120" r="114" stroke="#e2e8f0" strokeWidth="0.5" />

      {/* Main outer ring containing text (Rich DKM green) */}
      <circle cx="120" cy="120" r="110" fill="#15803d" stroke="#ffffff" strokeWidth="2" />

      {/* Stars on left and right borders */}
      {/* Left Star at angles */}
      <polygon
        points="22,120 24.5,121.5 24,124.5 26.5,122.5 29,124.5 28,121.5 30.5,120 27.5,119.5 26.5,116.5 25.5,119.5"
        fill="#ffffff"
        transform="translate(-4, -1)"
      />
      
      {/* Right Star */}
      <polygon
        points="218,120 220.5,121.5 220,124.5 222.5,122.5 225,124.5 224,121.5 226.5,120 223.5,119.5 222.5,116.5 221.5,119.5"
        fill="#ffffff"
        transform="translate(-4, -1)"
      />

      {/* Curved Texts with clean sans fonts */}
      <text className="fill-white font-sans text-[11px] font-extrabold uppercase tracking-[0.16em]">
        <textPath href="#topTextPath" startOffset="50%" textAnchor="middle">
          DEWAN KEMAKMURAN MASJID
        </textPath>
      </text>

      <text className="fill-white font-sans text-[9px] font-extrabold uppercase tracking-[0.12em]">
        <textPath href="#bottomTextPath" startOffset="50%" textAnchor="middle">
          PERUMAHAN ORCHID GREEN PARK
        </textPath>
      </text>

      {/* Inner Area circle border */}
      <circle cx="120" cy="120" r="82" fill="#22c55e" stroke="#ffffff" strokeWidth="2.5" />

      {/* Double Overlapping Squares (8-pointed Islamic Star) with Orange Fill */}
      {/* Square 1 */}
      <rect
        x="72"
        y="72"
        width="96"
        height="96"
        fill="url(#starOrangeGrad)"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Square 2 (rotated 45 degrees) */}
      <rect
        x="72"
        y="72"
        width="96"
        height="96"
        fill="url(#starOrangeGrad)"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeLinejoin="round"
        transform="rotate(45, 120, 120)"
      />

      {/* Central Circle over middle - recreating green center with Moon, Star & Mosque */}
      <circle cx="120" cy="120" r="39" fill="#22c55e" stroke="#ffffff" strokeWidth="2.5" />

      {/* Crescent Moon pointing top-right */}
      <path
        d="M 119,95 A 23,23 0 1,0 144,120 A 18,18 0 1,1 119,95"
        fill="#ffffff"
      />

      {/* Small Star near the crescent moon pointing top right */}
      <polygon
        points="137,97 138,99.5 141,99.5 138.5,101 139.5,104 137,102 134.5,104 135.5,101 133,99.5 136,99.5"
        fill="#ffffff"
      />

      {/* Mosque Dome inside the Crescent */}
      {/* Mosque Base */}
      <path
        d="M 114,124 L 126,124 L 126,121 C 126,117 123,115 120,115 C 117,115 114,117 114,121 Z"
        fill="#ffffff"
      />
      {/* Minaret tower */}
      <rect x="119.2" y="104" width="1.6" height="12" fill="#ffffff" />
      {/* Small minaret cone tip */}
      <polygon points="118.4,104 121.6,104 120,101" fill="#ffffff" />
    </svg>
  );
}
