import Link from "next/link";
import NeonButton from "./NeonButton";
import navData from "@/data/nav.json";

const navigation = navData.main;

export default function NavBarServer() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold neon-text drop-shadow-[0_0_12px_rgba(99,230,255,0.35)]">
              Inteleri
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-text hover:text-neon-1 transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-1 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <NeonButton variant="neon" size="sm">
              {navData.cta.label}
            </NeonButton>
          </div>

          {/* Mobile menu button - simplified for server component */}
          <div className="md:hidden">
            <button className="text-text hover:text-neon-1 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
