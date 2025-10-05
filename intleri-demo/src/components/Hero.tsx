"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  Workflow,
  Cpu,
  Radar,
  ArrowUpRight,
  LineChart
} from "lucide-react";
import GlassCard from "./GlassCard";
import NeonButton from "./NeonButton";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Zero-trust perimeter",
    description: "Hardware attestation, tenant isolation and adaptive guardrails."
  },
  {
    icon: Workflow,
    title: "Composed automations",
    description: "Design runbooks that branch across TSM, agents and robotics."
  },
  {
    icon: LineChart,
    title: "Predictive telemetry",
    description: "Neural forecasting on freight, risk, emissions and financials."
  },
  {
    icon: Cpu,
    title: "GPU-native fabric",
    description: "Streaming inference at the edge with MCP-compatible APIs."
  }
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 hero-surface" />
      <div className="absolute inset-0 hero-grid opacity-40" />
      <div className="absolute inset-0 hero-noise" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="inline-flex items-center gap-2 rounded-full glass border border-white/10 px-4 py-2 text-sm text-muted">
              <Sparkles className="w-4 h-4 text-neon-1" />
              <span className="text-text/80">Introducing Intleri Neon Control Surface</span>
            </div>

            <h1 className="mt-8 text-5xl md:text-7xl font-semibold leading-tight tracking-tight">
              <span className="text-text">Logistics intelligence that feels</span>
              <span className="block bg-gradient-to-r from-neon-1 via-neon-2 to-neon-3 bg-clip-text text-transparent">
                like piloting a living control room.
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-xl">
              Stream operational context, simulate futures, and deploy trusted automations
              across your network. A neon-grade experience tuned for high velocity supply
              chains.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
              <NeonButton variant="neon" size="lg" className="px-8 py-3">
                Launch the platform
              </NeonButton>
              <NeonButton variant="default" size="lg" className="px-8 py-3">
                View live demos
              </NeonButton>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="gradient-border rounded-2xl bg-white/[0.03] p-4 backdrop-blur-sm border border-white/10 flex gap-3"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neon-1/10 border border-neon-1/30">
                      <Icon className="w-5 h-5 text-neon-1" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-text">{item.title}</h3>
                      <p className="text-xs text-muted mt-1 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <div className="relative h-[520px]">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="absolute inset-0 flex justify-end"
            >
              <GlassCard
                hover={false}
                className="relative h-full w-full max-w-[420px] overflow-hidden rounded-3xl border-white/10 bg-white/5 px-8 py-10"
              >
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-neon-1/60 to-transparent" />
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted">Network pulse</p>
                    <p className="mt-3 text-4xl font-semibold text-text">218 routes</p>
                    <p className="mt-1 text-sm text-muted">Synced across 12 data planes</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neon-1/10 border border-neon-1/30">
                    <Radar className="w-5 h-5 text-neon-1" />
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted">Carrier ETA</p>
                      <p className="text-lg font-semibold text-text">98.2% on time</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-emerald-300">
                      <ArrowUpRight className="h-4 w-4" />
                      <span>+4.3%</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm text-muted">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                      <p className="text-xs uppercase tracking-widest text-muted/80">Risk alerts</p>
                      <p className="mt-2 text-2xl font-semibold text-text">12</p>
                      <p className="text-xs text-emerald-300 mt-1">-18% WoW</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                      <p className="text-xs uppercase tracking-widest text-muted/80">CO₂ intensity</p>
                      <p className="mt-2 text-2xl font-semibold text-text">0.82</p>
                      <p className="text-xs text-sky-300 mt-1">kg / mi avg.</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-neon-1/10 via-transparent to-neon-2/10 px-4 py-4">
                    <p className="text-xs uppercase tracking-widest text-muted">Scenario engine</p>
                    <p className="mt-2 text-sm text-text/90 leading-relaxed">
                      Snapshot future-state loads, pricing and risk scores before deploying
                      into production.
                    </p>
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bg via-bg/60 to-transparent" />
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute -bottom-12 left-0 w-full max-w-[260px]"
            >
              <GlassCard hover={false} className="relative overflow-hidden rounded-3xl px-6 py-5">
                <div className="absolute -top-10 -right-6 h-32 w-32 rounded-full bg-neon-2/20 blur-3xl" />
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                    <Workflow className="w-5 h-5 text-neon-1" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted">Autonomous TSM</p>
                    <p className="text-lg font-semibold text-text">Runbook compiled</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-xs text-muted">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-neon-1" />
                    8 microservices orchestrated
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-neon-2" />
                    Robotics co-pilot engaged
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-neon-3" />
                    SOC2 guardrail verified
                  </li>
                </ul>
              </GlassCard>
            </motion.div>

            <motion.div
              aria-hidden="true"
              animate={{
                y: [0, -18, 0],
                rotate: [0, 6, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-16 right-24 h-40 w-40 rounded-full bg-neon-1/20 blur-3xl"
            />
            <motion.div
              aria-hidden="true"
              animate={{
                y: [0, 22, 0],
                rotate: [0, -8, 0]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-24 -left-10 h-32 w-32 rounded-full bg-neon-2/20 blur-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
