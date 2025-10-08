"use client";

import { motion } from "framer-motion";
import { Bot, Shield, Database, Eye, Zap, Settings, AlertTriangle } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import NeonButton from "@/components/NeonButton";

// metadata must be defined in a server component (layout or non-client page)

const roboticsComponents = [
  {
    name: "Identity & Authentication",
    description: "Secure robot identity management with cryptographic certificates and role-based access control",
    icon: Shield,
    technologies: ["X.509 Certificates", "RBAC", "PKI", "Zero Trust"],
    color: "neon-1"
  },
  {
    name: "Service Registry",
    description: "Dynamic discovery and registration of robot capabilities, sensors, and actuators",
    icon: Database,
    technologies: ["Robot Registry", "Capability Discovery", "Health Monitoring", "Load Balancing"],
    color: "neon-2"
  },
  {
    name: "Safety & OT Security",
    description: "Operational Technology security with fail-safe mechanisms and intrusion detection",
    icon: AlertTriangle,
    technologies: ["Fail-Safe Systems", "Intrusion Detection", "Emergency Stop", "Safety Protocols"],
    color: "neon-3"
  },
  {
    name: "Task & Telemetry Schemas",
    description: "Standardized data schemas for robot tasks, sensor data, and operational metrics",
    icon: Zap,
    technologies: ["JSON Schema", "Protocol Buffers", "Real-time Streaming", "Data Validation"],
    color: "neon-1"
  },
  {
    name: "Performance KPIs",
    description: "Comprehensive monitoring and analytics for robot performance and operational metrics",
    icon: Eye,
    technologies: ["Performance Metrics", "Uptime Monitoring", "Efficiency Analytics", "Predictive Maintenance"],
    color: "neon-2"
  },
  {
    name: "Rollout Management",
    description: "Phased deployment and rollout strategies for robotic systems integration",
    icon: Settings,
    technologies: ["Canary Deployments", "A/B Testing", "Feature Flags", "Rollback Capabilities"],
    color: "neon-3"
  }
];

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

const safetyKPIs = [
  { metric: "Safety Incidents", value: "0", trend: "maintained", description: "Zero safety incidents in production" },
  { metric: "System Uptime", value: "99.8%", trend: "up", description: "Robust operational reliability" },
  { metric: "Response Time", value: "<100ms", trend: "down", description: "Real-time safety response" },
  { metric: "False Positives", value: "<0.1%", trend: "down", description: "Minimal false alarm rate" }
];

export default function RoboticsPage() {
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
              <span className="text-text">Robotics </span>
              <span className="bg-gradient-to-r from-neon-1 via-neon-3 to-neon-1 bg-clip-text text-transparent">Interop & Safety</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto mb-6">
              Secure integration, safety, telemetry, and rollout strategies for robotic systems.
            </p>
            <div className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-neon-1/60 to-transparent" />
          </motion.div>

          {/* Scope & Positioning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <GlassCard className="p-8">
              <h2 className="text-3xl font-bold text-text mb-6">
                Scope & Positioning
              </h2>
              <div className="prose prose-lg text-muted max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  Our robotics platform provides secure, standardized integration for autonomous systems 
                  across warehouse, transportation, and industrial environments. We focus on interoperability, 
                  safety, and operational excellence with comprehensive monitoring and control capabilities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {roboticsScope.map((scope) => (
                    <div key={scope.category}>
                      <h3 className="text-xl font-semibold text-text mb-4">
                        {scope.category}
                      </h3>
                      <p className="text-muted mb-4">
                        {scope.description}
                      </p>
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

          {/* Core Components */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-text mb-8 text-center">
              Robotics Platform Components
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roboticsComponents.map((component, index) => {
                const Icon = component.icon;
                return (
                  <motion.div
                    key={component.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <GlassCard className="h-full">
                      <div className="text-center mb-4">
                        <div className={`w-16 h-16 bg-${component.color}/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                          <Icon className={`w-8 h-8 text-${component.color}`} />
                        </div>
                        <h3 className="text-xl font-semibold text-text mb-2">
                          {component.name}
                        </h3>
                        <p className="text-muted mb-4">
                          {component.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {component.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs bg-white/10 text-text px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Safety KPIs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <GlassCard>
              <h2 className="text-3xl font-bold text-text mb-8 text-center">
                Safety & Performance KPIs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {safetyKPIs.map((kpi, index) => (
                  <motion.div
                    key={kpi.metric}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-sm text-muted mb-2">{kpi.metric}</h3>
                      <div className="text-3xl font-bold text-text mb-2">{kpi.value}</div>
                      <p className="text-xs text-muted">{kpi.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Integration Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <GlassCard className="p-8">
              <h2 className="text-3xl font-bold text-text mb-8 text-center">
                Robotics Integration Architecture
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-neon-1/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bot className="w-10 h-10 text-neon-1" />
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-2">Robot Layer</h3>
                  <p className="text-muted text-sm">
                    Physical robots with sensors, actuators, and embedded systems
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-neon-2/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-10 h-10 text-neon-2" />
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-2">Safety & Security</h3>
                  <p className="text-muted text-sm">
                    OT security, fail-safe mechanisms, and intrusion detection
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-neon-3/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="w-10 h-10 text-neon-3" />
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-2">Platform Integration</h3>
                  <p className="text-muted text-sm">
                    Intleri platform integration with TSM and agent orchestration
                  </p>
                </motion.div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Rollout Strategy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mb-16"
          >
            <GlassCard>
              <h2 className="text-3xl font-bold text-text mb-6">
                Rollout Strategy & Implementation
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-neon-1 mb-4">
                    Phase 1: Foundation
                  </h3>
                  <ul className="space-y-2 text-muted">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-neon-1 rounded-full mt-2 flex-shrink-0" />
                      <span>Identity and authentication setup</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-neon-1 rounded-full mt-2 flex-shrink-0" />
                      <span>Basic safety protocols implementation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-neon-1 rounded-full mt-2 flex-shrink-0" />
                      <span>Service registry deployment</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neon-2 mb-4">
                    Phase 2: Integration
                  </h3>
                  <ul className="space-y-2 text-muted">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-neon-2 rounded-full mt-2 flex-shrink-0" />
                      <span>Robot capability registration</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-neon-2 rounded-full mt-2 flex-shrink-0" />
                      <span>Task schema standardization</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-neon-2 rounded-full mt-2 flex-shrink-0" />
                      <span>Platform integration testing</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neon-3 mb-4">
                    Phase 3: Operations
                  </h3>
                  <ul className="space-y-2 text-muted">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-neon-3 rounded-full mt-2 flex-shrink-0" />
                      <span>Production deployment</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-neon-3 rounded-full mt-2 flex-shrink-0" />
                      <span>Performance monitoring</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-neon-3 rounded-full mt-2 flex-shrink-0" />
                      <span>Continuous optimization</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text mb-4">
                    Phase 4: Intelligence
                  </h3>
                  <ul className="space-y-2 text-muted">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-text rounded-full mt-2 flex-shrink-0" />
                      <span>AI-powered optimization</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-text rounded-full mt-2 flex-shrink-0" />
                      <span>Predictive maintenance</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-text rounded-full mt-2 flex-shrink-0" />
                      <span>Autonomous decision making</span>
                    </li>
                  </ul>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold text-text mb-4">
              Ready to integrate robotics into your operations?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NeonButton variant="default" size="lg">
                Start Robotics Integration
              </NeonButton>
              <NeonButton variant="neon" size="lg">
                View Safety Protocols
              </NeonButton>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
