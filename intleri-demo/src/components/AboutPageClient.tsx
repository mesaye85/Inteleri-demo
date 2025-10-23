"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import NeonButton from "@/components/NeonButton";
import { Input } from "@/components/ui/input";

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Chief Executive Officer",
    description:
      "Former VP of Engineering at major logistics companies with 15+ years in supply chain technology.",
    avatar: "👨‍💼"
  },
  {
    name: "Sarah Johnson",
    role: "Chief Technology Officer",
    description:
      "Ex-Google engineer specializing in distributed systems and AI/ML for logistics optimization.",
    avatar: "👩‍💻"
  },
  {
    name: "Michael Rodriguez",
    role: "Chief Security Officer",
    description:
      "Cybersecurity expert with deep experience in enterprise security and compliance frameworks.",
    avatar: "👨‍🔒"
  },
  {
    name: "Emily Watson",
    role: "Head of Product",
    description:
      "Product leader with extensive experience in B2B SaaS platforms and logistics technology.",
    avatar: "👩‍💼"
  }
];

const values = [
  {
    title: "Security First",
    description:
      "Every decision is made with security and compliance as the foundation, ensuring our customers’ data and operations are always protected.",
    icon: "🛡️"
  },
  {
    title: "Innovation Driven",
    description:
      "We continuously push the boundaries of what’s possible in logistics technology, leveraging cutting-edge AI and automation.",
    icon: "🚀"
  },
  {
    title: "Customer Success",
    description:
      "Our success is measured by our customers’ success. We’re committed to delivering value that drives real business outcomes.",
    icon: "🎯"
  },
  {
    title: "Transparency",
    description:
      "We believe in open communication, clear pricing, and transparent operations that build trust with our partners.",
    icon: "🔍"
  }
];

export default function AboutPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              <span className="text-text">About </span>
              <span className="bg-gradient-to-r from-neon-1 via-neon-3 to-neon-1 bg-clip-text text-transparent">Intleri</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto mb-6">
              We’re building the future of logistics intelligence through secure, modular, and intelligent platform solutions that transform how businesses manage their supply chains.
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
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <h2 className="text-3xl font-bold text-text mb-4">Our Mission</h2>
                  <p className="text-lg text-muted leading-relaxed">
                    Intleri is creating a unified intelligence layer for logistics operations that connects data, orchestrates decisions, and secures every workflow. We believe that predictable, resilient, and auditable logistics should be accessible to every enterprise.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <p className="text-sm uppercase tracking-widest text-muted mb-2">Contact</p>
                  <div className="space-y-4 text-muted">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-neon-1" />
                      <span>hello@intleri.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-neon-1" />
                      <span>+1 (415) 555-0123</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-neon-1" />
                      <span>San Francisco & Remote</span>
                    </div>
                  </div>
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
            <h2 className="text-3xl font-bold text-text text-center mb-10">Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teamMembers.map((member) => (
                <GlassCard key={member.name} className="p-6 flex items-start gap-4">
                  <div className="text-4xl" aria-hidden>
                    {member.avatar}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text">{member.name}</h3>
                    <p className="text-sm uppercase tracking-widest text-muted/80 mb-2">{member.role}</p>
                    <p className="text-sm text-muted leading-relaxed">{member.description}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-text text-center mb-10">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value) => (
                <GlassCard key={value.title} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl" aria-hidden>
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-text mb-2">{value.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-16"
          >
            <GlassCard className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold text-text mb-4">Join the waitlist</h2>
                  <p className="text-muted mb-6">
                    Request early access to the Intleri platform. We’ll coordinate a secure onboarding session and tailored demo for your operations.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white/5 border-white/10 text-text placeholder:text-muted"
                      />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Business email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-white/5 border-white/10 text-text placeholder:text-muted"
                      />
                    </div>
                    <Input
                      name="company"
                      placeholder="Company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-white/5 border-white/10 text-text placeholder:text-muted"
                    />
                    <textarea
                      name="message"
                      placeholder="What do you want to explore?"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-xl bg-white/5 border border-white/10 p-4 text-sm text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-neon-1"
                      rows={4}
                    />

                    <NeonButton type="submit" variant="neon" className="w-full md:w-auto">
                      <Send className="w-4 h-4 mr-2" />
                      Request access
                    </NeonButton>
                  </form>

                  {isSubmitted && (
                    <div className="mt-4 inline-flex items-center gap-2 text-emerald-300 text-sm">
                      <CheckCircle className="w-4 h-4" />
                      <span>Request received. We’ll be in touch shortly.</span>
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-text mb-2">Why teams choose Intleri</h3>
                    <ul className="space-y-3 text-sm text-muted">
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-neon-1" />
                        SOC 2 controls mapped to every capability.
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-neon-2" />
                        GPU-native inference fabric for predictive intelligence.
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-neon-3" />
                        Composable app and agent ecosystem for rapid automation.
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                    <h3 className="text-xl font-semibold text-text mb-2">Our locations</h3>
                    <p className="text-sm text-muted mb-4">
                      Headquarters in San Francisco with distributed teams across North America and Europe.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted/90">
                      <div>
                        <p className="text-text font-semibold">San Francisco</p>
                        <p>Mission District</p>
                        <p>Engineering & Product</p>
                      </div>
                      <div>
                        <p className="text-text font-semibold">Austin</p>
                        <p>East Austin</p>
                        <p>Go-to-Market</p>
                      </div>
                      <div>
                        <p className="text-text font-semibold">Chicago</p>
                        <p>Fulton Market</p>
                        <p>Operations</p>
                      </div>
                      <div>
                        <p className="text-text font-semibold">Remote</p>
                        <p>North America & EU</p>
                        <p>Support & Success</p>
                      </div>
                    </div>
                  </div>
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
              <h2 className="text-3xl font-bold text-text mb-6">Compliance and Trust</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Security Controls",
                    description:
                      "Zero-trust perimeter with tenant isolation, RBAC, continuous vulnerability scanning, and SOC 2 controls mapped to each workflow."
                  },
                  {
                    title: "Data Governance",
                    description:
                      "Auditable data lineage, encryption in transit and at rest, and signed releases for every deployment."
                  },
                  {
                    title: "Operational Excellence",
                    description:
                      "24/7 monitoring, automated incident response, and post-incident retrospectives shared transparently."
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

