'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const centerX = 250;
const centerY = 150; // Lowered for more compact height
const orbitRadius = 100; // Shrunk from 140
const outerOrbitRadius = 140; // Shrunk from 190

const round = (num: number, decimals = 3) => Number(num.toFixed(decimals));

const icons = [
  { key: 'user', angleOffset: 0, duration: 20, content: (
    <>
      <circle cx="0" cy="0" r="14" fill="hsl(var(--card))" stroke="hsl(var(--primary)/0.5)" strokeWidth="1.5" />
      <circle cx="0" cy="-4" r="3" fill="hsl(var(--primary)/0.5)" />
      <path d="M-6 5a6 4 0 0 1 12 0" fill="none" stroke="hsl(var(--primary)/0.5)" strokeWidth="1.5" />
    </>
  )},
  { key: 'analytics', angleOffset: 60, duration: 20, content: (
    <>
      <circle cx="0" cy="0" r="14" fill="hsl(var(--card))" stroke="hsl(var(--primary)/0.5)" strokeWidth="1.5" />
      <path d="M-6 4L-2 0L2 2L6 -3" fill="none" stroke="hsl(var(--primary)/0.5)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="-6" cy="4" r="1" fill="hsl(var(--primary)/0.5)" />
      <circle cx="-2" cy="0" r="1" fill="hsl(var(--primary)/0.5)" />
      <circle cx="2" cy="2" r="1" fill="hsl(var(--primary)/0.5)" />
      <circle cx="6" cy="-3" r="1" fill="hsl(var(--primary)/0.5)" />
    </>
  )},
  { key: 'settings', angleOffset: 120, duration: 20, content: (
    <>
      <circle cx="0" cy="0" r="14" fill="hsl(var(--card))" stroke="hsl(var(--primary)/0.5)" strokeWidth="1.5" />
      <circle cx="0" cy="0" r="3" fill="none" stroke="hsl(var(--primary)/0.5)" strokeWidth="1.5" />
      <path d="M0 -8v2M0 8v-2M8 0h-2M-8 0h2M5.5-5.5l-1.2 1.2M-5.5 5.5l1.2-1.2M-5.5-5.5l1.2 1.2M5.5 5.5l-1.2-1.2" stroke="hsl(var(--primary)/0.5)" strokeWidth="1.2" />
    </>
  )},
  { key: 'app', angleOffset: 180, duration: 20, content: (
    <>
      <circle cx="0" cy="0" r="14" fill="hsl(var(--card))" stroke="hsl(var(--primary)/0.5)" strokeWidth="1.5" />
      <rect x="-5" y="-5" width="3.5" height="3.5" fill="hsl(var(--primary)/0.5)" rx="0.7" />
      <rect x="1.5" y="-5" width="3.5" height="3.5" fill="hsl(var(--primary)/0.5)" rx="0.7" />
      <rect x="-5" y="1.5" width="3.5" height="3.5" fill="hsl(var(--primary)/0.5)" rx="0.7" />
      <rect x="1.5" y="1.5" width="3.5" height="3.5" fill="hsl(var(--primary)/0.5)" rx="0.7" />
    </>
  )},
  { key: 'billing', angleOffset: 240, duration: 20, content: (
    <>
      <circle cx="0" cy="0" r="14" fill="hsl(var(--card))" stroke="hsl(var(--primary)/0.5)" strokeWidth="1.5" />
      <path d="M0 -5Q-3.5-5-3.5-2.5Q-3.5 0 0 0Q3.5 0 3.5 2.5Q3.5 5 0 5" fill="none" stroke="hsl(var(--primary)/0.5)" strokeWidth="1.5" />
      <line x1="0" y1="-6.5" x2="0" y2="6.5" stroke="hsl(var(--primary)/0.5)" strokeWidth="1.2" />
    </>
  )},
  { key: 'support', angleOffset: 300, duration: 20, content: (
    <>
      <circle cx="0" cy="0" r="14" fill="hsl(var(--card))" stroke="hsl(var(--primary)/0.5)" strokeWidth="1.5" />
      <path d="M-6-3h12a2 2 0 012 2v3a2 2 0 01-2 2h-5l-3 2.5v-2.5h-4a2 2 0 01-2-2v-3a2 2 0 012-2z" fill="none" stroke="hsl(var(--primary)/0.5)" strokeWidth="1.3" />
    </>
  )},
];

