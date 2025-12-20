"use client";

import { useEffect } from "react";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
    variable: "--font-roboto-mono",
    subsets: ["latin"],
});

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <html lang="en" className="dark">
            <body className={`${inter.variable} ${robotoMono.variable} antialiased bg-bg text-text min-h-screen flex items-center justify-center p-4`}>
                <div className="max-w-md w-full text-center space-y-6">
                    <h1 className="text-4xl font-bold text-red-500">Critical Failure</h1>
                    <p className="text-muted">
                        The application encountered a critical error and cannot recover automatically.
                    </p>
                    <button
                        onClick={() => reset()}
                        className="px-6 py-3 bg-neon-1/10 hover:bg-neon-1/20 text-neon-1 border border-neon-1/50 hover:border-neon-1 rounded-lg transition-all"
                    >
                        Attempt System Reset
                    </button>
                </div>
            </body>
        </html>
    );
}
