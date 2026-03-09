"use client";

import { useRef, useState, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  spotlight?: boolean;
  spotlightColor?: string;
}

export default function GlassCard({ 
  children, 
  className = "", 
  hover = true,
  spotlight = true,
  spotlightColor = "rgba(99, 230, 255, 0.15)" // neon-1 equivalent
}: GlassCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || !spotlight) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative rounded-3xl border border-white/10 bg-[var(--glass)]",
        "backdrop-blur-xl backdrop-saturate-150",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_8px_40px_-10px_rgba(103,232,249,0.25),inset_0_1px_0_rgba(255,255,255,0.1)]",
        "transition-all duration-500 ease-out",
        "hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_16px_64px_-10px_rgba(103,232,249,0.4),inset_0_1px_0_rgba(255,255,255,0.15)]",
        "overflow-hidden group",
        hover && "hover-lift interactive-scale",
        className
      )}
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 50%, rgba(103,232,249,0.02) 100%)",
      }}
    >
      {/* Spotlight Overlay */}
      {spotlight && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
          style={{
            opacity: isFocused ? 1 : opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
          }}
        />
      )}

      {/* Enhanced inner neon ring with gradient */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-accent/20 transition-all duration-500 group-hover:ring-accent/40" />
      
      {/* Subtle inner highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-50" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
