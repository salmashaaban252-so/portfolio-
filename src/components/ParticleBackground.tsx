import { Canvas } from "@react-three/fiber";
import { useMemo } from "react";
import { Points, PointMaterial } from "@react-three/drei";

import React from "react";

export default function ParticleBackground() {
  return (
    <div
      className="tech-bg pointer-events-none absolute inset-0 -z-10"
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1600 900"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0" stopColor="#062035" stopOpacity="0.0" />
            <stop offset="1" stopColor="#001220" stopOpacity="0.18" />
          </linearGradient>
          <linearGradient id="g2" x1="0" x2="1">
            <stop offset="0" stopColor="#0b1220" stopOpacity="0.0" />
            <stop offset="1" stopColor="#02102a" stopOpacity="0.18" />
          </linearGradient>
        </defs>

        <rect width="100%" height="100%" fill="#020617" />

        {/* subtle soft gradient overlay */}
        <rect width="100%" height="100%" fill="url(#g1)" />

        {/* faint grid lines */}
        <g stroke="#60a5fa" strokeOpacity="0.04" strokeWidth="1">
          {Array.from({ length: 26 }).map((_, i) => (
            <line
              key={`h-${i}`}
              x1={0}
              y1={(i * 900) / 25}
              x2={1600}
              y2={(i * 900) / 25}
            />
          ))}
          {Array.from({ length: 40 }).map((_, i) => (
            <line
              key={`v-${i}`}
              x1={(i * 1600) / 39}
              y1={0}
              x2={(i * 1600) / 39}
              y2={900}
            />
          ))}
        </g>

        {/* circuit-inspired lines */}
        <g stroke="#38bdf8" strokeOpacity="0.06" strokeWidth="1.5" fill="none">
          <path d="M120 200 H300 V240 H520" strokeLinecap="round" />
          <path d="M400 60 H560 V140 H760" strokeLinecap="round" />
          <path d="M980 180 H1200 V210 H1340" strokeLinecap="round" />
          <path d="M200 640 H420 V680 H600" strokeLinecap="round" />
          <path d="M1100 520 H1280 V560 H1480" strokeLinecap="round" />
        </g>

        {/* subtle nodes */}
        <g fill="#60a5fa" fillOpacity="0.06">
          <circle cx="520" cy="220" r="3" />
          <circle cx="760" cy="120" r="3" />
          <circle cx="1240" cy="260" r="3" />
          <circle cx="420" cy="700" r="3" />
        </g>

        {/* soft glow accents */}
        <radialGradient id="glow" cx="0.3" cy="0.2" r="0.6">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </radialGradient>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#g2)" />
        <ellipse cx="400" cy="140" rx="420" ry="180" fill="url(#glow)" />
      </svg>
    </div>
  );
}
