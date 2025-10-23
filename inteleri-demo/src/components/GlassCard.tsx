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
        "group rounded-2xl p-6 transition-all duration-300 glass gradient-border",
        hover && "hover:scale-[1.02] hover:shadow-glow",
        className
      )}
      style={{
        background: "var(--panel)",
        backdropFilter: "blur(12px)",
        border: "1px solid var(--panel-border)",
        boxShadow: "0 0 24px rgba(99,230,255,0.15)"
      }}
    >
      {children}
    </div>
  );
}
