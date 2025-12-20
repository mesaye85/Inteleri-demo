"use client";

import { Load } from "@/types/loadboard";
import GlassCard from "@/components/GlassCard";
import NeonButton from "@/components/NeonButton";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    ArrowLeft,
    MapPin,
    Calendar,
    DollarSign,
    Clock,
    Info
} from "lucide-react";
import { format } from "date-fns";

interface LoadDetailProps {
    load: Load;
    onBack: () => void;
    onBidClick?: () => void;
}

export default function LoadDetail({ load, onBack, onBidClick }: LoadDetailProps) {
    return (
        <div className="space-y-6">
            {/* Navigation */}
            <button
                onClick={onBack}
                className="flex items-center gap-2 text-muted-foreground hover:text-neon-1 transition-colors"
            >
                <ArrowLeft className="w-4 h-4" />
                Back to Load Board
            </button>

            {/* Header Card */}
            <GlassCard className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                    <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-3">
                            <Badge variant="outline" className="border-neon-1/50 text-neon-1 bg-neon-1/10">
                                {load.load_type.replace(/_/g, ' ').toUpperCase()}
                            </Badge>
                            {load.is_urgent && (
                                <Badge variant="destructive" className="animate-pulse">
                                    URGENT REQUEST
                                </Badge>
                            )}
                            <span className="text-sm text-muted-foreground">
                                ID: {load.id}
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-white">
                            {load.title}
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl">
                            {load.description}
                        </p>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-4 shrink-0">
                        <div className="text-right">
                            <div className="text-3xl font-bold text-neon-1 flex items-center justify-end">
                                <DollarSign className="w-6 h-6 mr-1" />
                                {load.rate_amount}
                            </div>
                            <div className="text-sm text-muted-foreground">
                                {load.rate_type === 'per_mile' ? 'Per Mile' : 'Flat Rate'}
                                {load.fuel_surcharge && ' + Fuel Surcharge'}
                            </div>
                        </div>
                        {onBidClick && (
                            <NeonButton onClick={onBidClick} size="lg" className="w-full md:w-auto">
                                Place Bid
                            </NeonButton>
                        )}
                    </div>
                </div>
            </GlassCard>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Route Info */}
                <div className="lg:col-span-2 space-y-6">
                    <GlassCard className="p-6">
                        <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-neon-1" />
                            Route Details
                        </h2>

                        <div className="relative pl-8 space-y-8">
                            {/* Connecting Line */}
                            <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-neon-1 to-neon-2" />

                            {/* Pickup */}
                            <div className="relative">
                                <div className="absolute -left-[39px] w-6 h-6 rounded-full bg-background border-2 border-neon-1 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-neon-1" />
                                </div>
                                <div className="space-y-1">
                                    <div className="text-sm text-neon-1 font-medium">PICKUP</div>
                                    <div className="text-xl font-semibold text-white">
                                        {load.pickup_city}, {load.pickup_state} {load.pickup_zip}
                                    </div>
                                    <div className="text-muted-foreground">
                                        {load.pickup_location}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                                        <Calendar className="w-4 h-4" />
                                        {format(new Date(load.pickup_date), "EEEE, MMMM d, yyyy 'at' h:mm a")}
                                    </div>
                                    {load.pickup_notes && (
                                        <div className="mt-2 p-3 rounded-lg bg-white/5 text-sm text-muted-foreground border border-white/10">
                                            <span className="text-neon-1 font-medium">Note:</span> {load.pickup_notes}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Delivery */}
                            <div className="relative">
                                <div className="absolute -left-[39px] w-6 h-6 rounded-full bg-background border-2 border-neon-2 flex items-center justify-center">
                                    <MapPin className="w-3 h-3 text-neon-2" />
                                </div>
                                <div className="space-y-1">
                                    <div className="text-sm text-neon-2 font-medium">DELIVERY</div>
                                    <div className="text-xl font-semibold text-white">
                                        {load.delivery_city}, {load.delivery_state} {load.delivery_zip}
                                    </div>
                                    <div className="text-muted-foreground">
                                        {load.delivery_location}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                                        <Calendar className="w-4 h-4" />
                                        {format(new Date(load.delivery_date), "EEEE, MMMM d, yyyy 'at' h:mm a")}
                                    </div>
                                    {load.delivery_notes && (
                                        <div className="mt-2 p-3 rounded-lg bg-white/5 text-sm text-muted-foreground border border-white/10">
                                            <span className="text-neon-1 font-medium">Note:</span> {load.delivery_notes}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <Separator className="my-6 bg-white/10" />

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="text-sm text-muted-foreground mb-1">Distance</div>
                                <div className="text-lg font-semibold text-white">{load.estimated_miles} mi</div>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="text-sm text-muted-foreground mb-1">Transit Time</div>
                                <div className="text-lg font-semibold text-white">{load.transit_time_hours} hrs</div>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="text-sm text-muted-foreground mb-1">Weight</div>
                                <div className="text-lg font-semibold text-white">{parseInt(load.weight).toLocaleString()} lbs</div>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="text-sm text-muted-foreground mb-1">Equipment</div>
                                <div className="text-lg font-semibold text-white capitalize">{load.equipment_type.replace(/_/g, ' ')}</div>
                            </div>
                        </div>
                    </GlassCard>
                </div>

                {/* Sidebar Info */}
                <div className="space-y-6">
                    <GlassCard className="p-6">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <Info className="w-5 h-5 text-neon-1" />
                            Requirements
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Hazmat</span>
                                <Badge variant={load.hazmat_required ? "destructive" : "secondary"}>
                                    {load.hazmat_required ? "Required" : "No"}
                                </Badge>
                            </li>
                            <li className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Liftgate</span>
                                <Badge variant={load.liftgate_required ? "default" : "secondary"}>
                                    {load.liftgate_required ? "Required" : "No"}
                                </Badge>
                            </li>
                            <li className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Appointment</span>
                                <Badge variant={load.appointment_required ? "default" : "secondary"}>
                                    {load.appointment_required ? "Required" : "No"}
                                </Badge>
                            </li>
                            <li className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Inside Delivery</span>
                                <Badge variant={load.inside_delivery ? "default" : "secondary"}>
                                    {load.inside_delivery ? "Required" : "No"}
                                </Badge>
                            </li>
                        </ul>
                    </GlassCard>

                    <GlassCard className="p-6">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <Clock className="w-5 h-5 text-neon-1" />
                            Timeline
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <div className="text-xs text-muted-foreground mb-1">Posted</div>
                                <div className="text-sm text-white">
                                    {format(new Date(load.posted_at), "MMM d, h:mm a")}
                                </div>
                            </div>
                            <div>
                                <div className="text-xs text-muted-foreground mb-1">Bidding Ends</div>
                                <div className="text-sm text-white">
                                    {format(new Date(load.bidding_deadline), "MMM d, h:mm a")}
                                </div>
                            </div>
                            <div>
                                <div className="text-xs text-muted-foreground mb-1">Expires</div>
                                <div className="text-sm text-white">
                                    {format(new Date(load.expires_at), "MMM d, h:mm a")}
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </div>
    );
}
