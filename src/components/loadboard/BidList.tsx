"use client";

import { useEffect, useState } from "react";
import { Bid } from "@/types/loadboard";
import { loadboardService } from "@/services/loadboard";
import GlassCard from "@/components/GlassCard";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { Loader2, User } from "lucide-react";

interface BidListProps {
    loadId: string;
}

export default function BidList({ loadId }: BidListProps) {
    const [bids, setBids] = useState<Bid[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBids = async () => {
            try {
                const data = await loadboardService.getBidsForLoad(loadId);
                setBids(data);
            } catch (error) {
                console.error("Failed to fetch bids", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBids();
    }, [loadId]);

    if (loading) {
        return (
            <div className="flex justify-center py-8">
                <Loader2 className="w-6 h-6 animate-spin text-neon-1" />
            </div>
        );
    }

    if (bids.length === 0) {
        return (
            <div className="text-center py-8 text-muted-foreground">
                No bids placed yet. Be the first!
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Recent Bids</h3>
            {bids.map((bid) => (
                <GlassCard key={bid.id} className="p-4" hover={false}>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                <User className="w-5 h-5 text-neon-1" />
                            </div>
                            <div>
                                <div className="text-sm font-medium text-white">
                                    {bid.bidder === 'current_user' ? 'You' : 'Carrier'}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                    {format(new Date(bid.submitted_at), "MMM d, h:mm a")}
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-lg font-bold text-neon-1">
                                ${bid.total_amount}
                            </div>
                            <Badge variant="outline" className="text-xs border-white/20">
                                {bid.status}
                            </Badge>
                        </div>
                    </div>
                </GlassCard>
            ))}
        </div>
    );
}
