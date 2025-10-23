import dynamic from "next/dynamic";
import NavBarServer from "@/components/NavBarServer";
import FooterServer from "@/components/FooterServer";
import { pageMeta } from "@/lib/seo";

const PlatformContent = dynamic(() => import("@/components/PlatformContent"), {
  loading: () => <div className="h-96 bg-slate-900/20 rounded-2xl animate-pulse" />
});

export const metadata = pageMeta('platform');

export default function PlatformPage() {
  return (
    <div className="min-h-screen">
      <NavBarServer />
      <PlatformContent />
      <FooterServer />
    </div>
  );
}
