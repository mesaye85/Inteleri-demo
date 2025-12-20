"use client";

import { Load } from "@/types/loadboard";
import GlassCard from "@/components/GlassCard";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, DollarSign, Truck, Clock } from "lucide-react";
import { format } from "date-fns";

interface LoadCardProps {
    load: Load;
    onClick: (load: Load) => void;
}

export default function LoadCard({ load, onClick }: LoadCardProps) {
    return (
        <div onClick={() => onClick(load)} className="cursor-pointer h-full">
            <GlassCard hover className="h-full p-5 flex flex-col gap-4">
                {/* Header */}
                <div className="flex justify-between items-start gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <Badge variant="outline" className="text-xs border-neon-1/50 text-neon-1 bg-neon-1/10">
                                {load.load_type.replace(/_/g, ' ').toUpperCase()}
                            </Badge>
                            {load.is_urgent && (
                                <Badge variant="destructive" className="text-xs animate-pulse">
                                    URGENT
                                </Badge>
                            )}
                        </div>
                        <h3 className="text-lg font-semibold text-white leading-tight line-clamp-1">
                            {load.title}
                        </h3>
                    </div>
                    <div className="text-right shrink-0">
                        <div className="text-xl font-bold text-neon-1 flex items-center justify-end">
                            <DollarSign className="w-4 h-4 mr-0.5" />
                            {load.rate_amount}
                        </div>
                        <div className="text-xs text-muted-foreground">
                            {load.rate_type === 'per_mile' ? '/ mile' : ' flat'}
                        </div>
                    </div>
                </div>

                {/* Route */}
                <div className="space-y-3 relative">
                    {/* Connecting Line */}
                    <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-neon-1/50 to-neon-2/50" />

                    {/* Pickup */}
                    <div className="flex gap-3 relative z-10">
                        <div className="w-6 h-6 rounded-full bg-background border border-neon-1 flex items-center justify-center shrink-0">
                            <div className="w-2 h-2 rounded-full bg-neon-1" />
                        </div>
                        <div>
                            <div className="text-sm font-medium text-white">
                                {load.pickup_city}, {load.pickup_state}
                            </div>
                            <div className="text-xs text-muted-foreground flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {format(new Date(load.pickup_date), "MMM d, h:mm a")}
                            </div>
                        </div>
                    </div>

                    {/* Delivery */}
                    <div className="flex gap-3 relative z-10">
                        <div className="w-6 h-6 rounded-full bg-background border border-neon-2 flex items-center justify-center shrink-0">
                            <MapPin className="w-3 h-3 text-neon-2" />
                        </div>
                        <div>
                            <div className="text-sm font-medium text-white">
                                {load.delivery_city}, {load.delivery_state}
                            </div>
                            <div className="text-xs text-muted-foreground flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {format(new Date(load.delivery_date), "MMM d, h:mm a")}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Stats */}
                <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                        <Truck className="w-3.5 h-3.5" />
                        <span>{load.equipment_type.replace(/_/g, ' ')}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{load.transit_time_hours}h</span>
                    </div>
                    <div className="font-medium text-white">
                        {load.estimated_miles} mi
                    </div>
                </div>
            </GlassCard>
        </div>
    );
}
