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
    title: "Trust by architecture",
    description: "Tenant isolation, fail-closed controls, explicit policy enforcement, and auditability by default.",
    icon: Shield,
    accent: "from-neon-2/20 via-transparent to-transparent",
    bullets: ["Tenant isolation", "Fail-closed execution", "Policy enforcement", "Audit-ready trails"],
    href: "/platform#security",
    className: "lg:col-span-1"
  },
  {
    title: "Operational coherence",
    description: "Workspaces, apps, and services organized around clear boundaries so the system stays usable as capability grows.",
    icon: LayoutDashboard,
    accent: "from-neon-1/20 via-transparent to-neon-2/20",
    bullets: ["Workspace boundaries", "Explicit service surfaces", "Reduced drift", "Easier to reason about"],
    href: "/platform#workspaces",
    className: "lg:col-span-1"
  },
  {
    title: "Measured execution",
    description: "TSM ties platform activity to governed service execution—automation becomes transparent and controllable.",
    icon: CircuitBoard,
    accent: "from-neon-3/20 via-transparent to-transparent",
    bullets: ["Tokenized service execution", "Governed automation paths", "Observable workflows", "Accountable utilization"],
    href: "/tsm",
    className: "lg:col-span-1"
  }
];

export default function BentoGrid() {
  return (
    <section className="py-16 md:py-20 section-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="type-section-title mb-6">
            <span className="text-text">Three platform </span>
            <span className="neon-text">principles</span>
          </h2>
          <p className="type-section-lead text-muted mx-auto">
            A control surface built for trust, operational clarity, and governed execution.
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
                <Link href={feature.href} className="group block h-full">
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
                        <h3 className="type-card-title text-text">{feature.title}</h3>
                      </div>
                    </div>
                    <p className="type-card-body">{feature.description}</p>

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
