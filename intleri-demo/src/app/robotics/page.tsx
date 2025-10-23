import dynamic from "next/dynamic";
import { pageMeta } from "@/lib/seo";

const RoboticsPageClient = dynamic(() => import("@/components/RoboticsPageClient"), {
  loading: () => <div className="min-h-screen" aria-busy="true" aria-live="polite" />
});

export const metadata = pageMeta('robotics');

export default function RoboticsPage() {
  return <RoboticsPageClient />;
}
