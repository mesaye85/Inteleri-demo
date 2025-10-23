"use client";

import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Wrench, Map, Activity, Settings } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import NeonButton from "@/components/NeonButton";

const roboticsScope = [
  {
    category: "Warehouse Automation",
    description: "Automated material handling, sorting, and inventory management robots",
    examples: ["Pick & Place Robots", "AGVs", "Conveyor Systems", "Sorting Machines"]
  },
  {
    category: "Transportation",
    description: "Autonomous vehicles and drones for last-mile delivery and transportation",
    examples: ["Delivery Drones", "Autonomous Trucks", "Cargo Drones", "Mobile Robots"]
  },
  {
    category: "Industrial Automation",
    description: "Manufacturing and industrial process automation with robotic systems",
    examples: ["Assembly Robots", "Welding Robots", "Quality Inspection", "Packaging Systems"]
  }
];

const roboticsComponents = [
  {
    title: "Identity-Aware Control Plane",
    description:
      "Device identity attestation, policy enforcement, and signed task distribution across robot fleets.",
    icon: ShieldCheck,
    color: "neon-1"
  },
  {
    title: "Telemetry Mesh",
    description:
      "Low-latency stream processing with adaptive QoS and anomaly detection for real-time operations.",
    icon: Activity,
    color: "neon-2"
  },
  {
    title: "Scenario Engine",
    description:
      "Digital twin simulations, what-if analysis, and rollout orchestration with guardrails.",
    icon: Map,
    color: "neon-3"
  },
  {
    title: "Maintenance & Diagnostics",
    description:
      "Predictive maintenance scheduling, component lifecycle tracking, and remote diagnostics.",
    icon: Wrench,
    color: "neon-1"
  },
  {
    title: "Edge Runtime",
    description:
      "GPU-optimized inference at the edge with OTA updates and secure bootstrapping.",
    icon: Cpu,
    color: "neon-2"
  },
  {
    title: "Safety Envelope",
    description:
      "Dynamic geofencing, fallback states, and emergency stop orchestration mapped to SOC 2 controls.",
    icon: Settings,
    color: "neon-3"
  }
];

const safetyKPIs = [
  { metric: "Safety Incidents", value: "0", trend: "maintained", description: "Zero safety incidents in production" },
  { metric: "System Uptime", value: "99.8%", trend: "up", description: "Robust operational reliability" },
  { metric: "Response Time", value: "<100ms", trend: "down", description: "Real-time safety response" },
  { metric: "False Positives", value: "<0.1%", trend: "down", description: "Minimal false alarm rate" }
];

export default function RoboticsPageClient() {
  return (
    <div className="min-h-screen">
      <NavBar />

      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-text">Robotics </span>
              <span className="bg-gradient-to-r from-neon-1 via-neon-3 to-neon-1 bg-clip-text text-transparent">Interop & Safety</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto mb-6">
              Secure integration, safety, telemetry, and rollout strategies for robotic systems.
            </p>
            <div className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-neon-1/60 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <GlassCard className="p-8">
              <h2 className="text-3xl font-bold text-text mb-6">Scope & Positioning</h2>
              <div className="prose prose-lg text-muted max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  Our robotics platform provides secure, standardized integration for autonomous systems across warehouse, transportation, and industrial environments. We focus on interoperability, safety, and operational excellence with comprehensive monitoring and control capabilities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {roboticsScope.map((scope) => (
                    <div key={scope.category}>
                      <h3 className="text-xl font-semibold text-text mb-4">{scope.category}</h3>
                      <p className="text-muted mb-4">{scope.description}</p>
                      <div className="space-y-2">
                        {scope.examples.map((example) => (
                          <div key={example} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-neon-1 rounded-full flex-shrink-0" />
                            <span className="text-sm text-muted">{example}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-text mb-8 text-center">Robotics Platform Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roboticsComponents.map((component, index) => {
                const Icon = component.icon;
                return (
                  <motion.div
                    key={component.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <GlassCard className="p-6 h-full">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-${component.color}/20 flex items-center justify-center border border-${component.color}/30`}>
                          <Icon className={`w-6 h-6 text-${component.color}`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-text mb-2">{component.title}</h3>
                          <p className="text-sm text-muted leading-relaxed">{component.description}</p>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <GlassCard className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-text mb-4">Operational Playbooks</h2>
                  <p className="text-muted mb-6">
                    Define and govern robotics workflows with auditable runbooks, scenario testing, and automatic rollback capabilities.
                  </p>
                  <NeonButton variant="neon" size="lg" className="px-6">
                    View robotics docs
                  </NeonButton>
                </div>
                <div className="space-y-4">
                  {[
                    "Identity-bound task deployment with approvals",
                    "Real-time incident response with containment plans",
                    "Change management workflows tied to SOC 2 controls"
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <ShieldCheck className="w-5 h-5 text-neon-1" />
                      <span className="text-sm text-muted leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-16"
          >
            <GlassCard className="p-8">
              <h2 className="text-3xl font-bold text-text mb-6">Safety KPIs</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {safetyKPIs.map((kpi) => (
                  <div key={kpi.metric} className="rounded-2xl bg-white/5 border border-white/10 p-6">
                    <p className="text-sm uppercase tracking-widest text-muted mb-2">{kpi.metric}</p>
                    <p className="text-3xl font-semibold text-text mb-2">{kpi.value}</p>
                    <p className="text-xs text-muted/80 mb-2">{kpi.trend}</p>
                    <p className="text-sm text-muted leading-relaxed">{kpi.description}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <GlassCard className="p-8">
              <h2 className="text-3xl font-bold text-text mb-6">Compliance & Assurance</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Safety Certification",
                    description:
                      "ISO 10218 alignment, SOC 2 controls mapped, and autonomous operations safety reviews."
                  },
                  {
                    title: "Telemetry Governance",
                    description:
                      "Data retention policies, audit logging, and red team rehearsals for incident readiness."
                  },
                  {
                    title: "Change Control",
                    description:
                      "Four-eyes approval, rollback automation, and signed binary distribution."
                  }
                ].map((item) => (
                  <div key={item.title}>
                    <h3 className="text-xl font-semibold text-text mb-3">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

