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
    default: "bg-neon-1 text-bg hover:bg-neon-3 shadow-glow",
    neon: "bg-transparent border border-neon-1 text-neon-1 hover:bg-neon-1 hover:text-bg shadow-glow hover:shadow-[0_0_32px_var(--neon-1)]",
    ghost: "bg-transparent text-text hover:bg-white/10"
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        size={size}
        className={cn(baseClasses, variantClasses[variant], className)}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
}
