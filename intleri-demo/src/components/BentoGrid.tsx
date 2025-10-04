import { motion } from "framer-motion";
import { Shield, ChartLine, Truck, Leaf, Radar, Zap } from "lucide-react";
import GlassCard from "./GlassCard";

const features = [
  {
    title: "SECaaS",
    description: "Tenant isolation, RBAC, fail-closed controls, and ML-assisted anomaly detection with full audit trails.",
    icon: Shield,
    className: "col-span-1 md:col-span-2",
  },
  {
    title: "TPI Analytics",
    description: "Cross-domain KPIs, anomaly detection, forecasting across 19 operational domains.",
    icon: ChartLine,
    className: "col-span-1",
  },
  {
    title: "Loadboard → Carrier",
    description: "Marketplace + execution + unified tracking with geofences and exception handling.",
    icon: Truck,
    className: "col-span-1",
  },
  {
    title: "Emissions",
    description: "Trip-level capture, targets, rollups with intensity metrics and target tracking.",
    icon: Leaf,
    className: "col-span-1",
  },
  {
    title: "Intelligence",
    description: "Risk domains scoring, location briefs, executive reports with configurable weights.",
    icon: Radar,
    className: "col-span-1",
  },
  {
    title: "TSM & Agents",
    description: "Tokenized execution, MCP orchestration, and robotics interop with safety protocols.",
    icon: Zap,
    className: "col-span-1 md:col-span-2",
  },
];

export default function BentoGrid() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-text">Platform </span>
            <span className="neon-text">Capabilities</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Comprehensive logistics intelligence powered by modular architecture and advanced security.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={feature.className}
              >
                <GlassCard hover className="h-full">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-neon-1/20 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-neon-1" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-text mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