const outerIcons = [
  { key: 'outer-machine', angleOffset: 0, content: (
    <>
      <circle cx="0" cy="0" r="12" fill="hsl(var(--card))" stroke="hsl(var(--primary)/0.5)" strokeWidth="1.4" />
      <rect x="-3" y="-6" width="6" height="12" rx="1" fill="none" stroke="hsl(var(--primary)/0.5)" strokeWidth="1.3" />
      <circle cx="0" cy="5" r="0.8" fill="hsl(var(--primary)/0.5)" />
    </>
  )},
  { key: 'outer-bulb', angleOffset: 120, content: (
    <>
      <circle cx="0" cy="0" r="12" fill="hsl(var(--card))" stroke="hsl(var(--primary)/0.5)" strokeWidth="1.4" />
      <path d="M-3 -1a3 3 0 016 0c0 1.5-1 2.5-2 3.5v1.5h-2v-1.5c-1-1-2-2-2-3.5z" fill="none" stroke="hsl(var(--primary)/0.5)" strokeWidth="1.4" />
      <rect x="-1" y="3.5" width="2" height="2.5" fill="none" stroke="hsl(var(--primary)/0.5)" strokeWidth="1.4" />
    </>
  )},
  { key: 'outer-laptop', angleOffset: 240, content: (
    <>
      <circle cx="0" cy="0" r="12" fill="hsl(var(--card))" stroke="hsl(var(--primary)/0.5)" strokeWidth="1.4" />
      <rect x="-5" y="-2.5" width="10" height="5" fill="none" stroke="hsl(var(--primary)/0.5)" strokeWidth="1.3" />
      <line x1="-6" y1="4" x2="6" y2="4" stroke="hsl(var(--primary)/0.5)" strokeWidth="1.3" />
    </>
  )},
];

export function HeroIllustration() {
    const svgRef = useRef<SVGSVGElement>(null);
       const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.icon-group', { scale: 0, opacity: 0 });
      gsap.set('.dotted-orbit', { strokeDashoffset: 1000, strokeDasharray: 4, opacity: 0 });
      gsap.set('.outer-dotted-orbit', { strokeDashoffset: 1000, strokeDasharray: 4, opacity: 0 });
      gsap.set('.central-hub', { opacity: 0, scale: 0.7 });

      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.to('.central-hub', { opacity: 1, scale: 1, duration: 0.6 })
        .to(['.dotted-orbit', '.outer-dotted-orbit'], {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
        }, '-=0.3')
        .to('.icon-group', {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          onComplete: () => setLoaded(true),  // Mark loaded at animation end
        }, '-=0.4');
    }, svgRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={`relative w-full max-w-xl h-[300px] md:h-[500px]  mx-auto ${loaded ? 'hero-loaded' : ''}`}>
      <style jsx>
        {`
        @keyframes rotate {0%{transform:rotate(0deg);}100%{transform:rotate(360deg);} }
        @keyframes rotate-reverse {0%{transform:rotate(360deg);}100%{transform:rotate(0deg);} }
        .orbit-group { animation: rotate 20s linear infinite; transform-origin: ${centerX}px ${centerY}px; }
        .outer-orbit-group { animation: rotate-reverse 12s linear infinite; transform-origin: ${centerX}px ${centerY}px; }
        .icon-group:hover { transform: scale(1.1); filter: drop-shadow(0 0 5px hsl(var(--primary))); transition: transform 0.3s ease; }
        .dotted-orbit, .outer-dotted-orbit { stroke: hsl(var(--primary)/0.4); stroke-width: 1.5; fill: none; stroke-dasharray: 4 6; }
      `}</style>

      <svg ref={svgRef} viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Light background circles */}
        <circle cx={centerX} cy={centerY} r={outerOrbitRadius + 15} fill="hsl(var(--primary)/0.05)" />
        <circle cx={centerX} cy={centerY} r="100" fill="hsl(var(--primary)/0.08)" />

        {/* Central hub */}
        <g className="central-hub">
          <rect x={centerX - 60} y={centerY - 45} width="120" height="90" rx="12" fill="hsl(var(--card))" stroke="hsl(var(--primary)/0.2)" strokeWidth="2" />
          <path d={`M${centerX - 45} ${centerY - 30}h90M${centerX - 45} ${centerY - 17}h60M${centerX - 45} ${centerY - 4}h70M${centerX - 45} ${centerY + 9}h45`} stroke="hsl(var(--primary)/0.1)" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Orbit circles */}
        <circle className="dotted-orbit" cx={centerX} cy={centerY} r={orbitRadius} />
        <circle className="outer-dotted-orbit" cx={centerX} cy={centerY} r={outerOrbitRadius} />

        {/* Rotating icons */}
        <g className="orbit-group">
          {icons.map(({ key, angleOffset, content }) => {
            const rad = (angleOffset * Math.PI) / 180;
            const x = round(centerX + orbitRadius * Math.cos(rad));
            const y = round(centerY + orbitRadius * Math.sin(rad));
            return (
              <g key={key} className="icon-group" transform={`translate(${x}, ${y})`}>
                {content}
              </g>
            );
          })}
        </g>
        <g className="outer-orbit-group">
          {outerIcons.map(({ key, angleOffset, content }) => {
            const rad = (angleOffset * Math.PI) / 180;
            const x = round(centerX + outerOrbitRadius * Math.cos(rad));
            const y = round(centerY + outerOrbitRadius * Math.sin(rad));
            return (
              <g key={key} className="icon-group" transform={`translate(${x}, ${y})`}>
                {content}
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}