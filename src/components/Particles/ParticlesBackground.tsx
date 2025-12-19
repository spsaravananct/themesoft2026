"use client";

import { useState, useEffect, useMemo } from "react";

// Deterministic random number generator using seed
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export default function ParticlesBackground() {
  const [particleCount, setParticleCount] = useState(80);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const updateParticleCount = () => {
      setParticleCount(window.innerWidth < 768 ? 40 : 80);
    };

    updateParticleCount();
    window.addEventListener("resize", updateParticleCount);
    return () => window.removeEventListener("resize", updateParticleCount);
  }, []);

  // Generate deterministic positions based on index to avoid hydration mismatch
  const particles = useMemo(() => {
    return Array.from({ length: particleCount }).map((_, i) => {
      const seed = i * 1000;
      return {
        left: seededRandom(seed) * 100,
        top: seededRandom(seed + 1) * 100,
        delay: seededRandom(seed + 2) * 3,
        duration: 3 + seededRandom(seed + 3) * 2,
      };
    });
  }, [particleCount]);

  const lines = useMemo(() => {
    return Array.from({ length: Math.floor(particleCount / 4) }).map((_, i) => {
      const seed = i * 2000;
      return {
        x1: seededRandom(seed) * 100,
        y1: seededRandom(seed + 1) * 100,
        x2: seededRandom(seed + 2) * 100,
        y2: seededRandom(seed + 3) * 100,
      };
    });
  }, [particleCount]);

  // Only render particles after client-side hydration
  if (!isMounted) {
    return <div className="absolute inset-0 z-0" />;
  }

  // Create CSS-based particle effect as fallback
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-float"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>
      {/* Connecting lines effect */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0066CC" />
            <stop offset="100%" stopColor="#FF6B35" />
          </linearGradient>
        </defs>
        {lines.map((line, i) => (
          <line
            key={i}
            x1={`${line.x1}%`}
            y1={`${line.y1}%`}
            x2={`${line.x2}%`}
            y2={`${line.y2}%`}
            stroke="url(#lineGradient)"
            strokeWidth="0.5"
            opacity="0.3"
          />
        ))}
      </svg>
    </div>
  );
}
