"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import GlassCard from "./GlassCard";
import MethodologyTooltip from "./MethodologyTooltip";

interface MetricStatProps {
  title: string;
  value: string;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  description?: string;
  methodologyKey?: 'post_to_award_hours' | 'eta_accuracy_pct' | 'co2_intensity_kg_per_mi';
}

const MetricStat = React.memo(function MetricStat({ 
  title, 
  value, 
  trend = "neutral", 
  trendValue, 
  description,
  methodologyKey
}: MetricStatProps) {
  const getTrendIcon = () => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-emerald-300" />;
      case "down":
        return <TrendingDown className="w-4 h-4 text-rose-400" />;
      default:
        return <Minus className="w-4 h-4 text-muted" />;
    }
  };

  const getTrendColor = () => {
    switch (trend) {
      case "up":
        return "text-emerald-300";
      case "down":
        return "text-rose-400";
      default:
        return "text-muted";
    }
  };

  return (
    <GlassCard
      hover
      className={cn(
        "relative overflow-hidden text-left",
        "before:absolute before:inset-x-6 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-neon-1/60 before:to-transparent"
      )}
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-neon-1/10 blur-3xl transition-transform duration-500 group-hover:scale-125" />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-2 mb-3">
          <h3 className="text-xs uppercase tracking-widest text-muted">{title}</h3>
          {methodologyKey && (
            <MethodologyTooltip keyName={methodologyKey} className="relative" />
          )}
        </div>
        <div className="text-4xl font-semibold text-text mb-3">{value}</div>

        {trendValue && (
          <div className={cn("flex items-center gap-1 text-sm", getTrendColor())}>
            {getTrendIcon()}
            <span>{trendValue}</span>
          </div>
        )}

        {description && (
          <p className="text-xs text-muted/80 mt-3 leading-relaxed">{description}</p>
        )}
      </motion.div>
    </GlassCard>
  );
});

export default MetricStat;
