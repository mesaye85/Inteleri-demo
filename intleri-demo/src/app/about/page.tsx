"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import NeonButton from "@/components/NeonButton";

// Note: Metadata should be added to a layout.tsx file in this directory for client components

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Chief Executive Officer",
    description: "Former VP of Engineering at major logistics companies with 15+ years in supply chain technology.",
    avatar: "👨‍💼"
  },
  {
    name: "Sarah Johnson",
    role: "Chief Technology Officer",
    description: "Ex-Google engineer specializing in distributed systems and AI/ML for logistics optimization.",
    avatar: "👩‍💻"
  },
  {
    name: "Michael Rodriguez",
    role: "Chief Security Officer",
    description: "Cybersecurity expert with deep experience in enterprise security and compliance frameworks.",
    avatar: "👨‍🔒"
  },
  {
    name: "Emily Watson",
    role: "Head of Product",
    description: "Product leader with extensive experience in B2B SaaS platforms and logistics technology.",
    avatar: "👩‍💼"
  }
];

const values = [
  {
    title: "Security First",
    description: "Every decision is made with security and compliance as the foundation, ensuring our customers’ data and operations are always protected.",
    icon: "🛡️"
  },
  {
    title: "Innovation Driven",
    description: "We continuously push the boundaries of what’s possible in logistics technology, leveraging cutting-edge AI and automation.",
    icon: "🚀"
  },
  {
    title: "Customer Success",
    description: "Our success is measured by our customers’ success. We’re committed to delivering value that drives real business outcomes.",
    icon: "🎯"
  },
  {
    title: "Transparency",
    description: "We believe in open communication, clear pricing, and transparent operations that build trust with our partners.",
    icon: "🔍"
  }
];

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit to a backend
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
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-text">About </span>
              <span className="neon-text">Intleri</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto mb-8">
              We’re building the future of logistics intelligence through secure, modular,
              and intelligent platform solutions that transform how businesses manage their supply chains.
            </p>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <GlassCard className="p-8">
              <h2 className="text-3xl font-bold text-text mb-6">
                Our Mission
              </h2>
              <div className="prose prose-lg text-muted max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  At Intleri, we believe that logistics intelligence should be secure, modular, and accessible. 
                  Our mission is to democratize advanced logistics capabilities through our platform, enabling 
                  businesses of all sizes to leverage the power of AI, automation, and real-time intelligence 
                  in their supply chain operations.
                </p>
                <p className="text-lg leading-relaxed">
                  We’re committed to building a platform that not only meets today’s challenges but anticipates
                  tomorrow’s opportunities, providing our customers with the tools they need to thrive in an
                  increasingly complex and dynamic global economy.
                </p>
              </div>
            </GlassCard>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-text mb-8 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <GlassCard className="h-full">
                    <div className="text-center">
                      <div className="text-4xl mb-4">{value.icon}</div>
                      <h3 className="text-xl font-semibold text-text mb-3">
                        {value.title}
                      </h3>
                      <p className="text-muted leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-text mb-8 text-center">
              Leadership Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <GlassCard className="h-full text-center">
                    <div className="text-6xl mb-4">{member.avatar}</div>
                    <h3 className="text-xl font-semibold text-text mb-2">
                      {member.name}
                    </h3>
                    <p className="text-neon-1 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Info */}
              <GlassCard className="p-8">
                <h2 className="text-3xl font-bold text-text mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-neon-1 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-text mb-1">Email</h3>
                      <p className="text-muted">contact@intleri.com</p>
                      <p className="text-muted">support@intleri.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-neon-2 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-text mb-1">Phone</h3>
                      <p className="text-muted">+1 (555) 123-4567</p>
                      <p className="text-muted">Sales: +1 (555) 123-4568</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-neon-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-text mb-1">Office</h3>
                      <p className="text-muted">123 Innovation Drive</p>
                      <p className="text-muted">San Francisco, CA 94105</p>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Contact Form */}
              <GlassCard className="p-8">
                <h2 className="text-3xl font-bold text-text mb-6">
                  Send us a Message
                </h2>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-text mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted">
                      Thank you for reaching out. We’ll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white/5 border-white/15 text-text placeholder:text-muted"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-white/5 border-white/15 text-text placeholder:text-muted"
                      />
                    </div>
                    <div>
                      <Input
                        type="text"
                        name="company"
                        placeholder="Company"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-white/5 border-white/15 text-text placeholder:text-muted"
                      />
                    </div>
                    <div>
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-3 py-2 bg-white/5 border border-white/15 rounded-md text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-neon-1"
                      />
                    </div>
                    <NeonButton
                      type="submit"
                      variant="default"
                      className="w-full"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </NeonButton>
                  </form>
                )}
              </GlassCard>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center"
          >
            <GlassCard>
              <h2 className="text-3xl font-bold text-text mb-4">
                Ready to Transform Your Logistics?
              </h2>
              <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
                Join forward-thinking companies that are already leveraging Intleri’s platform
                to optimize their supply chain operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NeonButton variant="default" size="lg">
                  Start Free Trial
                </NeonButton>
                <NeonButton variant="neon" size="lg">
                  Schedule Demo
                </NeonButton>
                <NeonButton variant="ghost" size="lg">
                  View Pricing
                </NeonButton>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
