"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  LayoutDashboard,
  CircuitBoard,
  Zap,
  Globe,
  Server
} from "lucide-react";
import { cn } from "@/lib/utils";
import GlassCard from "./GlassCard";

const features = [
  {
    title: "Trust & Risk",
    description: "Zero‑Trust perimeter, tenant isolation, fail‑closed controls, ML threat detection. Our security model assumes breach and verifies every request.",
    icon: Shield,
    accent: "from-neon-2/20 via-transparent to-transparent",
    bullets: ["Zero‑Trust perimeter", "Tenant isolation", "Fail‑closed controls", "ML threat detection"],
    href: "/platform#security",
    className: "md:col-span-2 lg:col-span-2 row-span-2",
    large: true
  },
  {
    title: "Complexity",
    description: "Composable app suite, autonomous agents.",
    icon: LayoutDashboard,
    accent: "from-neon-1/20 via-transparent to-neon-2/20",
    href: "/apps/analytics",
    className: "md:col-span-1 lg:col-span-1",
    large: false
  },
  {
    title: "Global Fabric",
    description: "Unified data plane across 12 regions.",
    icon: Globe,
    accent: "from-neon-3/20 via-transparent to-transparent",
    href: "/platform",
    className: "md:col-span-1 lg:col-span-1",
    large: false
  },
  {
    title: "Relevance",
    description: "Tokenized Service Model (TSM): pay for value, not shelf‑ware.",
    icon: CircuitBoard,
    accent: "from-neon-3/20 via-transparent to-transparent",
    bullets: ["Pay for value", "Not shelf‑ware", "Tokenized execution"],
    href: "/tsm",
    className: "md:col-span-2 lg:col-span-1 row-span-2",
    large: true
  },
  {
    title: "Velocity",
    description: "Real-time stream processing at edge.",
    icon: Zap,
    accent: "from-neon-1/20 via-transparent to-transparent",
    href: "/platform#velocity",
    className: "md:col-span-1 lg:col-span-1",
    large: false
  },
  {
    title: "Infrastructure",
    description: "GPU-accelerated compute nodes.",
    icon: Server,
    accent: "from-neon-2/20 via-transparent to-transparent",
    href: "/platform#infra",
    className: "md:col-span-1 lg:col-span-1",
    large: false
  }
];

export default function BentoGrid() {
  return (
    <section className="py-20 section-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 break-words leading-tight">
            <span className="text-text">Value </span>
            <span className="neon-text">Architecture</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted max-w-3xl mx-auto break-words leading-relaxed">
            Security-first design with composable architecture and value-driven execution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[minmax(180px,auto)] gap-4 md:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={feature.className}
              >
                <Link href={feature.href} className="h-full block">
                  <GlassCard
                    hover
                    className={cn(
                      "relative h-full overflow-hidden rounded-3xl border-white/10 bg-white/[0.04] p-6 cursor-pointer flex flex-col"
                    )}
                  >
                    <div
                      className={cn(
                        "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-40 transition-opacity duration-500 group-hover:opacity-80",
                        feature.accent
                      )}
                    />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08]">
                          <Icon className="w-6 h-6 text-neon-1" />
                        </div>
                        {feature.large && (
                          <div className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-neon-1 font-medium">
                            Key Pillar
                          </div>
                        )}
                      </div>

                      <h3 className={cn(
                        "font-semibold text-text break-words leading-tight mb-2",
                        feature.large ? "text-2xl" : "text-lg"
                      )}>
                        {feature.title}
                      </h3>
                      
                      <p className="text-sm text-muted leading-relaxed break-words">
                        {feature.description}
                      </p>

                      {feature.bullets && (
                        <ul className="mt-auto pt-6 space-y-2 text-sm text-muted/90">
                          {feature.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-neon-1 mt-1.5 flex-shrink-0" />
                              <span className="break-words leading-relaxed">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Decorative background elements */}
                    <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-neon-1/10 blur-3xl transition-transform duration-500 group-hover:scale-150" />
                    <div className="pointer-events-none absolute -left-20 bottom-0 h-28 w-28 rounded-full bg-neon-2/5 blur-3xl transition-transform duration-500 group-hover:scale-150" />
                  </GlassCard>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
