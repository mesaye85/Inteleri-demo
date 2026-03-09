import Link from "next/link";

export default function FooterServer() {
  return (
    <footer className="bg-slate-900/50 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold neon-text mb-4">Inteleri</div>
            <p className="text-muted text-sm leading-relaxed">
              Security-native logistics intelligence platform.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-text mb-4">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/platform" className="text-muted hover:text-neon-1 transition-colors">Security</Link></li>
              <li><Link href="/apps" className="text-muted hover:text-neon-1 transition-colors">Apps</Link></li>
              <li><Link href="/tsm" className="text-muted hover:text-neon-1 transition-colors">TSM</Link></li>
              <li><Link href="/agents" className="text-muted hover:text-neon-1 transition-colors">Agents</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-text mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/demos" className="text-muted hover:text-neon-1 transition-colors">Demos</Link></li>
              <li><Link href="/about" className="text-muted hover:text-neon-1 transition-colors">About</Link></li>
              <li><Link href="/robotics" className="text-muted hover:text-neon-1 transition-colors">Robotics</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-text mb-4">Compliance</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-muted">SOC 2 Type II</span></li>
              <li><span className="text-muted">GDPR Compliant</span></li>
              <li><span className="text-muted">NIST Framework</span></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted">
              © 2025 Inteleri. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-xs text-muted hover:text-neon-1 transition-colors">Privacy</Link>
              <Link href="/terms" className="text-xs text-muted hover:text-neon-1 transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
