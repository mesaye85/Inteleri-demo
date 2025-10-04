import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, Truck, Leaf, Radar } from "lucide-react";
import { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import NeonButton from "@/components/NeonButton";

export const metadata: Metadata = {
  title: "Interactive Demos - Intleri",
  description: "Experience the power of Intleri's platform through guided demonstrations of key workflows and capabilities including load bidding, emissions tracking, and risk assessment.",
  keywords: "logistics demos, platform demonstrations, interactive demos, workflow examples",
};

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

export default function DemosPage() {
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
              <span className="text-text">Interactive </span>
              <span className="neon-text">Demos</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto mb-8">
              Experience the power of Intleri's platform through guided demonstrations 
              of key workflows and capabilities.
            </p>
          </motion.div>

          {/* Demo Flows */}
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
                    {/* Demo Header */}
                    <div className="flex items-start space-x-6 mb-8">
                      <div className={`w-16 h-16 bg-${demo.color}/20 rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-8 h-8 text-${demo.color}`} />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-3xl font-bold text-text mb-2">
                          {demo.title}
                        </h2>
                        <p className="text-xl text-muted mb-4">
                          {demo.description}
                        </p>
                        <NeonButton variant="neon" size="sm">
                          Start Demo
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </NeonButton>
                      </div>
                    </div>

                    {/* Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {demo.steps.map((step, stepIndex) => (
                        <motion.div
                          key={step.step}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: stepIndex * 0.1 }}
                          className="relative"
                        >
                          {/* Connection Line */}
                          {stepIndex < demo.steps.length - 1 && (
                            <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-neon-1 to-neon-2 transform translate-x-4 z-0" />
                          )}
                          
                          <div className="relative z-10">
                            <div className="text-center mb-4">
                              <div className="relative inline-block">
                                <div className={`w-16 h-16 bg-${demo.color}/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                                  <span className="text-2xl font-bold text-text">{step.step}</span>
                                </div>
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-neon-1 rounded-full flex items-center justify-center">
                                  <CheckCircle className="w-4 h-4 text-bg" />
                                </div>
                              </div>
                              <h3 className="text-lg font-semibold text-text mb-2">
                                {step.title}
                              </h3>
                              <p className="text-muted text-sm mb-4">
                                {step.description}
                              </p>
                            </div>
                            
                            {/* Step Details */}
                            <div className="space-y-2">
                              {step.details.map((detail, detailIndex) => (
                                <motion.div
                                  key={detailIndex}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.4, delay: detailIndex * 0.1 }}
                                  className="flex items-center space-x-2"
                                >
                                  <div className="w-2 h-2 bg-neon-1 rounded-full flex-shrink-0" />
                                  <span className="text-xs text-muted">{detail}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Demo Actions */}
                    <div className="mt-8 pt-6 border-t border-panel-border">
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <NeonButton variant="default">
                          <Clock className="w-4 h-4 mr-2" />
                          Try Live Demo
                        </NeonButton>
                        <NeonButton variant="neon">
                          View Documentation
                        </NeonButton>
                        <NeonButton variant="ghost">
                          Schedule Call
                        </NeonButton>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16"
          >
            <GlassCard>
              <div className="text-center">
                <h2 className="text-3xl font-bold text-text mb-4">
                  Ready for More?
                </h2>
                <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
                  Explore additional capabilities, schedule a personalized demo, 
                  or dive deeper into our platform documentation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <NeonButton variant="default" size="lg">
                    Schedule Custom Demo
                  </NeonButton>
                  <NeonButton variant="neon" size="lg">
                    Explore Platform
                  </NeonButton>
                  <NeonButton variant="ghost" size="lg">
                    Contact Sales
                  </NeonButton>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
