"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, Truck, Leaf, Radar } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import NeonButton from "@/components/NeonButton";

const demoFlows = [
  {
    id: "load-bidding",
    title: "Load Posting & Bidding Flow",
    description: "Complete workflow from load posting to carrier selection and award",
    icon: Truck,
    color: "neon-1",
    steps: [
      {
        step: 1,
        title: "Post Load",
        description: "Shipper creates load posting with requirements, pickup/delivery locations, and timeline",
        details: ["Origin & destination", "Equipment requirements", "Timeline constraints", "Special instructions"]
      },
      {
        step: 2,
        title: "Receive Bids",
        description: "Carriers submit competitive bids with pricing and capacity availability",
        details: ["Real-time bidding", "Capacity verification", "Pricing transparency", "Carrier ratings"]
      },
      {
        step: 3,
        title: "Award Load",
        description: "Intelligent matching algorithm selects optimal carrier based on multiple factors",
        details: ["Algorithm scoring", "Performance history", "Geographic optimization", "Cost efficiency"]
      },
      {
        step: 4,
        title: "Track Execution",
        description: "Real-time tracking with automated updates and exception handling",
        details: ["GPS tracking", "ETA updates", "Exception alerts", "Proof of delivery"]
      }
    ]
  },
  {
    id: "emissions-reporting",
    title: "Emissions Tracking & Reporting",
    description: "Comprehensive carbon footprint monitoring with target tracking and reporting",
    icon: Leaf,
    color: "neon-2",
    steps: [
      {
        step: 1,
        title: "Data Collection",
        description: "Automatic collection of trip data, fuel consumption, and route information",
        details: ["Telemetry data", "Fuel consumption", "Route optimization", "Distance tracking"]
      },
      {
        step: 2,
        title: "Calculate Emissions",
        description: "Real-time CO₂ calculation using industry-standard emission factors",
        details: ["Trip-level calculations", "Fuel type factors", "Vehicle efficiency", "Route optimization"]
      },
      {
        step: 3,
        title: "Target Tracking",
        description: "Monitor progress against sustainability targets and goals",
        details: ["Target setting", "Progress monitoring", "Variance analysis", "Alert notifications"]
      },
      {
        step: 4,
        title: "Generate Reports",
        description: "Automated reporting with regulatory compliance and stakeholder insights",
        details: ["Regulatory compliance", "Executive dashboards", "Trend analysis", "Export capabilities"]
      }
    ]
  },
  {
    id: "intelligence-assessment",
    title: "Intelligence Risk Assessment",
    description: "Multi-domain risk analysis for strategic locations and operations",
    icon: Radar,
    color: "neon-3",
    steps: [
      {
        step: 1,
        title: "Location Analysis",
        description: "Comprehensive risk assessment across multiple domains for specific locations",
        details: ["Geographic analysis", "Weather patterns", "Traffic conditions", "Infrastructure status"]
      },
      {
        step: 2,
        title: "Risk Scoring",
        description: "Multi-factor risk scoring with configurable weights and thresholds",
        details: ["Ten risk domains", "Weighted scoring", "Threshold configuration", "Real-time updates"]
      },
      {
        step: 3,
        title: "Generate Briefs",
        description: "Automated generation of location briefs with actionable insights",
        details: ["Executive summaries", "Risk breakdowns", "Recommendations", "Historical trends"]
      },
      {
        step: 4,
        title: "Monitor & Alert",
        description: "Continuous monitoring with automated alerts for risk threshold breaches",
        details: ["Real-time monitoring", "Alert notifications", "Trend analysis", "Predictive insights"]
      }
    ]
  }
];

export default function DemosPageClient() {
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
              <span className="text-text">Interactive </span>
              <span className="bg-gradient-to-r from-neon-1 via-neon-3 to-neon-1 bg-clip-text text-transparent">Demos</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto mb-6">
              Explore guided flows showcasing load bidding, emissions tracking, and risk insights.
            </p>
            <div className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-neon-1/60 to-transparent" />
          </motion.div>

          <div className="space-y-16">
            {demoFlows.map((demo, demoIndex) => {
              const Icon = demo.icon;
              return (
                <motion.div
                  key={demo.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: demoIndex * 0.2 }}
                  className="mb-16"
                >
                  <GlassCard className="p-8">
                    <div className="flex items-start space-x-6 mb-8">
                      <div className={`w-16 h-16 bg-${demo.color}/20 rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-8 h-8 text-${demo.color}`} />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-3xl font-bold text-text mb-2">{demo.title}</h2>
                        <p className="text-xl text-muted mb-4">{demo.description}</p>
                        <div className="flex flex-wrap gap-3">
                          <NeonButton variant="neon" size="sm">
                            Launch guided flow
                          </NeonButton>
                          <NeonButton variant="default" size="sm">
                            Watch overview
                          </NeonButton>
                          <NeonButton variant="ghost" size="sm">
                            Share playbook
                          </NeonButton>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {demo.steps.map((step) => (
                        <div key={step.step} className="rounded-2xl bg-white/5 border border-white/10 p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <span className="text-sm font-semibold text-muted/80">Step {step.step}</span>
                              <CheckCircle className="w-4 h-4 text-neon-1" />
                            </div>
                            <Clock className="w-4 h-4 text-muted" />
                          </div>
                          <h3 className="text-xl font-semibold text-text mb-2">{step.title}</h3>
                          <p className="text-sm text-muted leading-relaxed mb-4">{step.description}</p>
                          <ul className="space-y-2 text-sm text-muted/90">
                            {step.details.map((detail) => (
                              <li key={detail} className="flex items-center gap-2">
                                <ArrowRight className="w-3 h-3 text-neon-1" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="mt-10 flex flex-wrap gap-4">
                      <NeonButton variant="default" size="lg">
                        Request sandbox access
                      </NeonButton>
                      <NeonButton variant="neon" size="lg">
                        Schedule live walkthrough
                      </NeonButton>
                      <NeonButton variant="ghost" size="lg">
                        Download checklist
                      </NeonButton>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

