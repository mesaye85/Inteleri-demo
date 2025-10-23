"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-white/10">
      {/* Trust Bar */}
      <div className="bg-gradient-to-r from-neon-1/10 via-neon-2/10 to-neon-3/10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-neon-1 rounded-full" />
              Zero‑Trust
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-neon-2 rounded-full" />
              Multi‑tenant isolation
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-neon-3 rounded-full" />
              Auditable by design
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-neon-1 rounded-full" />
              Observability built‑in
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <h3 className="text-2xl font-bold neon-text drop-shadow-[0_0_12px_rgba(99,230,255,0.35)] mb-4">
                Intleri
              </h3>
              <p className="text-muted leading-relaxed max-w-md">
                Security‑native platform that unifies apps, agents, and predictive analytics on a GPU‑native fabric.
              </p>
            </motion.div>
          </div>

          {/* Platform */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold text-text mb-4">Platform</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/platform" className="text-muted hover:text-neon-1 transition-colors">
                    Architecture
                  </Link>
                </li>
                <li>
                  <Link href="/tsm" className="text-muted hover:text-neon-1 transition-colors">
                    TSM
                  </Link>
                </li>
                <li>
                  <Link href="/agents" className="text-muted hover:text-neon-1 transition-colors">
                    Agents
                  </Link>
                </li>
                <li>
                  <Link href="/robotics" className="text-muted hover:text-neon-1 transition-colors">
                    Robotics
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Apps */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-text mb-4">Apps</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/apps" className="text-muted hover:text-neon-1 transition-colors">
                    All Apps
                  </Link>
                </li>
                <li>
                  <Link href="/demos" className="text-muted hover:text-neon-1 transition-colors">
                    Demos
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted hover:text-neon-1 transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-muted text-sm mb-4 md:mb-0">
            © 2024 Intleri. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-muted">
            <span>Security runs first. If in doubt, we fail closed and log.</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}