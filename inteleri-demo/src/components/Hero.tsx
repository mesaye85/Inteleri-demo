"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  Workflow,
  Radar,
  ArrowUpRight,
  LineChart
} from "lucide-react";
import GlassCard from "./GlassCard";
import NeonButton from "./NeonButton";
import CountUp from "./CountUp";
import heroData from "@/data/hero.json";
import { useModal } from "@/components/ModalContext";
import Link from "next/link";

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Workflow,
  LineChart
};

export default function Hero() {
  const { openModal } = useModal();
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 hero-surface" />
      {/* Grid and Noise are now handled globally, but we can add a subtle overlay if needed. 
          For now, we let the GlobalBackground provide the texture. */}

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
              <span className="text-text/80">Security-first control surface for operations</span>
            </div>

            <h1 className="mt-8 type-display">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="block text-text"
              >
                Inteleri
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="block bg-gradient-to-r from-neon-1 via-neon-2 to-neon-3 bg-clip-text text-transparent"
              >
                Security-native logistics intelligence
              </motion.span>
            </h1>

            <p className="mt-6 type-section-lead text-muted">
              One platform to operate, secure, and scale modern logistics workflows.
            </p>
            <p className="mt-4 type-section-lead text-muted">
              Inteleri unifies operational workspaces, governed automation, and tokenized service execution into a single control surface. From carrier and loadboard operations to risk, intelligence, and platform oversight, every action is policy-aware, observable, and tenant-safe.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
              <NeonButton variant="neon" size="lg" className="px-8 py-3" onClick={() => openModal("access")}>
                Request a demo
              </NeonButton>
              <Link href="/platform">
                <NeonButton variant="default" size="lg" className="px-8 py-3">
                  Explore the platform
                </NeonButton>
              </Link>
              <a
                href="/platform#security"
                className="text-sm text-neon-1 hover:text-neon-2 transition-colors inline-flex items-center gap-1 mt-2 sm:mt-0 rounded outline-none focus-visible:ring-2 focus-visible:ring-neon-1 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
              >
                Trust &amp; security
              </a>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-muted">
              <a
                href="#demo"
                className="hover:text-neon-1 transition-colors rounded outline-none focus-visible:ring-2 focus-visible:ring-neon-1 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
              >
                See a 60‑second tour
              </a>
              <a
                href="#request-access"
                className="hover:text-neon-1 transition-colors rounded outline-none focus-visible:ring-2 focus-visible:ring-neon-1 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
              >
                Request access
              </a>
            </div>
            <p className="mt-4 text-sm text-muted">
              Security-first. Multi-tenant. Fail-closed. Built for real operational control.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {heroData.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <div
                    key={item.title}
                    className="gradient-border rounded-2xl bg-white/[0.03] p-4 backdrop-blur-sm border border-white/10 flex gap-3"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neon-1/10 border border-neon-1/30">
                      <Icon className="w-5 h-5 text-neon-1" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-semibold text-text truncate">{item.title}</h3>
                      <p className="text-xs text-muted mt-1 leading-relaxed break-words">{item.description}</p>
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
                    <p className="type-kicker">Control surface</p>
                    <p className="mt-3 text-4xl font-semibold text-text">
                      <CountUp value={5} suffix=" workspaces" />
                    </p>
                    <p className="mt-1 text-sm text-muted">Bounded execution, observable activity</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neon-1/10 border border-neon-1/30">
                    <Radar className="w-5 h-5 text-neon-1" />
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                    <div>
                      <p className="type-kicker">Multi-tenant</p>
                      <p className="text-lg font-semibold text-text">
                        Tenant-safe boundaries
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted">
                      <ArrowUpRight className="h-4 w-4" />
                      <span>Policy-enforced</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm text-muted">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                      <p className="type-kicker text-muted/80">Fail-closed</p>
                      <p className="mt-2 text-2xl font-semibold text-text">
                        Deny by default
                      </p>
                      <p className="text-xs text-muted mt-1">Audit-ready trails</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                      <p className="type-kicker text-muted/80">TSM</p>
                      <p className="mt-2 text-2xl font-semibold text-text">
                        Tokenized execution
                      </p>
                      <p className="text-xs text-muted mt-1">Measured service activity</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-neon-1/10 via-transparent to-neon-2/10 px-4 py-4">
                    <p className="type-kicker">Built for controlled execution</p>
                    <p className="mt-2 text-sm text-text/90 leading-relaxed">
                      Workspace-based operational control, policy-aware orchestration, and AI capability behind governed boundaries.
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
                    <p className="type-kicker">Execution stays bounded</p>
                    <p className="text-lg font-semibold text-text">Governed automation</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-xs text-muted">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-neon-1" />
                    Workspace-based operational control
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-neon-2" />
                    Policy-aware workflow orchestration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-neon-3" />
                    Audit-ready activity trails
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
