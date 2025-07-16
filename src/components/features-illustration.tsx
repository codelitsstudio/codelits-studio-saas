'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function FeaturesIllustration() {
  const containerRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.fromTo(
      '.satellite-card',
      { autoAlpha: 0, scale: 0.8 },
      { autoAlpha: 1, scale: 1, duration: 0.7, ease: 'back.out(1.7)', stagger: 0.2 }
    )
      .fromTo(
        '.feature-path',
        { strokeDashoffset: 100, autoAlpha: 0 },
        { strokeDashoffset: 0, autoAlpha: 1, duration: 1, ease: 'power2.inOut' },
        '-=0.5'
      );
  }, []);

  const centerX = 300;
  const centerY = 225;
  const radius = 150;

  // 5 satellites spaced evenly every 72 degrees
  const satellites = [
    { id: 'app-management', angle: 0 },
    { id: 'subscriptions', angle: 72 },
    { id: 'analytics', angle: 144 },
    { id: 'team', angle: 216 },
    { id: 'reports', angle: 288 },
  ];

  function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
    const angleRad = (angleDeg - 90) * (Math.PI / 180.0);
    return {
      x: cx + r * Math.cos(angleRad),
      y: cy + r * Math.sin(angleRad),
    };
  }

  const logoUrl = '/images/logo.png'; // <-- Replace with your actual logo path

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <svg
        ref={containerRef}
        viewBox="0 0 600 450"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <defs>
          <radialGradient id="feature-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--primary) / 0.15)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Background Glow */}
        <circle cx={centerX} cy={centerY} r="200" fill="url(#feature-glow)" />

        {/* Connecting Lines (below logo) */}
        {satellites.map(({ angle }, idx) => {
          const satPos = polarToCartesian(centerX, centerY, radius, angle);
          return (
            <path
              key={idx}
              className="feature-path"
              d={`M ${centerX} ${centerY} Q ${(centerX + satPos.x) / 2} ${(centerY + satPos.y) / 2 - 40} ${satPos.x} ${satPos.y}`}
              fill="none"
              stroke="hsl(var(--border))"
              strokeWidth="1"
              strokeDasharray="100"
            />
          );
        })}

        {/* Center Logo (above lines) */}
        <image
          href={logoUrl}
          x={centerX - 25}
          y={centerY - 25}
          width="50"
          height="50"
          style={{ pointerEvents: 'none' }}
          preserveAspectRatio="xMidYMid meet"
        />

        {/* Satellite Cards */}
        {satellites.map(({ id, angle }) => {
          const { x, y } = polarToCartesian(centerX, centerY, radius, angle);
          const translateX = x - 50; // center horizontally for 100 width
          const translateY = y - 30; // center vertically for 60 height

          switch (id) {
            case 'app-management':
              return (
                <g key={id} className="satellite-card" transform={`translate(${translateX}, ${translateY})`}>
                  <rect width="100" height="60" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                  <text x="10" y="20" fontSize="10" fontWeight="bold" fill="hsl(var(--foreground))">App Management</text>
                  <g transform="translate(15, 30)">
                    <rect x="0" y="0" width="15" height="15" rx="3" fill="hsl(var(--primary)/0.5)" />
                    <rect x="20" y="0" width="15" height="15" rx="3" fill="hsl(var(--muted))" />
                    <rect x="40" y="0" width="15" height="15" rx="3" fill="hsl(var(--muted))" />
                  </g>
                </g>
              );
            case 'subscriptions':
              return (
                <g key={id} className="satellite-card" transform={`translate(${translateX}, ${translateY})`}>
                  <rect width="120" height="80" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                  <text x="10" y="20" fontSize="10" fontWeight="bold" fill="hsl(var(--foreground))">Subscriptions</text>
                  <g transform="translate(15, 35)">
                    <circle cx="8" cy="8" r="8" fill="hsl(var(--muted))" />
                    <text x="25" y="12" fontSize="9" fill="hsl(var(--muted-foreground))">Pro Plan</text>
                  </g>
                  <g transform="translate(15, 55)">
                    <circle cx="8" cy="8" r="8" fill="hsl(var(--muted))" />
                    <text x="25" y="12" fontSize="9" fill="hsl(var(--muted-foreground))">Team Members</text>
                  </g>
                </g>
              );
            case 'analytics':
              return (
                <g key={id} className="satellite-card" transform={`translate(${translateX}, ${translateY})`}>
                  <rect width="100" height="60" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                  <text x="10" y="20" fontSize="10" fontWeight="bold" fill="hsl(var(--foreground))">Analytics</text>
                  <g transform="translate(15, 30)">
                    <rect x="0" y="10" width="8" height="10" rx="2" fill="hsl(var(--primary)/0.3)" />
                    <rect x="12" y="5" width="8" height="15" rx="2" fill="hsl(var(--primary)/0.6)" />
                    <rect x="24" y="0" width="8" height="20" rx="2" fill="hsl(var(--primary))" />
                  </g>
                </g>
              );
            case 'team':
              return (
                <g key={id} className="satellite-card" transform={`translate(${translateX}, ${translateY})`}>
                  <rect width="100" height="60" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                  <text x="10" y="20" fontSize="10" fontWeight="bold" fill="hsl(var(--foreground))">Team</text>
                  <g transform="translate(15, 30)">
                    <circle cx="10" cy="10" r="10" fill="hsl(var(--primary)/0.6)" />
                    <circle cx="35" cy="10" r="10" fill="hsl(var(--primary)/0.9)" />
                    <circle cx="60" cy="10" r="10" fill="hsl(var(--primary)/0.3)" />
                  </g>
                </g>
              );
            case 'reports':
              return (
                <g key={id} className="satellite-card" transform={`translate(${translateX}, ${translateY})`}>
                  <rect width="100" height="60" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                  <text x="10" y="20" fontSize="10" fontWeight="bold" fill="hsl(var(--foreground))">Reports</text>
                  <g transform="translate(10, 30)">
                    <rect x="0" y="0" width="50" height="8" rx="4" fill="hsl(var(--primary))" />
                    <rect x="0" y="15" width="30" height="8" rx="4" fill="hsl(var(--primary)/0.7)" />
                    <rect x="40" y="15" width="15" height="8" rx="4" fill="hsl(var(--primary)/0.4)" />
                  </g>
                </g>
              );
            default:
              return null;
          }
        })}
      </svg>
    </div>
  );
}
