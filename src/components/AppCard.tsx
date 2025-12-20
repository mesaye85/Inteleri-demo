"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import GlassCard from "./GlassCard";

interface AppCardProps {
  slug: string;
  title: string;
  summary: string;
  pillars: string[];
}

const iconMap: Record<string, string> = {
  analytics: "📊",
  loadboard: "📦",
  carrier: "🚛",
  emissions: "🌱",
  intelligence: "🧠",
  procurement: "🤝",
  rating: "⭐",
  inventory: "📋",
  security: "🛡️",
  "trust-pilot": "💬",
  warehouse: "🏭",
  broker: "💼",
};

export default function AppCard({ slug, title, summary, pillars }: AppCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={`/apps/${slug}`}>
        <GlassCard hover className="h-full cursor-pointer p-4 md:p-6">
          <div className="flex items-start gap-4">
            <div className="text-3xl md:text-4xl flex-shrink-0">{iconMap[slug] || "📱"}</div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg md:text-xl font-semibold text-text mb-2 break-words leading-tight">
                {title}
              </h3>
              <p className="text-sm md:text-base text-muted mb-4 leading-relaxed break-words">
                {summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {pillars.map((pillar) => (
                  <Badge
                    key={pillar}
                    variant="secondary"
                    className="bg-neon-1/20 text-neon-1 border-neon-1/30 text-xs md:text-sm break-words"
                  >
                    {pillar}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </GlassCard>
      </Link>
    </motion.div>
  );
}
