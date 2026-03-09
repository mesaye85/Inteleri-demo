"use client";

import { useEffect, useState } from "react";
import { Broker } from "@/types/broker";
import { brokerService } from "@/services/broker";
import GlassCard from "@/components/GlassCard";
import { Badge } from "@/components/ui/badge";
import { Loader2, Building2, Phone, Mail, ShieldCheck } from "lucide-react";

interface BrokerListProps {
    onBrokerSelect: (broker: Broker) => void;
}

export default function BrokerList({ onBrokerSelect }: BrokerListProps) {
    const [brokers, setBrokers] = useState<Broker[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBrokers = async () => {
            try {
                const data = await brokerService.getBrokers();
                setBrokers(data);
            } catch (err) {
                console.error("Failed to load brokers", err);
            } finally {
                setLoading(false);
            }
        };

        fetchBrokers();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center py-20">
                <Loader2 className="w-8 h-8 animate-spin text-neon-1" />
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brokers.map((broker) => (
                <div key={broker.id} onClick={() => onBrokerSelect(broker)} className="cursor-pointer h-full">
                    <GlassCard hover className="h-full p-6 flex flex-col gap-4">
                        <div className="flex justify-between items-start">
                            <div className="w-12 h-12 rounded-full bg-neon-1/10 flex items-center justify-center shrink-0">
                                <Building2 className="w-6 h-6 text-neon-1" />
                            </div>
                            <Badge variant={broker.is_active ? "default" : "secondary"} className={broker.is_active ? "bg-neon-1/20 text-neon-1 border-neon-1/50" : ""}>
                                {broker.is_active ? "Active" : "Inactive"}
                            </Badge>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-1">{broker.name}</h3>
                            <p className="text-sm text-muted-foreground line-clamp-2">{broker.address}</p>
                        </div>

                        <div className="space-y-2 mt-auto pt-4 border-t border-white/10">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground flex items-center gap-2">
                                    <ShieldCheck className="w-4 h-4" /> Trust Score
                                </span>
                                <span className="font-bold text-white">{broker.trust_score}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Phone className="w-4 h-4" />
                                {broker.contact_phone}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Mail className="w-4 h-4" />
                                {broker.contact_email}
                            </div>
                        </div>
                    </GlassCard>
                </div>
            ))}
        </div>
    );
}
