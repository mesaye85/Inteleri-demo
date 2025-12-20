import AboutPageClient from "./AboutPageClient";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta('about');

export default function AboutPage() {
  return <AboutPageClient />;
}
