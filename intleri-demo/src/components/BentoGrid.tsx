"use client";

import { motion } from "framer-motion";
import {
  Shield,
  LayoutDashboard,
  Waves,
  Sparkles,
  CircuitBoard,
  GaugeCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import GlassCard from "./GlassCard";

const features = [
  {
    title: "Command deck",
    description: "Compose a neon-lit mosaic of cross-domain KPIs, command panels and live automations.",
    icon: LayoutDashboard,
    accent: "from-neon-1/20 via-transparent to-neon-2/20",
    bullets: ["Drag + drop data spaces", "Latency-optimized tiles"],
    className: "lg:col-span-2"
  },
  {
    title: "Security-as-a-Service",
    description: "Fail-closed policies, RBAC, and anomaly detection stitched directly into every workflow stage.",
    icon: Shield,
    accent: "from-neon-2/20 via-transparent to-transparent",
    bullets: ["Continuous compliance states", "Policy-as-code guardrails"]
  },
  {
    title: "Signal fabric",
    description: "Streaming ingestion unifies load boards, carrier telemetry and robotics signals in one fabric.",
    icon: Waves,
    accent: "from-neon-3/20 via-transparent to-transparent",
    bullets: ["Edge caching for robotics", "MCP-native webhooks"],
    className: "lg:col-span-1"
  },
  {
    title: "Predictive copilots",
    description: "Scenario simulations surface next-best moves, explainability, and ROI before execution.",
    icon: Sparkles,
    accent: "from-neon-1/20 via-neon-2/20 to-transparent",
    bullets: ["Agentic playbooks", "Explainable outlooks"]
  },
  {
    title: "Trusted robotics",
    description: "TSM orchestrates AMRs, drones and cobots with safety layers, digital twins and override control.",
    icon: CircuitBoard,
    accent: "from-neon-2/20 via-transparent to-neon-3/20",
    bullets: ["ROS bridge & telemetry", "Safety sandbox"]
  },
  {
    title: "Operational ledger",
    description: "Every decision logged with emissions, spend, and risk provenance for auditors and partners.",
    icon: GaugeCircle,
    accent: "from-neon-3/20 via-transparent to-transparent",
    bullets: ["CO₂ intensity snapshots", "Shared with trading partners"],
    className: "lg:col-span-1"
  }
];

export default function BentoGrid() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-text">Platform </span>
            <span className="neon-text">Capabilities</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Comprehensive logistics intelligence powered by modular architecture and advanced security.
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
                <GlassCard
                  hover
                  className={cn(
                    "relative h-full overflow-hidden rounded-3xl border-white/10 bg-white/[0.04] p-6"
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
