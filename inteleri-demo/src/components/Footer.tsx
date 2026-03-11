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
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <h3 className="text-2xl font-bold neon-text drop-shadow-[0_0_12px_rgba(99,230,255,0.35)] mb-4">
                Inteleri
              </h3>
              <p className="text-muted leading-relaxed max-w-md">
                Security-native logistics intelligence platform that unifies operational workspaces, governed automation, and tokenized execution.
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
              <h4 className="text-lg font-semibold text-text mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/platform" className="text-muted hover:text-neon-1 transition-colors">
                    Platform
                  </Link>
                </li>
                <li>
                  <Link href="/platform#carrier" className="text-muted hover:text-neon-1 transition-colors">
                    Carrier Operations
                  </Link>
                </li>
                <li>
                  <Link href="/platform#broker" className="text-muted hover:text-neon-1 transition-colors">
                    Broker Desk
                  </Link>
                </li>
                <li>
                  <Link href="/platform#shipper" className="text-muted hover:text-neon-1 transition-colors">
                    Shipper Control Tower
                  </Link>
                </li>
                <li>
                  <Link href="/platform#risk" className="text-muted hover:text-neon-1 transition-colors">
                    Risk &amp; Intelligence
                  </Link>
                </li>
                <li>
                  <Link href="/platform#admin" className="text-muted hover:text-neon-1 transition-colors">
                    Admin &amp; Security
                  </Link>
                </li>
                <li>
                  <Link href="/apps" className="text-muted hover:text-neon-1 transition-colors">
                    All Apps by Workspace
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Platform */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h4 className="text-lg font-semibold text-text mb-4">Platform</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/tsm" className="text-muted hover:text-neon-1 transition-colors">
                    TSM
                  </Link>
                </li>
                <li>
                  <Link href="/agents" className="text-muted hover:text-neon-1 transition-colors">
                    AI Control
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
            © 2025 Inteleri. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 text-sm text-muted">
            <Link href="/platform#security" className="hover:text-neon-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-1 rounded">Trust &amp; Security</Link>
            <Link href="/privacy" className="hover:text-neon-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-1 rounded">Privacy</Link>
            <Link href="/terms" className="hover:text-neon-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-1 rounded">Terms</Link>
            <span className="hidden md:inline">Security runs first. Execution stays bounded. Operations stay visible.</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}