import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Inteleri - Zero-Trust Logistics Intelligence",
  description: "Security-native platform that unifies apps, agents, and predictive analytics on a GPU-native fabric.",
  icons: {
    icon: '/favicon.ico',
  },
};

import { GlobalBackground } from "@/components/GlobalBackground";
import { ModalProvider } from "@/components/ModalContext";

// ... imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ scrollBehavior: 'smooth' }}>
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased bg-bg text-text selection:bg-neon-1/30 selection:text-neon-1`}
      >
        <ModalProvider>
          <GlobalBackground />
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
