"use client";

import dynamic from "next/dynamic";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const TSMContent = dynamic(() => import("@/components/TSMContent"), {
    loading: () => <div className="h-96 bg-slate-900/20 rounded-2xl animate-pulse" />,
    ssr: false
});

export default function TSMPageClient() {
    return (
        <div className="min-h-screen">
            <NavBar />
            <TSMContent />
            <Footer />
        </div>
    );
}
