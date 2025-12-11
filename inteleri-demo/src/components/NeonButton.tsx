"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "neon" | "ghost";
  size?: "sm" | "lg" | "default";
  children: React.ReactNode;
  className?: string;
}

export default function NeonButton({
  variant = "neon",
  size = "default",
  children,
  className = "",
  ...props
}: NeonButtonProps) {
  const baseClasses = "relative overflow-hidden transition-all duration-300";

  const variantClasses = {
    default: "bg-gradient-to-r from-neon-1 to-neon-2 text-bg hover:from-neon-2 hover:to-neon-3 shadow-[0_0_20px_rgba(99,230,255,0.3)] hover:shadow-[0_0_32px_rgba(99,230,255,0.5)]",
    neon: "bg-transparent border border-neon-1/50 text-neon-1 hover:bg-gradient-to-r hover:from-neon-1 hover:to-neon-2 hover:text-bg hover:border-transparent shadow-[0_0_16px_rgba(99,230,255,0.2)] hover:shadow-[0_0_32px_rgba(99,230,255,0.4)] backdrop-blur-sm",
    ghost: "bg-transparent text-text hover:bg-white/10 hover:text-neon-1"
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button
        size={size}
        className={cn(baseClasses, variantClasses[variant], className)}
        {...props}
      >
        {/* Shimmer effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

        <span className="relative z-10">{children}</span>
        {/* Subtle inner glow effect for neon variant */}
        {variant === 'neon' && (
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-neon-1/10 via-neon-2/10 to-neon-1/10 rounded-md" />
        )}
      </Button>
    </motion.div>
  );
}
