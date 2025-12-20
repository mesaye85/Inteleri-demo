"use client";

import { motion } from "framer-motion";
import {
  Coins,
  Eye,
  Check,
  X,
  Wallet
} from "lucide-react";
import GlassCard from "./GlassCard";
import NeonButton from "./NeonButton";

const benefits = [
  {
    title: "Pay for Outcomes",
    description: "Stop paying for seats. Pay for successful loads booked, risks mitigated, and SLAs met.",
    icon: Coins,
    color: "neon-1"
  },
  {
    title: "Zero Shelf-Ware",
    description: "Modules are activated on-demand. If you stop using a feature, the billing stops instantly.",
    icon: X,
    color: "neon-2"
  },
  {
    title: "Granular Attribution",
    description: "Know exactly which department, region, or user is driving value (or cost) with token-level tracing.",
    icon: Eye,
    color: "neon-3"
  }
];

const comparisonData = [
  {
    feature: "Pricing Model",
    traditional: "Per Seat / Monthly",
    tsm: "Per Successful Transaction"
  },
  {
    feature: "Commitment",
    traditional: "Annual Contracts",
    tsm: "Pay-as-you-go"
  },
  {
    feature: "Scaling",
    traditional: "Buy licenses in bulk",
    tsm: "Auto-scales with volume"
  },
  {
    feature: "ROI Tracking",
    traditional: "Estimated / Annual",
    tsm: "Real-time / Transactional"
  }
];

export default function TSMContent() {
  return (
    <div className="pt-24 pb-24 min-h-screen page-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass border border-white/10 px-4 py-1.5 text-xs md:text-sm text-neon-3 mb-6">
            <Wallet className="w-4 h-4" />
            <span>The Tokenized Service Model</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
            <span className="text-text">Value. </span>
            <span className="bg-gradient-to-r from-neon-3 via-neon-2 to-neon-1 bg-clip-text text-transparent">Quantified.</span>
          </h1>

          <p className="text-xl text-muted/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            The SaaS model is broken. You shouldn&apos;t pay for software; you should pay for results.
            TSM aligns our incentives with your success by tokenizing every value-generating event.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeonButton variant="neon" size="lg">
              Calculate Your ROI
            </NeonButton>
            <NeonButton variant="ghost" size="lg">
              Read the TSM Whitepaper
            </NeonButton>
          </div>
        </motion.div>

        {/* Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="h-full p-8 hover:bg-white/[0.02] transition-colors">
                  <div className={`w-12 h-12 rounded-xl bg-${benefit.color}/10 flex items-center justify-center mb-6`}>
                    <Icon className={`w-6 h-6 text-${benefit.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-muted leading-relaxed">{benefit.description}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* How it Works */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How TSM Works</h2>
            <p className="text-muted max-w-2xl mx-auto">From request to settlement in milliseconds.</p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-3/30 to-transparent -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", title: "Token Issue", desc: "Service request initiates a token grant." },
                { step: "02", title: "Execution", desc: "Microservice validates & processes the request." },
                { step: "03", title: "Verification", desc: "Oracle validates the successful outcome." },
                { step: "04", title: "Settlement", desc: "Token is burned & value is logged." }
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-bg border border-white/10 p-6 rounded-2xl text-center"
                >
                  <div className="text-sm font-mono text-neon-3 mb-2">{item.step}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto mb-32">
          <GlassCard className="p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Traditional SaaS vs. TSM</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 px-4 text-muted font-medium uppercase text-xs tracking-wider">Feature</th>
                    <th className="py-4 px-4 text-white font-semibold">Traditional SaaS</th>
                    <th className="py-4 px-4 text-neon-3 font-bold">Inteleri TSM</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {comparisonData.map((row) => (
                    <tr key={row.feature} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-4 text-muted text-sm font-medium">{row.feature}</td>
                      <td className="py-4 px-4 text-white/80 text-sm">{row.traditional}</td>
                      <td className="py-4 px-4 text-neon-3 text-sm font-medium flex items-center gap-2">
                        {row.tsm}
                        <Check className="w-4 h-4" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Stop paying for promises.</h2>
          <p className="text-xl text-muted mb-8">Start paying for performance.</p>
          <NeonButton variant="default" size="lg">
            Start your TSM Pilot
          </NeonButton>
        </motion.div>

      </div>
    </div>
  );
}
