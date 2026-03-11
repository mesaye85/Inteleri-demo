import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Inteleri — Security-native, workspace-centric logistics intelligence",
  description: "Founder-led overview of Inteleri: a security-native, workspace-based platform for governed execution, operational visibility, and auditability in logistics operations.",
  keywords: "about inteleri, logistics intelligence, security-native platform, workspaces, governed execution, auditability",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
