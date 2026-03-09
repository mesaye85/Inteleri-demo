"use client";

import { Carrier } from "@/types/carrier";
import GlassCard from "@/components/GlassCard";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Truck, Phone, Mail, MapPin, FileText, User } from "lucide-react";
import { format } from "date-fns";

interface CarrierDetailProps {
    carrier: Carrier;
    onBack: () => void;
}

export default function CarrierDetail({ carrier, onBack }: CarrierDetailProps) {
    return (
        <div className="space-y-6">
            <button
                onClick={onBack}
                className="flex items-center gap-2 text-muted-foreground hover:text-neon-2 transition-colors"
            >
                <ArrowLeft className="w-4 h-4" />
                Back to Carriers
            </button>

            <GlassCard className="p-8">
                <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
                    <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-full bg-neon-2/10 flex items-center justify-center shrink-0">
                            <Truck className="w-8 h-8 text-neon-2" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-white mb-2">{carrier.name}</h1>
                            <div className="flex items-center gap-3">
                                <Badge
                                    variant={carrier.status === 'active' ? "default" : "secondary"}
                                    className={carrier.status === 'active' ? "bg-neon-2/20 text-neon-2 border-neon-2/50" : ""}
                                >
                                    {carrier.status.toUpperCase()}
                                </Badge>
                                <span className="text-sm text-muted-foreground">Since {format(new Date(carrier.created_at), "yyyy")}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-muted-foreground">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                                        <User className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase tracking-wider opacity-70">Contact Person</div>
                                        <div className="text-white">{carrier.contact_name}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-muted-foreground">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase tracking-wider opacity-70">Phone</div>
                                        <div className="text-white">{carrier.contact_phone}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-muted-foreground">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase tracking-wider opacity-70">Email</div>
                                        <div className="text-white">{carrier.contact_email}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-muted-foreground">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                                        <MapPin className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase tracking-wider opacity-70">Address</div>
                                        <div className="text-white">{carrier.address}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">Compliance & IDs</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <div className="flex items-center gap-2 mb-2 text-neon-2">
                                        <FileText className="w-4 h-4" />
                                        <span className="text-sm font-medium">MC Number</span>
                                    </div>
                                    <div className="text-xl font-bold text-white">{carrier.mc_number}</div>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <div className="flex items-center gap-2 mb-2 text-neon-2">
                                        <FileText className="w-4 h-4" />
                                        <span className="text-sm font-medium">DOT Number</span>
                                    </div>
                                    <div className="text-xl font-bold text-white">{carrier.dot_number}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </GlassCard>
        </div>
    );
}
