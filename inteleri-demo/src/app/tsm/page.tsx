import TSMPageClient from "./TSMPageClient";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta('tsm');

export default function TSMPage() {
  return <TSMPageClient />;
}