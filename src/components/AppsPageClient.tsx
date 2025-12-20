"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Search, Grid } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AppCard from "@/components/AppCard";
import appsData from "@/data/apps.json";


const categories = ["All", "Operations", "Intelligence", "Security", "Sustainability"];

export default function AppsPageClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // This is a mock filter since the JSON might not have categories yet. 
  // In a real app, you'd filter by actual category properties.
  const filteredApps = appsData.filter(
    (app) =>
      (selectedCategory === "All" || app.pillars.some(p => p.includes(selectedCategory) || Math.random() > 0.7)) && // Mock logic for demo
      (app.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.pillars.some((pillar) =>
          pillar.toLowerCase().includes(searchTerm.toLowerCase())
        ))
  );

  return (
    <div className="min-h-screen page-background">
      <NavBar />

      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full glass border border-white/10 px-4 py-1.5 text-xs md:text-sm text-neon-1 mb-6">
              <Grid className="w-4 h-4" />
              <span>Modular & Composable</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 break-words leading-tight">
              <span className="text-text">The </span>
              <span className="bg-gradient-to-r from-neon-1 via-neon-2 to-neon-3 bg-clip-text text-transparent">Application Suite</span>
            </h1>
            <p className="text-lg md:text-xl text-muted/90 max-w-2xl mx-auto mb-10 leading-relaxed">
              Assemble your perfect logistics operating system. Select from our library of interoperable
              modules to build a solution that fits your specific needs—nothing more, nothing less.
            </p>

            {/* Search and Filter Bar */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
              <div className="relative w-full md:w-2/3">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Find an application..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-12 bg-white/5 border-white/10 text-text placeholder:text-muted/50 rounded-xl focus:border-neon-1/50 focus:ring-neon-1/20 transition-all"
                />
              </div>
              <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
                <div className="flex gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${selectedCategory === cat
                          ? "bg-neon-1/10 text-neon-1 border border-neon-1/20"
                          : "text-muted hover:text-white hover:bg-white/5 border border-transparent"
                        }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
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
                transition={{ duration: 0.5, delay: index * 0.05 }}
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
              className="text-center py-20"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4">
                <Search className="w-8 h-8 text-muted" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No applications found</h3>
              <p className="text-muted">Try adjusting your search or filters.</p>
              <button
                onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}
                className="mt-6 text-neon-1 hover:underline"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
