"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Cpu, TrendingUp, Truck, Package } from "lucide-react";
import { cn } from "@/lib/utils";

const personas = [
  {
    role: "CISO / Security",
    description: "Admin & Security and Risk & Intelligence: zero-trust, RBAC, audit, and intelligence controls.",
    icon: Shield,
    href: "/platform#admin",
    ctaLabel: "Request access for Admin & Security",
    gradient: "from-neon-2/20 to-transparent",
  },
  {
    role: "CIO / Technology",
    description: "One platform across all workspaces—Carrier, Broker, Shipper, Risk, and Admin.",
    icon: Cpu,
    href: "/platform",
    ctaLabel: "Explore platform",
    gradient: "from-neon-1/20 to-transparent",
  },
  {
    role: "COO / Operations",
    description: "Carrier Operations and Broker Desk: fleet, dispatch, load pipeline, and finance.",
    icon: TrendingUp,
    href: "/platform#carrier",
    ctaLabel: "Request access for Carrier or Broker",
    gradient: "from-neon-3/20 to-transparent",
  },
  {
    role: "Ops / Logistics",
    description: "Carrier, Broker, or Shipper Control Tower—workspace-centric workflows and visibility.",
    icon: Truck,
    href: "/apps",
    ctaLabel: "Explore by workspace",
    gradient: "from-neon-1/20 to-neon-2/20",
  },
  {
    role: "Procurement / Supply",
    description: "Shipper Control Tower: supply overview, warehouse & dock, risk, and load exchange.",
    icon: Package,
    href: "/platform#shipper",
    ctaLabel: "Request access for Shipper",
    gradient: "from-neon-2/20 to-neon-3/20",
  },
];

export const PersonaBand = React.memo(function PersonaBand({
  className,
}: {
  className?: string;
}) {
  return (
    <section
      className={cn("py-16 md:py-20 section-background", className)}
      aria-labelledby="persona-band-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            id="persona-band-heading"
            className="type-section-title text-white mb-4"
          >
            Built for your role
          </h2>
          <p className="type-section-lead text-white/80 mx-auto">
            Whether you lead security, technology, operations, logistics, or procurement, find the workspace and capabilities that matter to you.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {personas.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "group block h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 relative overflow-hidden",
                    "hover:bg-white/[0.06] transition-colors duration-300",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-1 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                  )}
                >
                  <div
                    className={cn(
                      "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity",
                      item.gradient
                    )}
                    aria-hidden
                  />
                  <div className="relative z-10">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.08] border border-white/10 mb-4">
                      <Icon className="w-5 h-5 text-neon-1" />
                    </div>
                    <h3 className="type-card-title text-text mb-2">
                      {item.role}
                    </h3>
                    <p className="type-card-body">
                      {item.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs text-neon-1 font-medium">
                      {item.ctaLabel ?? "Explore"}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default PersonaBand;
