"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BarChart3, FileText, Target } from "lucide-react";
import { cn } from "@/lib/utils";
import GlassCard from "./GlassCard";

const outcomes = [
  {
    label: "Cycle time reduction",
    value: "Faster coordination",
    detail: "Reduce time between key workflow steps through visible, governed execution.",
    href: "/#main-content",
    methodologyKey: "post_to_award_hours",
  },
  {
    label: "Workflow observability",
    value: "Clearer state",
    detail: "Make workflow state, service activity, and handoffs visible to operators.",
    href: "/#main-content",
    methodologyKey: "eta_accuracy_pct",
  },
  {
    label: "Execution accountability",
    value: "Bounded automation",
    detail: "Policy-aware execution paths with audit-ready trails and measurable service activity.",
    href: "/#main-content",
    methodologyKey: "co2_intensity_kg_per_mi",
  },
];

const caseStudyPlaceholder = {
  title: "Methodology and reference demonstrations",
  description: "Inteleri is designed so execution can be measured, audited, and improved over time. Methodology and reference implementations are available during product demonstrations.",
  cta: "Request demo access",
  href: "/#request-access",
};

export const ProofStrip = React.memo(function ProofStrip({
  className,
}: {
  className?: string;
}) {
  return (
    <section
      className={cn("py-16 md:py-20 section-background", className)}
      aria-labelledby="proof-strip-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            id="proof-strip-heading"
            className="type-section-title text-white mb-4"
          >
            Measurable platform outcomes
          </h2>
          <p className="type-section-lead text-white/80 mx-auto">
            Outcomes are tied to explicit workflows, service activity, and platform telemetry, not vague automation claims.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {outcomes.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-6 h-full border-white/10">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neon-1/10 border border-neon-1/20">
                    <BarChart3 className="w-5 h-5 text-neon-1" />
                  </div>
                  <div className="min-w-0">
                    <p className="type-kicker tracking-wider mb-1">
                      {item.label}
                    </p>
                    <p className="type-card-title text-text">{item.value}</p>
                    <p className="type-card-body mt-1">{item.detail}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="p-6 md:p-8 border-neon-2/20 bg-white/[0.03]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neon-2/10 border border-neon-2/20">
                  <FileText className="w-6 h-6 text-neon-2" />
                </div>
                <div>
                  <h3 className="type-card-title text-text mb-2">
                    {caseStudyPlaceholder.title}
                  </h3>
                  <p className="text-muted max-w-xl">
                    {caseStudyPlaceholder.description}
                  </p>
                </div>
              </div>
              <Link
                href={caseStudyPlaceholder.href}
                className={cn(
                  "shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium",
                  "bg-neon-2/20 text-neon-2 border border-neon-2/30",
                  "hover:bg-neon-2/30 transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                )}
              >
                <Target className="w-4 h-4" />
                {caseStudyPlaceholder.cta}
              </Link>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
});

export default ProofStrip;
