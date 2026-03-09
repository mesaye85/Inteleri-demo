import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Intleri - Secure, Modular Logistics Intelligence",
  description: "Learn about Intleri's mission to democratize advanced logistics capabilities through secure, modular platform solutions that transform supply chain operations.",
  keywords: "about intleri, logistics technology company, supply chain innovation, team leadership",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
