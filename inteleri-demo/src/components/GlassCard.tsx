"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
  const divRef = React.useRef<HTMLDivElement>(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = React.useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || !hover) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    if (hover) setOpacity(1);
  };

  const handleMouseLeave = () => {
    if (hover) setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[var(--panel)]",
        "backdrop-blur-2xl backdrop-saturate-150",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_4px_16px_-4px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)]",
        "transition-all duration-500 cubic-bezier(0.2, 0.8, 0.2, 1)",
        "hover:border-white/[0.12] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_12px_32px_-8px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)]",
        hover && "group hover:-translate-y-1 hover:shadow-cyan-500/10",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />
      {/* Enhanced inner neon ring with gradient */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/5 group-hover:ring-white/10 transition-colors duration-500" />

      {/* Subtle inner highlight -> Changed to a softer top-down fade */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent opacity-100" />

      {/* Content wrapper */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
}

