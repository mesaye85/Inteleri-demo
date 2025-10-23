import AppsPageClient from "@/components/AppsPageClient";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta('apps');

export default function AppsPage() {
  return <AppsPageClient />;
}
