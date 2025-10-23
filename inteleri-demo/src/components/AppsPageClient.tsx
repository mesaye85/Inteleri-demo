"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AppCard from "@/components/AppCard";
import appsData from "@/data/apps.json";

export default function AppsPageClient() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredApps = appsData.filter(
    (app) =>
      app.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.pillars.some((pillar) =>
        pillar.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="min-h-screen">
      <NavBar />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-text">Our </span>
              <span className="neon-text">App Suite</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto mb-8">
              Comprehensive logistics intelligence through our modular application ecosystem.
              Each app is designed to work independently or seamlessly integrate with others.
            </p>
            
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted w-5 h-5" />
              <Input
                type="text"
                placeholder="Search apps..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/5 border-white/15 text-text placeholder:text-muted"
              />
            </div>
          </motion.div>

          {/* Apps Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredApps.map((app, index) => (
              <motion.div
                key={app.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <AppCard
                  slug={app.slug}
                  title={app.title}
                  summary={app.summary}
                  pillars={app.pillars}
                />
              </motion.div>
            ))}
          </motion.div>

          {filteredApps.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted text-lg">No apps found matching your search.</p>
            </motion.div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}


