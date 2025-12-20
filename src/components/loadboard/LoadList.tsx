"use client";

import { useEffect, useState } from "react";
import { Load } from "@/types/loadboard";
import { loadboardService } from "@/services/loadboard";
import LoadCard from "./LoadCard";
import { Loader2 } from "lucide-react";

interface LoadListProps {
    onLoadSelect: (load: Load) => void;
}

export default function LoadList({ onLoadSelect }: LoadListProps) {
    const [loads, setLoads] = useState<Load[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchLoads = async () => {
            try {
                const data = await loadboardService.getLoads();
                setLoads(data.results);
            } catch {
                setError("Failed to load available shipments.");
            } finally {
                setLoading(false);
            }
        };

        fetchLoads();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center py-20">
                <Loader2 className="w-8 h-8 animate-spin text-neon-1" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-10 text-destructive">
                {error}
            </div>
        );
    }

    if (loads.length === 0) {
        return (
            <div className="text-center py-10 text-muted-foreground">
                No loads available at the moment.
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loads.map((load) => (
                <LoadCard
                    key={load.id}
                    load={load}
                    onClick={onLoadSelect}
                />
            ))}
        </div>
    );
}
