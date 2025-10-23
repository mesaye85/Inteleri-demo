"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  LayoutDashboard,
  CircuitBoard
} from "lucide-react";
import { cn } from "@/lib/utils";
import GlassCard from "./GlassCard";

const features = [
  {
    title: "Trust & Risk",
    description: "Zero‑Trust perimeter, tenant isolation, fail‑closed controls, ML threat detection.",
    icon: Shield,
    accent: "from-neon-2/20 via-transparent to-transparent",
    bullets: ["Zero‑Trust perimeter", "Tenant isolation", "Fail‑closed controls", "ML threat detection"],
    href: "/platform#security",
    className: "lg:col-span-1"
  },
  {
    title: "Complexity",
    description: "Composable app suite, autonomous agents, selective feature activation.",
    icon: LayoutDashboard,
    accent: "from-neon-1/20 via-transparent to-neon-2/20",
    bullets: ["Composable app suite", "Autonomous agents", "Selective feature activation"],
    href: "/apps/analytics",
    className: "lg:col-span-1"
  },
  {
    title: "Relevance",
    description: "Tokenized Service Model (TSM): pay for value, not shelf‑ware.",
    icon: CircuitBoard,
    accent: "from-neon-3/20 via-transparent to-transparent",
    bullets: ["Pay for value", "Not shelf‑ware", "Tokenized execution"],
    href: "/tsm",
    className: "lg:col-span-1"
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

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-text">Three Value </span>
            <span className="neon-text">Pillars</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Security-first design with composable architecture and value-driven execution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={feature.className}
              >
                <Link href={feature.href}>
                  <GlassCard
                    hover
                    className={cn(
                      "relative h-full overflow-hidden rounded-3xl border-white/10 bg-white/[0.04] p-6 cursor-pointer"
                    )}
                  >
                  <div
                    className={cn(
                      "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-60 transition-opacity duration-500 group-hover:opacity-100",
                      feature.accent
                    )}
                  />
                  <div className="relative z-10 flex flex-col gap-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08]">
                          <Icon className="w-6 h-6 text-neon-1" />
                        </div>
                        <h3 className="text-xl font-semibold text-text">{feature.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted leading-relaxed">{feature.description}</p>

                    {feature.bullets && (
                      <ul className="mt-auto space-y-2 text-sm text-muted/90">
                        {feature.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-neon-1" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-neon-1/20 blur-3xl transition-transform duration-500 group-hover:scale-110" />
                  <div className="pointer-events-none absolute -left-20 bottom-0 h-28 w-28 rounded-full bg-neon-2/10 blur-3xl transition-transform duration-500 group-hover:scale-110" />
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
