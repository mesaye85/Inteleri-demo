"use client";

import { motion } from "framer-motion";
import { Shield, Database, Cpu, Layers, Server, BarChart3 } from "lucide-react";
import GlassCard from "./GlassCard";
import NeonButton from "./NeonButton";

const architectureLayers = [
  {
    name: "Security Layer (SECaaS)",
    description: "Runs before business logic. Strong RBAC, tenant isolation, input validation, rate limiting, anomaly detection, forensics‑grade audit trail.",
    icon: Shield,
    technologies: ["RBAC", "Tenant Isolation", "Input Validation", "Rate Limiting", "ML Threat Detection"],
    color: "neon-2"
  },
  {
    name: "Signal Fabric (Data Layer)",
    description: "Event streaming + processing; single, secured source of truth for telemetry, status, KPIs, and model outputs.",
    icon: Database,
    technologies: ["Event Streaming", "Telemetry", "Status Tracking", "KPI Monitoring", "Model Outputs"],
    color: "neon-1"
  },
  {
    name: "Application Layer",
    description: "Modular apps (Analytics, Loadboard, Carrier, Emissions, Intelligence, Procurement, Rating, Inventory, Security, Trust, Warehouse, Broker). Clean boundaries; microservice‑ready.",
    icon: Cpu,
    technologies: ["Analytics", "Loadboard", "Carrier", "Emissions", "Intelligence"],
    color: "neon-3"
  },
  {
    name: "Experience Layer (Next.js/React)",
    description: "High‑performance, motion‑assisted UI (custom neon/glass design), progressive disclosure, command palette.",
    icon: Layers,
    technologies: ["Next.js", "React", "Motion UI", "Progressive Disclosure", "Command Palette"],
    color: "neon-1"
  },
  {
    name: "Operations Layer",
    description: "Observability, SLOs, alerting, change audit, feature flags, controlled rollouts.",
    icon: Server,
    technologies: ["Observability", "SLOs", "Alerting", "Change Audit", "Feature Flags"],
    color: "neon-2"
  }
];

const platformFeatures = [
  {
    title: "Trust & Risk",
    description: "Zero‑Trust perimeter, tenant isolation, fail‑closed controls, ML threat detection.",
    icon: Shield
  },
  {
    title: "Complexity",
    description: "Composable app suite, autonomous agents, selective feature activation.",
    icon: BarChart3
  },
  {
    title: "Relevance",
    description: "Tokenized Service Model (TSM): pay for value, not shelf‑ware.",
    icon: Server
  }
];

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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <GlassCard className="p-8">
            <h2 className="text-3xl font-bold text-text mb-8 text-center">
              System Architecture
            </h2>
            <div className="space-y-4">
              {architectureLayers.map((layer, index) => {
                const Icon = layer.icon;
                return (
                  <motion.div
                    key={layer.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-6 p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <div className={`w-12 h-12 bg-${layer.color}/20 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-6 h-6 text-${layer.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-text mb-1">
                        {layer.name}
                      </h3>
                      <p className="text-muted mb-2">{layer.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {layer.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs bg-white/10 text-text px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </GlassCard>
        </motion.div>

        {/* Platform Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-text mb-8 text-center">
            Three Value Pillars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platformFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <GlassCard className="h-full">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-neon-1/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-neon-1" />
                      </div>
                      <h3 className="text-xl font-semibold text-text mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-muted leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Security Callout */}
        <motion.div
          id="security"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <GlassCard className="border-neon-2/30">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-neon-2 mb-4">
                Security runs first
              </h3>
              <p className="text-lg text-text">
                Default‑deny, least privilege, immutable audit logs, tenant‑scoped data access.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <h4 className="text-sm font-semibold text-neon-1 mb-2">RBAC</h4>
                <p className="text-xs text-muted">Role-based access control</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <h4 className="text-sm font-semibold text-neon-2 mb-2">Tenant Scoping</h4>
                <p className="text-xs text-muted">Multi-tenant isolation</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <h4 className="text-sm font-semibold text-neon-3 mb-2">Validation</h4>
                <p className="text-xs text-muted">Input validation & sanitization</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <h4 className="text-sm font-semibold text-neon-1 mb-2">Throttling</h4>
                <p className="text-xs text-muted">Rate limiting & throttling</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <h4 className="text-sm font-semibold text-neon-2 mb-2">Anomaly Detection</h4>
                <p className="text-xs text-muted">ML-assisted threat detection</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <h4 className="text-sm font-semibold text-neon-3 mb-2">Immutable Audit</h4>
                <p className="text-xs text-muted">Forensics-grade audit trail</p>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Microservices Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
          animate={{ opacity: 1, y: 0 }}
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
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-neon-1 mb-1">SOC2</div>
                    <div className="text-sm text-muted">Type II</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-neon-2 mb-1">GDPR</div>
                    <div className="text-sm text-muted">Compliant</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-neon-3 mb-1">NIST</div>
                    <div className="text-sm text-muted">Framework</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-text mb-1">ISO</div>
                    <div className="text-sm text-muted">27001</div>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
