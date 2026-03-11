"use client";

import { motion } from "framer-motion";
import { Shield, Database, Cpu, Layers, Server } from "lucide-react";
import GlassCard from "../GlassCard";

const layerColorClasses: Record<
  string,
  { bg: string; border: string; text: string }
> = {
  "neon-1": { bg: "bg-neon-1/20", border: "border-neon-1/30", text: "text-neon-1" },
  "neon-2": { bg: "bg-neon-2/20", border: "border-neon-2/30", text: "text-neon-2" },
  "neon-3": { bg: "bg-neon-3/20", border: "border-neon-3/30", text: "text-neon-3" },
};

const architectureLayers = [
    {
        name: "Security-native control plane",
        description: "Runs before business logic. Policy-aware access (RBAC), tenant scoping, input controls, rate limits, fail-closed defaults, and tamper-evident audit trails.",
        icon: Shield,
        technologies: ["RBAC", "Policy Evaluation", "Tenant Scoping", "Fail-Closed", "Auditability"],
        color: "neon-2"
    },
    {
        name: "Event & intelligence layer",
        description: "Ingests and correlates operational events to support observability, operational awareness, detection, and governed workflows across workspaces.",
        icon: Database,
        technologies: ["Operational Events", "Correlation", "Detection", "Observability", "Audit Context"],
        color: "neon-1"
    },
    {
        name: "Modular app platform",
        description: "A suite of modular apps with clear boundaries. Capabilities can be activated by workspace and governed by policy, with measured service execution where it matters.",
        icon: Cpu,
        technologies: ["Apps", "Service Boundaries", "Governed Execution", "Tenant Isolation", "Workspace Routing"],
        color: "neon-3"
    },
    {
        name: "Workspace experience layer",
        description: "Role-aware, workspace-centric experiences that expose the right controls, workflows, and evidence for how work is executed.",
        icon: Layers,
        technologies: ["Role-Aware UX", "Control Surfaces", "Progressive Disclosure", "Workflow Guardrails", "Evidence Links"],
        color: "neon-1"
    },
    {
        name: "Operations Layer",
        description: "Operational intelligence and observability: logs, traces, metrics, SLOs, alerting, change history, and controlled rollouts.",
        icon: Server,
        technologies: ["Observability", "SLOs", "Alerting", "Change Audit", "Feature Flags"],
        color: "neon-2"
    }
];

export default function ArchitectureDiagram() {
    return (
        <GlassCard className="p-8">
            <h2 className="type-section-title text-text mb-8 text-center">
                System Architecture
            </h2>
            <div className="space-y-4">
                {architectureLayers.map((layer, index) => {
                    const Icon = layer.icon;
                    const colors = layerColorClasses[layer.color] ?? layerColorClasses["neon-1"];
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
                                <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center flex-shrink-0 ${colors.border} border`}>
                                    <Icon className={`w-6 h-6 ${colors.text}`} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="type-card-title text-text mb-1 truncate">
                                        {layer.name}
                                    </h3>
                                    <p className="type-card-body mb-2">{layer.description}</p>
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
