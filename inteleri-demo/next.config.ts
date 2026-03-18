import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Output standalone bundle for Docker deployments
  output: 'standalone',

  // Monorepo / multiple-lockfile safety:
  // Force Next to use this app directory as the tracing root to avoid
  // "Invariant: Expected clientReferenceManifest to be defined."
  outputFileTracingRoot: path.join(__dirname),

  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', '@radix-ui/react-avatar', '@radix-ui/react-dialog'],
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },

  async headers() {
    // Note: In local dev over HTTP, browsers may ignore HSTS.
    // Keep it here for production deployments behind HTTPS termination.
    const csp = [
      "default-src 'self'",
      // Next dev + common bundler behavior can require eval in development.
      // We keep it dev-only to avoid weakening production CSP.
      process.env.NODE_ENV === "development"
        ? "script-src 'self' 'unsafe-eval'"
        : "script-src 'self'",
      // Tailwind/Next can emit inline styles; allow minimal inline styles.
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self' data:",
      "connect-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
    ]
      .filter(Boolean)
      .join("; ");

    const headers = [
      { key: "Content-Security-Policy", value: csp },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "DENY" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), accelerometer=(), gyroscope=(), magnetometer=()" },
      { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
      // More permissive to avoid breaking static assets in various hosting setups.
      { key: "Cross-Origin-Resource-Policy", value: "same-site" },
      { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
    ];

    return [
      {
        source: "/:path*",
        headers,
      },
    ];
  },

  // Avoid custom splitChunks that can cause "Cannot read properties of undefined (reading 'call')"
  webpack: (config) => config,
};

export default nextConfig;
