import dynamic from "next/dynamic";
import { pageMeta } from "@/lib/seo";

const AboutPageClient = dynamic(() => import("@/components/AboutPageClient"), {
  loading: () => <div className="min-h-screen" aria-busy="true" aria-live="polite" />
});

export const metadata = pageMeta('about');

export default function AboutPage() {
  return <AboutPageClient />;
}
