"use client";

import { motion } from "framer-motion";
import { Bot, Network, Database, Eye, Zap, Settings } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import NeonButton from "@/components/NeonButton";

const agentComponents = [
  {
    name: "Agent Host",
    description: "Runtime environment for agent execution with resource management and isolation",
    icon: Bot,
    technologies: ["Docker", "Kubernetes", "Resource Limits", "Security Contexts"],
    color: "neon-1"
  },
  {
    name: "Protocol Layer",
    description: "MCP (Model Context Protocol) for standardized agent communication",
    icon: Network,
    technologies: ["MCP Protocol", "JSON-RPC", "WebSocket", "gRPC"],
    color: "neon-2"
  },
  {
    name: "Service Registry",
    description: "Dynamic discovery and registration of agent capabilities and services",
    icon: Database,
    technologies: ["Consul", "Etcd", "Health Checks", "Load Balancing"],
    color: "neon-3"
  },
  {
    name: "Observability",
    description: "Comprehensive monitoring, logging, and tracing for agent operations",
    icon: Eye,
    technologies: ["Prometheus", "Jaeger", "ELK Stack", "Custom Metrics"],
    color: "neon-1"
  },
  {
    name: "Data Plane",
    description: "High-performance data processing and storage for agent interactions",
    icon: Zap,
    technologies: ["Apache Kafka", "Redis", "Vector DB", "Stream Processing"],
    color: "neon-2"
  },
  {
    name: "Control Plane",
    description: "Orchestration, configuration management, and policy enforcement",
    icon: Settings,
    technologies: ["Kubernetes", "Istio", "Policy Engine", "Config Management"],
    color: "neon-3"
  }
];

const agentTypes = [
  {
    name: "Task Agents",
    description: "Specialized agents for specific operational tasks like routing optimization, demand forecasting, and inventory management.",
    examples: ["Route Optimizer", "Demand Predictor", "Inventory Balancer"]
  },
  {
    name: "Integration Agents",
    description: "Bridge agents that connect external systems and APIs to the Intleri platform.",
    examples: ["ERP Connector", "TMS Bridge", "Weather API Agent"]
  },
  {
    name: "Intelligence Agents",
    description: "AI-powered agents that provide insights, recommendations, and automated decision-making.",
    examples: ["Risk Assessor", "Performance Analyzer", "Anomaly Detector"]
  }
];

export default function AgentsPageClient() {
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
              <span className="text-text">Agentification </span>
              <span className="bg-gradient-to-r from-neon-1 via-neon-3 to-neon-1 bg-clip-text text-transparent">(MCP)</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto mb-6">
              Autonomous agent ecosystem powered by Model Context Protocol (MCP) for intelligent logistics operations with self-healing, self-optimizing capabilities.
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
              <h2 className="text-3xl font-bold text-text mb-6">Model Context Protocol (MCP)</h2>
              <div className="prose prose-lg text-muted max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  MCP is our proprietary protocol for agent communication and orchestration. It provides standardized interfaces for agent discovery, communication, and coordination while maintaining security, scalability, and observability.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-neon-1 mb-4">Standardized</h3>
                    <p className="text-muted">
                      Common protocol for all agent interactions with version compatibility and backward support.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neon-2 mb-4">Secure</h3>
                    <p className="text-muted">
                      End-to-end encryption, authentication, and authorization for all agent communications.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neon-3 mb-4">Scalable</h3>
                    <p className="text-muted">
                      Horizontal scaling with load balancing, auto-discovery, and dynamic resource allocation.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-text mb-8 text-center">Agent Architecture Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agentComponents.map((component, index) => {
                const Icon = component.icon;
                return (
                  <motion.div
                    key={component.name}
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
                          <h3 className="text-xl font-semibold text-text mb-2">{component.name}</h3>
                          <p className="text-sm text-muted mb-4">{component.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {component.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="text-xs text-muted/80 bg-white/5 border border-white/10 px-2 py-1 rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
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
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-16"
          >
            <GlassCard className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-text mb-4">Agent Types</h2>
                  <p className="text-muted mb-6">
                    Intleri agents operate across operational, integration, and intelligence layers. Each type is bound to strict policy and security envelopes.
                  </p>
                  <NeonButton variant="neon" size="lg" className="px-6">
                    Explore agent docs
                  </NeonButton>
                </div>
                <div className="space-y-6">
                  {agentTypes.map((type) => (
                    <div key={type.name}>
                      <h3 className="text-xl font-semibold text-text mb-2">{type.name}</h3>
                      <p className="text-sm text-muted leading-relaxed mb-3">{type.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {type.examples.map((example) => (
                          <span
                            key={example}
                            className="text-xs text-muted/80 bg-white/5 border border-white/10 px-2 py-1 rounded-full"
                          >
                            {example}
                          </span>
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
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <GlassCard className="p-8">
              <h2 className="text-3xl font-bold text-text mb-6">Safety & Compliance</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Security Envelope",
                    description:
                      "Zero-trust isolation with attested runtimes, signed tools, and SOC 2 controls mapped to every agent capability."
                  },
                  {
                    title: "Observability",
                    description:
                      "Full traceability with event sourcing, heatmaps, and safety circuits for anomalous behavior."
                  },
                  {
                    title: "Governance",
                    description:
                      "Policy engine with approvals, audit trails, and runbooks for rollback and containment."
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

