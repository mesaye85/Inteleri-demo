import dynamic from "next/dynamic";
import NavBarServer from "@/components/NavBarServer";
import FooterServer from "@/components/FooterServer";
import { pageMeta } from "@/lib/seo";

const TSMContent = dynamic(() => import("@/components/TSMContent"), {
  loading: () => <div className="h-96 bg-slate-900/20 rounded-2xl animate-pulse" />
});

export const metadata = pageMeta('tsm');

export default function TSMPage() {
  return (
    <div className="min-h-screen">
      <NavBarServer />
      <TSMContent />
      <FooterServer />
    </div>
  );
}