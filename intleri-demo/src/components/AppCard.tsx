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
        <GlassCard hover className="h-full cursor-pointer">
          <div className="flex items-start space-x-4">
            <div className="text-4xl">{iconMap[slug] || "📱"}</div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-text mb-2">
                {title}
              </h3>
              <p className="text-muted mb-4 leading-relaxed">
                {summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {pillars.map((pillar) => (
                  <Badge
                    key={pillar}
                    variant="secondary"
                    className="bg-neon-1/20 text-neon-1 border-neon-1/30"
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
