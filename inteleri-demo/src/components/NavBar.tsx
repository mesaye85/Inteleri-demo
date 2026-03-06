"use client";

import { useState, useEffect, useId } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import NeonButton from "./NeonButton";
import navData from "@/data/nav.json";
import { useModal } from "@/components/ModalContext";

const navigation = navData.main;

function isActivePath(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function NavBar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuId = useId();
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      aria-label="Primary"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled
        ? "glass shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-xl border-b border-white/10"
        : "bg-transparent border-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-2xl font-bold neon-text drop-shadow-[0_0_12px_rgba(99,230,255,0.35)]"
            >
              Inteleri
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const active = isActivePath(item.href, pathname ?? "");
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`transition-colors duration-200 relative group rounded outline-none focus-visible:ring-2 focus-visible:ring-neon-1 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] ${active ? "text-neon-1" : "text-text hover:text-neon-1"}`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-neon-1 transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <NeonButton variant="neon" size="sm" onClick={() => openModal("access")}>
              {navData.cta.label}
            </NeonButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text hover:text-neon-1 transition-colors rounded outline-none focus-visible:ring-2 focus-visible:ring-neon-1 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
              aria-expanded={isMobileMenuOpen}
              aria-controls={menuId}
              aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
            >
              {isMobileMenuOpen ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
              <span className="sr-only">
                {isMobileMenuOpen ? "Close menu" : "Open menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            id={menuId}
            className="md:hidden glass rounded-lg mt-2 p-4"
          >
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => {
                const active = isActivePath(item.href, pathname ?? "");
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`transition-colors rounded outline-none focus-visible:ring-2 focus-visible:ring-neon-1 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] ${active ? "text-neon-1 font-medium" : "text-text hover:text-neon-1"}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <NeonButton variant="neon" className="w-full" onClick={() => { setIsMobileMenuOpen(false); openModal("access"); }}>
                {navData.cta.label}
              </NeonButton>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
