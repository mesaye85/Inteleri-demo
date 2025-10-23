import dynamic from "next/dynamic";
import { pageMeta } from "@/lib/seo";

const DemosPageClient = dynamic(() => import("@/components/DemosPageClient"), {
  loading: () => <div className="min-h-screen" aria-busy="true" aria-live="polite" />
});

export const metadata = pageMeta('demos');

export default function DemosPage() {
  return <DemosPageClient />;
}
