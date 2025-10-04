import { motion } from "framer-motion";
import { Bot, Network, Database, Eye, Zap, Settings } from "lucide-react";
import { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import NeonButton from "@/components/NeonButton";

export const metadata: Metadata = {
  title: "Agentification (MCP) - Intleri",
  description: "Autonomous agent ecosystem powered by Model Context Protocol (MCP) for intelligent logistics operations with self-healing, self-optimizing capabilities.",
  keywords: "agentification, MCP, model context protocol, autonomous agents, logistics automation",
};

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

export default function AgentsPage() {
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
            <div className="text-6xl mb-4">🤖</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-text">Agentification </span>
              <span className="neon-text">(MCP)</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto mb-8">
              Autonomous agent ecosystem powered by Model Context Protocol (MCP) for intelligent 
              logistics operations with self-healing, self-optimizing capabilities.
            </p>
          </motion.div>

          {/* MCP Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <GlassCard className="p-8">
              <h2 className="text-3xl font-bold text-text mb-6">
                Model Context Protocol (MCP)
              </h2>
              <div className="prose prose-lg text-muted max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  MCP is our proprietary protocol for agent communication and orchestration. It provides 
                  standardized interfaces for agent discovery, communication, and coordination while 
                  maintaining security, scalability, and observability.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-neon-1 mb-4">Standardized</h3>
                    <p className="text-muted">
                      Common protocol for all agent interactions with version compatibility 
                      and backward support.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neon-2 mb-4">Secure</h3>
                    <p className="text-muted">
                      End-to-end encryption, authentication, and authorization for all 
                      agent communications.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neon-3 mb-4">Scalable</h3>
                    <p className="text-muted">
                      Horizontal scaling with load balancing, auto-discovery, and 
                      dynamic resource allocation.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Architecture Components */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-text mb-8 text-center">
              Agent Architecture Components
            </h2>
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

          {/* Orchestration Blueprint */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <GlassCard className="p-8">
              <h2 className="text-3xl font-bold text-text mb-8 text-center">
                Agent Orchestration Blueprint
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-neon-1/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bot className="w-10 h-10 text-neon-1" />
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-2">Agent Node 1</h3>
                  <p className="text-muted text-sm">
                    Route Optimization<br />
                    Demand Forecasting<br />
                    Load Matching
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-neon-2/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Network className="w-10 h-10 text-neon-2" />
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-2">MCP Hub</h3>
                  <p className="text-muted text-sm">
                    Protocol Translation<br />
                    Load Balancing<br />
                    Health Monitoring
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-neon-3/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bot className="w-10 h-10 text-neon-3" />
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-2">Agent Node 2</h3>
                  <p className="text-muted text-sm">
                    Risk Assessment<br />
                    Performance Analytics<br />
                    Anomaly Detection
                  </p>
                </motion.div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Agent Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-text mb-8 text-center">
              Agent Types & Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {agentTypes.map((type, index) => (
                <motion.div
                  key={type.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <GlassCard className="h-full">
                    <h3 className="text-xl font-semibold text-text mb-4">
                      {type.name}
                    </h3>
                    <p className="text-muted mb-4 leading-relaxed">
                      {type.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-neon-1 mb-2">Examples:</h4>
                      {type.examples.map((example) => (
                        <div key={example} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-neon-1 rounded-full flex-shrink-0" />
                          <span className="text-sm text-muted">{example}</span>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mb-16"
          >
            <GlassCard>
              <h2 className="text-3xl font-bold text-text mb-6">
                Benefits of Agentification
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-neon-1 mb-4">
                    Operational Excellence
                  </h3>
                  <ul className="space-y-2 text-muted">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-neon-1 rounded-full mt-2 flex-shrink-0" />
                      <span>24/7 autonomous operations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-neon-1 rounded-full mt-2 flex-shrink-0" />
                      <span>Self-healing and auto-recovery</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-neon-1 rounded-full mt-2 flex-shrink-0" />
                      <span>Continuous optimization</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-neon-1 rounded-full mt-2 flex-shrink-0" />
                      <span>Predictive maintenance</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neon-2 mb-4">
                    Intelligence & Insights
                  </h3>
                  <ul className="space-y-2 text-muted">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-neon-2 rounded-full mt-2 flex-shrink-0" />
                      <span>Real-time decision making</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-neon-2 rounded-full mt-2 flex-shrink-0" />
                      <span>Pattern recognition and learning</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-neon-2 rounded-full mt-2 flex-shrink-0" />
                      <span>Anomaly detection and alerting</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-neon-2 rounded-full mt-2 flex-shrink-0" />
                      <span>Performance analytics and reporting</span>
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
              Ready to deploy intelligent agents?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NeonButton variant="default" size="lg">
                Start with Agents
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
