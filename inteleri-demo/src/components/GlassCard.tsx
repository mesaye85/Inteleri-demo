import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-3xl border border-white/10 bg-[var(--glass)]",
        "backdrop-blur-xl backdrop-saturate-150",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_8px_40px_-10px_rgba(103,232,249,0.25),inset_0_1px_0_rgba(255,255,255,0.1)]",
        "transition-all duration-500 ease-out",
        "hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_16px_64px_-10px_rgba(103,232,249,0.4),inset_0_1px_0_rgba(255,255,255,0.15)]",
        hover && "hover-lift neon-glow interactive-scale",
        className
      )}
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 50%, rgba(103,232,249,0.02) 100%)",
        boxShadow: "0 0 0 1px rgba(255,255,255,0.04), 0 8px 40px -10px rgba(103,232,249,0.25), inset 0 1px 0 rgba(255,255,255,0.1)"
      }}
    >
      {/* Enhanced inner neon ring with gradient */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-accent/20 transition-all duration-500 hover:ring-accent/40" />
      {/* Subtle inner highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-50" />
      {children}
    </div>
  );
}
