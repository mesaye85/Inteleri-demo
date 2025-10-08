"use client";

import { motion } from "framer-motion";
import { Shield, Database, Cpu, Layers, Server, BarChart3 } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import NeonButton from "@/components/NeonButton";

// metadata must be defined in a server component (layout or non-client page)

const architectureLayers = [
  {
    name: "Experience Layer",
    description: "React frontend with Next.js, TypeScript, and Tailwind CSS",
    icon: Layers,
    technologies: ["Next.js 14", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "neon-1"
  },
  {
    name: "Security Layer",
    description: "SECaaS with tenant isolation, RBAC, and fail-closed controls",
    icon: Shield,
    technologies: ["OAuth 2.0", "RBAC", "Tenant Isolation", "Rate Limiting", "ML Threat Detection"],
    color: "neon-2"
  },
  {
    name: "App Layer",
    description: "Modular application suite with microservices architecture",
    icon: Cpu,
    technologies: ["Django REST", "Celery Workers", "Event-Driven", "Microservices", "API Gateway"],
    color: "neon-3"
  },
  {
    name: "Data Layer",
    description: "PostgreSQL, Redis, and object storage with event streaming",
    icon: Database,
    technologies: ["PostgreSQL", "Redis", "Object Storage", "Event Streaming", "Data Lakes"],
    color: "neon-1"
  },
  {
    name: "Operations Layer",
    description: "Observability, monitoring, and infrastructure management",
    icon: Server,
    technologies: ["Prometheus", "Grafana", "Sentry", "SLO Monitoring", "Auto-scaling"],
    color: "neon-2"
  }
];

const platformFeatures = [
  {
    title: "Security-as-a-Service",
    description: "Central authority for authZ, tenant isolation, input validation, rate limiting, ML-assisted anomaly detection, and full audit trails.",
    icon: Shield
  },
  {
    title: "Event-Driven Internals",
    description: "Business events on create/update; idempotent workers for enrichment, notifications, and retries.",
    icon: BarChart3
  },
  {
    title: "Observability",
    description: "Prometheus + Grafana + Sentry, SLO-oriented with graceful degradation.",
    icon: Server
  }
];

export default function PlatformPage() {
  return (
    <div className="min-h-screen">
      <NavBar />
      
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
              <span className="text-text">Platform </span>
              <span className="bg-gradient-to-r from-neon-1 via-neon-3 to-neon-1 bg-clip-text text-transparent">Architecture</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto mb-6">
              Built on Django REST Framework with event-driven patterns, microservices-ready architecture, 
              and comprehensive security controls for enterprise logistics operations.
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
              Platform Highlights
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
                Start Free Trial
              </NeonButton>
              <NeonButton variant="neon" size="lg">
                View Documentation
              </NeonButton>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
