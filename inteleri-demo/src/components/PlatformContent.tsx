"use client";

import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import NeonButton from "./NeonButton";
import ArchitectureDiagram from "./platform/ArchitectureDiagram";
import ValuePillars from "./platform/ValuePillars";
import SecurityCallout from "./platform/SecurityCallout";

export default function PlatformContent() {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-text">Security by Design. </span>
            <span className="bg-gradient-to-r from-neon-1 via-neon-3 to-neon-1 bg-clip-text text-transparent">Signals by Default.</span>
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto mb-6">
            Inteleri is a security‑native, event‑driven platform. The Security layer runs first and fails closed.
            The Signal Fabric streams and correlates operational events to drive predictive decisions across apps and agents.
            The Experience layer delivers a fast, modern UI with precise control and real‑time feedback.
          </p>
          <div className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-neon-1/60 to-transparent" />
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <ArchitectureDiagram />
        </motion.div>

        {/* Platform Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <ValuePillars />
        </motion.div>

        {/* Security Callout */}
        <motion.div
          id="security"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <SecurityCallout />
        </motion.div>

        {/* Microservices Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <GlassCard>
            <h2 className="text-3xl font-bold text-text mb-6">
              Microservices-Ready Architecture
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-text mb-4">
                  When to Split Services
                </h3>
                <ul className="space-y-2 text-muted">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-neon-1 rounded-full mt-2 flex-shrink-0" />
                    <span>Independent scaling requirements</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-neon-1 rounded-full mt-2 flex-shrink-0" />
                    <span>Different technology stacks needed</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-neon-1 rounded-full mt-2 flex-shrink-0" />
                    <span>Team boundaries and ownership</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-neon-1 rounded-full mt-2 flex-shrink-0" />
                    <span>Fault isolation requirements</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-text mb-4">
                  Infrastructure Components
                </h3>
                <ul className="space-y-2 text-muted">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-neon-2 rounded-full mt-2 flex-shrink-0" />
                    <span>API Gateway for routing and authentication</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-neon-2 rounded-full mt-2 flex-shrink-0" />
                    <span>Service mesh for communication</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-neon-2 rounded-full mt-2 flex-shrink-0" />
                    <span>SLO monitoring and alerting</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-neon-2 rounded-full mt-2 flex-shrink-0" />
                    <span>Centralized logging and tracing</span>
                  </li>
                </ul>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Security Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <GlassCard>
            <h2 className="text-3xl font-bold text-text mb-6">
              Security & Compliance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-text mb-4">
                  Security Middleware Chain
                </h3>
                <ul className="space-y-2 text-muted">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-neon-3 rounded-full mt-2 flex-shrink-0" />
                    <span>Authentication & Authorization</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-neon-3 rounded-full mt-2 flex-shrink-0" />
                    <span>Rate limiting and throttling</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-neon-3 rounded-full mt-2 flex-shrink-0" />
                    <span>Input validation and sanitization</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-neon-3 rounded-full mt-2 flex-shrink-0" />
                    <span>ML-assisted anomaly detection</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-text mb-4">
                  Compliance & Standards
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <GlassCard hover={false} className="text-center p-4 bg-white/5">
                    <div className="text-2xl font-bold text-neon-1 mb-1">SOC2</div>
                    <div className="text-sm text-muted">Type II</div>
                  </GlassCard>
                  <GlassCard hover={false} className="text-center p-4 bg-white/5">
                    <div className="text-2xl font-bold text-neon-2 mb-1">GDPR</div>
                    <div className="text-sm text-muted">Compliant</div>
                  </GlassCard>
                  <GlassCard hover={false} className="text-center p-4 bg-white/5">
                    <div className="text-2xl font-bold text-neon-3 mb-1">NIST</div>
                    <div className="text-sm text-muted">Framework</div>
                  </GlassCard>
                  <GlassCard hover={false} className="text-center p-4 bg-white/5">
                    <div className="text-2xl font-bold text-text mb-1">ISO</div>
                    <div className="text-sm text-muted">27001</div>
                  </GlassCard>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-text mb-4">
            Ready to explore our platform?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeonButton variant="default" size="lg">
              Read the platform guide
            </NeonButton>
            <NeonButton variant="neon" size="lg">
              Get a demo
            </NeonButton>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
