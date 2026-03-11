"use client";

import { motion } from "framer-motion";
import { Shield, Server, BarChart3 } from "lucide-react";
import GlassCard from "../GlassCard";

const platformFeatures = [
    {
        title: "Security-native foundation",
        description: "Security runs first: tenant scoping, policy-aware access, fail-closed defaults, and auditability across actions and data.",
        icon: Shield
    },
    {
        title: "Governed execution",
        description: "Modular apps and bounded automation. Execution is explicit, policy-checked, and observable—designed for oversight, not autonomy theater.",
        icon: BarChart3
    },
    {
        title: "Operational intelligence",
        description: "Event-driven awareness, anomaly detection, and decision support—paired with clear service boundaries and measurable execution (TSM).",
        icon: Server
    }
];

export default function ValuePillars() {
    return (
        <>
            <h2 className="text-3xl font-bold text-text mb-8 text-center">
                Platform principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {platformFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <GlassCard className="h-full p-6 md:p-8">
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
        </>
    );
}
