"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Database,
  Cpu,
  Layers,
  Server,
  Globe,
  CheckCircle,
  FileText,
  Cloud,
  Lock
} from "lucide-react";
import GlassCard from "./GlassCard";
import NeonButton from "./NeonButton";

const architectureLayers = [
  {
    name: "SECaaS Layer",
    description: "The first line of defense. Every request is intercepted, authenticated, and validated before it touches any business logic.",
    icon: Shield,
    technologies: ["Zero-Trust Policy", "Identity Federation", "WAF/DDoS Mitigation", "Behavioral Analysis"],
    color: "neon-2"
  },
  {
    name: "Signal Fabric",
    description: "A high-throughput event mesh that ingests, normalizes, and routes telemetry from your entire logistics ecosystem.",
    icon: Database,
    technologies: ["Kafka/Redpanda", "Schema Registry", "Stream Processing", "Time-Series DB"],
    color: "neon-1"
  },
  {
    name: "Intelligence Core",
    description: "Where predictive models and heuristic agents operate. TPI scoring, ETA prediction, and dynamic pricing happen here.",
    icon: Cpu,
    technologies: ["Inference Engine", "Model Registry", "Vector Database", "Agent Orchestration"],
    color: "neon-3"
  },
  {
    name: "Application Suite",
    description: "Composable modules for specific business domains. Activate only what you need, when you need it.",
    icon: Layers,
    technologies: ["Micro-Frontends", "Domain Services", "GraphQL Federation", "Shared State"],
    color: "neon-1"
  }
];

const securityFeatures = [
  {
    title: "Zero-Trust Perimeter",
    description: "We assume breach. Every request—whether internal or external—is fully authenticated, authorized, and encrypted.",
    icon: Lock
  },
  {
    title: "Tenant Isolation",
    description: "Strict logical and physical separation of data. Your operational signals never cross-pollinate with other tenants.",
    icon: Cloud
  },
  {
    title: "Immutable Audit",
    description: "Forensics-grade logging on write-once storage. Every action, API call, and state change is recorded permanently.",
    icon: FileText
  },
  {
    title: "Fail-Closed Controls",
    description: "In the event of ambiguity or error, the system defaults to a secure, locked state to prevent data leakage.",
    icon: Shield
  }
];

const complianceBadges = [
  { name: "SOC 2 Type II", status: "Certified" },
  { name: "ISO 27001", status: "Compliant" },
  { name: "GDPR / CCPA", status: "Ready" },
  { name: "FedRAMP", status: "In Progress" }
];

export default function PlatformContent() {
  return (
    <div className="pt-24 pb-24 min-h-screen page-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass border border-white/10 px-4 py-1.5 text-xs md:text-sm text-neon-1 mb-6">
            <Shield className="w-4 h-4" />
            <span>Enterprise-Grade Security & Architecture</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
            <span className="text-text">Fortified. </span>
            <span className="bg-gradient-to-r from-neon-1 via-neon-2 to-neon-3 bg-clip-text text-transparent">Intelligent.</span>
            <br />
            <span className="text-text">Scalable.</span>
          </h1>

          <p className="text-xl text-muted/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            The Inteleri platform is built on a <span className="text-white font-medium">Security-as-a-Service (SECaaS)</span> foundation.
            We decouple security from application logic, ensuring consistent, rigorous protection across all modules
            without slowing down feature velocity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeonButton variant="neon" size="lg">
              Request Architecture Whitepaper
            </NeonButton>
            <NeonButton variant="ghost" size="lg">
              View API Documentation
            </NeonButton>
          </div>
        </motion.div>

        {/* Architecture Stack */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Stack</h2>
            <p className="text-muted max-w-2xl mx-auto">
              A layered architecture designed for resilience, observability, and speed.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
            {architectureLayers.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <motion.div
                  key={layer.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GlassCard className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center group transition-all hover:bg-white/[0.02]">
                    <div className={`w-16 h-16 rounded-2xl bg-${layer.color}/10 border border-${layer.color}/20 flex items-center justify-center flex-shrink-0 shadow-[0_0_30px_-10px_var(--${layer.color})]`}>
                      <Icon className={`w-8 h-8 text-${layer.color}`} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white group-hover:text-neon-1 transition-colors">
                          {layer.name}
                        </h3>
                        <div className="hidden md:block text-xs font-mono text-white/40">Layer 0{index + 1}</div>
                      </div>

                      <p className="text-muted/80 mb-4 leading-relaxed">
                        {layer.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {layer.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-medium bg-white/5 border border-white/10 text-white/70 px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Security Deep Dive */}
        <div id="security" className="mb-32 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-neon-2 font-medium mb-4">
                <Lock className="w-4 h-4" />
                <span>Defense in Depth</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Enterprise-Grade <br />
                <span className="text-neon-2">Security Controls.</span>
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Security isn&apos;t an afterthought; it&apos;s the fabric of our platform. From the edge to the database,
                every interaction is verified. We employ a rigorous &quot;defense in depth&quot; strategy that combines
                automated controls with human oversight.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {securityFeatures.map((feature) => (
                  <div key={feature.title} className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <feature.icon className="w-6 h-6 text-neon-2 mb-3" />
                    <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-neon-2/20 blur-3xl rounded-full opacity-20" />
              <GlassCard className="relative p-8 border-neon-2/30">
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                  <div>
                    <div className="text-sm text-muted uppercase tracking-wider mb-1">Compliance Status</div>
                    <div className="text-2xl font-bold text-white">Audit Ready</div>
                  </div>
                  <CheckCircle className="w-10 h-10 text-neon-2" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {complianceBadges.map((badge) => (
                    <div key={badge.name} className="flex flex-col items-center justify-center p-4 rounded-lg bg-white/5 border border-white/10 text-center hover:border-neon-2/50 transition-colors">
                      <div className="font-bold text-white mb-1">{badge.name}</div>
                      <div className="text-xs text-neon-2">{badge.status}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-3 text-sm text-muted">
                    <Server className="w-4 h-4" />
                    <span>Data Residency: US, EU, APAC</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted mt-2">
                    <Globe className="w-4 h-4" />
                    <span>Global CDN with DDoS Protection</span>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <GlassCard className="p-12 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-1/10 via-transparent to-neon-3/10 opacity-30" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Built for the Mission-Critical Enterprise
              </h2>
              <p className="text-xl text-muted mb-10 max-w-2xl mx-auto">
                Don&apos;t compromise on security for speed. With Inteleri, you get both.
                Deploy with confidence on a platform that scales with your ambition.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NeonButton variant="default" size="lg">
                  Schedule a Security Briefing
                </NeonButton>
                <NeonButton variant="neon" size="lg">
                  Contact Sales
                </NeonButton>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
