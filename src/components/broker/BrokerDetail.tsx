"use client";

import { Broker } from "@/types/broker";
import GlassCard from "@/components/GlassCard";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Building2, Phone, Mail, MapPin, ShieldCheck, FileText } from "lucide-react";
import { format } from "date-fns";

interface BrokerDetailProps {
    broker: Broker;
    onBack: () => void;
}

export default function BrokerDetail({ broker, onBack }: BrokerDetailProps) {
    return (
        <div className="space-y-6">
            <button
                onClick={onBack}
                className="flex items-center gap-2 text-muted-foreground hover:text-neon-1 transition-colors"
            >
                <ArrowLeft className="w-4 h-4" />
                Back to Brokers
            </button>

            <GlassCard className="p-8">
                <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
                    <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-full bg-neon-1/10 flex items-center justify-center shrink-0">
                            <Building2 className="w-8 h-8 text-neon-1" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-white mb-2">{broker.name}</h1>
                            <div className="flex items-center gap-3">
                                <Badge variant={broker.is_active ? "default" : "secondary"} className={broker.is_active ? "bg-neon-1/20 text-neon-1 border-neon-1/50" : ""}>
                                    {broker.is_active ? "Active" : "Inactive"}
                                </Badge>
                                <span className="text-sm text-muted-foreground">Since {format(new Date(broker.created_at), "yyyy")}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                        <div className="text-sm text-muted-foreground">Trust Score</div>
                        <div className="text-4xl font-bold text-neon-1 flex items-center gap-2">
                            <ShieldCheck className="w-8 h-8" />
                            {broker.trust_score}
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
                                        <Building2 className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase tracking-wider opacity-70">Contact Person</div>
                                        <div className="text-white">{broker.contact_name}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-muted-foreground">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase tracking-wider opacity-70">Phone</div>
                                        <div className="text-white">{broker.contact_phone}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-muted-foreground">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase tracking-wider opacity-70">Email</div>
                                        <div className="text-white">{broker.contact_email}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-muted-foreground">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                                        <MapPin className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase tracking-wider opacity-70">Address</div>
                                        <div className="text-white">{broker.address}</div>
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
                                    <div className="flex items-center gap-2 mb-2 text-neon-1">
                                        <FileText className="w-4 h-4" />
                                        <span className="text-sm font-medium">MC Number</span>
                                    </div>
                                    <div className="text-xl font-bold text-white">{broker.mc_number}</div>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <div className="flex items-center gap-2 mb-2 text-neon-1">
                                        <FileText className="w-4 h-4" />
                                        <span className="text-sm font-medium">DOT Number</span>
                                    </div>
                                    <div className="text-xl font-bold text-white">{broker.dot_number}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </GlassCard>
        </div>
    );
}
