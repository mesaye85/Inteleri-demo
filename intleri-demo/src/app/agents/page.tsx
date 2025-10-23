import dynamic from "next/dynamic";
import { pageMeta } from "@/lib/seo";

const AgentsPageClient = dynamic(() => import("@/components/AgentsPageClient"), {
  loading: () => <div className="min-h-screen" aria-busy="true" aria-live="polite" />
});

export const metadata = pageMeta('agents');

export default function AgentsPage() {
  return <AgentsPageClient />;
}
