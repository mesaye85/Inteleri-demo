"use client";

import { motion } from "framer-motion";
import { Shield, Database, Cpu, Layers, Server } from "lucide-react";
import GlassCard from "../GlassCard";

const architectureLayers = [
    {
        name: "Security Layer (SECaaS)",
        description: "Security as a Service: runs before business logic. Role-based access control (RBAC), tenant isolation, input validation, rate limiting, anomaly detection, and tamper-evident, detailed audit logs.",
        icon: Shield,
        technologies: ["RBAC", "Tenant Isolation", "Input Validation", "Rate Limiting", "ML Threat Detection"],
        color: "neon-2"
    },
    {
        name: "Signal Fabric (Data Layer)",
        description: "Real-time data layer that connects your operations. Event streaming and processing; single, secured source of truth for telemetry, status, KPIs, and model outputs.",
        icon: Database,
        technologies: ["Event Streaming", "Telemetry", "Status Tracking", "KPI Monitoring", "Model Outputs"],
        color: "neon-1"
    },
    {
        name: "Application Layer",
        description: "Modular apps (Analytics, Loadboard, Carrier, Emissions, Intelligence, OES, Rating, Inventory, Security, Trust Pilot, Warehouse, Broker). Clean boundaries; microservice‑ready.",
        icon: Cpu,
        technologies: ["Analytics", "Loadboard", "Carrier", "Emissions", "Intelligence"],
        color: "neon-3"
    },
    {
        name: "Experience Layer (Next.js/React)",
        description: "Fast, role-aware UI with real-time feedback. High‑performance, motion‑assisted interface (custom neon/glass design) that adapts to your role.",
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

export default function ArchitectureDiagram() {
    return (
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
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <GlassCard
                                hover
                                className="flex items-center space-x-6 p-4 border-white/10"
                            >
                                <div className={`w-12 h-12 bg-${layer.color}/20 rounded-lg flex items-center justify-center flex-shrink-0`}>
                                    <Icon className={`w-6 h-6 text-${layer.color}`} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-xl font-semibold text-text mb-1 truncate">
                                        {layer.name}
                                    </h3>
                                    <p className="text-muted mb-2 text-sm leading-relaxed">{layer.description}</p>
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
                            </GlassCard>
                        </motion.div>
                    );
                })}
            </div>
        </GlassCard>
    );
}
