import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import GlassCard from "./GlassCard";

interface MetricStatProps {
  title: string;
  value: string;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  description?: string;
}

export default function MetricStat({ 
  title, 
  value, 
  trend = "neutral", 
  trendValue, 
  description 
}: MetricStatProps) {
  const getTrendIcon = () => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-green-400" />;
      case "down":
        return <TrendingDown className="w-4 h-4 text-red-400" />;
      default:
        return <Minus className="w-4 h-4 text-muted" />;
    }
  };

  const getTrendColor = () => {
    switch (trend) {
      case "up":
        return "text-green-400";
      case "down":
        return "text-red-400";
      default:
        return "text-muted";
    }
  };

  return (
    <GlassCard hover className="text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-sm text-muted mb-2">{title}</h3>
        <div className="text-3xl font-bold text-text mb-2">{value}</div>
        
        {trendValue && (
          <div className={`flex items-center justify-center space-x-1 ${getTrendColor()}`}>
            {getTrendIcon()}
            <span className="text-sm">{trendValue}</span>
          </div>
        )}
        
        {description && (
          <p className="text-xs text-muted mt-2">{description}</p>
        )}
      </motion.div>
    </GlassCard>
  );
}
