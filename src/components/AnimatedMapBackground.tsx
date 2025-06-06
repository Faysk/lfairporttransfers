'use client';

export default function AnimatedMapBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0a0a0a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>

        <pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse">
          <path d="M 5 0 L 0 0 0 5" fill="none" stroke="#2a2a2a" strokeWidth="0.1" />
        </pattern>

        <radialGradient id="circleGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#666" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#222" stopOpacity="0.1" />
        </linearGradient>

        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="grain" x="-50%" y="-50%" width="200%" height="200%">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise" />
          <feColorMatrix type="saturate" values="0" />
          <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
        </filter>
      </defs>

      <rect width="100" height="100" fill="url(#bgGradient)" />
      <rect width="100" height="100" fill="transparent" filter="url(#grain)" opacity="0.035" />
      <rect width="100" height="100" fill="url(#grid)" opacity="0.05" />

      {/* <circle cx="20" cy="25" r="15" fill="url(#circleGradient)" filter="url(#glow)" />
      <circle cx="80" cy="65" r="20" fill="url(#circleGradient)" filter="url(#glow)" />
      <circle cx="50" cy="50" r="30" fill="url(#circleGradient)" filter="url(#glow)" />
      <circle cx="70" cy="20" r="10" fill="url(#circleGradient)" filter="url(#glow)" />
      <circle cx="35" cy="75" r="14" fill="url(#circleGradient)" filter="url(#glow)" /> */}

      <g stroke="url(#roadGradient)" fill="none">
        <path id="path1" d="M 5 20 C 25 25, 35 15, 55 20 S 85 30, 95 25" strokeWidth="0.25" />
        <path id="path2" d="M 10 80 C 30 70, 50 90, 70 80 S 90 70, 100 75" strokeWidth="0.25" />
        <path id="path3" d="M 0 50 Q 20 45, 40 50 T 100 50" strokeWidth="0.2" />
        <path id="path4" d="M -20 50 Q 50 15, 120 10" strokeWidth="0.2" />
        <path id="path5" d="M 15 60 Q 35 65, 55 60 T 95 60" strokeWidth="0.2" />
        <path id="path6" d="M 0 30 Q 25 35, 50 30 Q 75 25, 100 30" strokeWidth="0.15" />
        <path id="path7" d="M 10 10 Q 20 20, 40 10 Q 60 0, 90 10" strokeWidth="0.15" />
        <path id="path8" d="M 20 95 Q 50 85, 80 95" strokeWidth="0.2" />
        <path id="path9" d="M 5 5 Q 20 10, 35 5 T 65 5 T 95 5" strokeWidth="0.1" />
        <path id="path10" d="M 0 0 C 20 20, 40 10, 60 30 S 90 50, 100 40" strokeWidth="0.15" />
        <path id="path11" d="M 100 100 C 80 85, 60 95, 40 80 S 10 60, 0 70" strokeWidth="0.15" />
      </g>

      {[...Array(7)].map((_, i) => (
        <rect
          key={`car-forward-${i}`}
          width="0.15"
          height="0.05"
          rx="0.03"
          fill="#FFD700"
          opacity="0.3"
        >
          <animateMotion dur={`${12 + i * 2}s`} repeatCount="indefinite" begin={`${i * 1}s`} rotate="auto">
            <mpath href={`#path${(i % 11) + 1}`} />
          </animateMotion>
        </rect>
      ))}

      {[...Array(7)].map((_, i) => (
        <rect
          key={`car-reverse-${i}`}
          width="0.15"
          height="0.05"
          rx="0.03"
          fill="#FFD700"
          opacity="0.3"
        >
          <animateMotion dur={`${12 + i * 2}s`} repeatCount="indefinite" begin={`${i * 1.5}s`} rotate="auto">
            <mpath href={`#path${(i % 11) + 1}`} />
          </animateMotion>
        </rect>
      ))}
    </svg>
  );
}
