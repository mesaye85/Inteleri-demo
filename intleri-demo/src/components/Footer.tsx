import Link from "next/link";

const footerLinks = {
  Platform: [
    { name: "Architecture", href: "/platform" },
    { name: "Security", href: "/platform#security" },
    { name: "APIs", href: "/platform#apis" },
  ],
  Apps: [
    { name: "Analytics", href: "/apps/analytics" },
    { name: "Loadboard", href: "/apps/loadboard" },
    { name: "Carrier", href: "/apps/carrier" },
    { name: "Emissions", href: "/apps/emissions" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/about#contact" },
    { name: "Demos", href: "/demos" },
  ],
};

export default function Footer() {
  return (
    <footer className="glass mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-bold neon-text mb-4">Intleri</div>
            <p className="text-muted text-sm leading-relaxed">
              Secure, modular logistics intelligence. 
              Powering the future of supply chain operations.
            </p>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-text font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted hover:text-neon-1 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-panel-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted text-sm">
            © 2024 Intleri. All rights reserved.
          </div>
          
          {/* Compliance Badges */}
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="text-xs text-muted bg-white/5 px-3 py-1 rounded-full">
              SOC2
            </div>
            <div className="text-xs text-muted bg-white/5 px-3 py-1 rounded-full">
              GDPR
            </div>
            <div className="text-xs text-muted bg-white/5 px-3 py-1 rounded-full">
              NIST
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
