"use client";

import { useEffect, useState } from "react";
import { Carrier } from "@/types/carrier";
import { carrierService } from "@/services/carrier";
import GlassCard from "@/components/GlassCard";
import { Badge } from "@/components/ui/badge";
import { Loader2, Truck, Phone, Mail } from "lucide-react";

interface CarrierListProps {
    onCarrierSelect: (carrier: Carrier) => void;
}

export default function CarrierList({ onCarrierSelect }: CarrierListProps) {
    const [carriers, setCarriers] = useState<Carrier[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCarriers = async () => {
            try {
                const data = await carrierService.getCarriers();
                setCarriers(data);
            } catch (err) {
                console.error("Failed to load carriers", err);
            } finally {
                setLoading(false);
            }
        };

        fetchCarriers();
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
            {carriers.map((carrier) => (
                <div key={carrier.id} onClick={() => onCarrierSelect(carrier)} className="cursor-pointer h-full">
                    <GlassCard hover className="h-full p-6 flex flex-col gap-4">
                        <div className="flex justify-between items-start">
                            <div className="w-12 h-12 rounded-full bg-neon-2/10 flex items-center justify-center shrink-0">
                                <Truck className="w-6 h-6 text-neon-2" />
                            </div>
                            <Badge
                                variant={carrier.status === 'active' ? "default" : "secondary"}
                                className={carrier.status === 'active' ? "bg-neon-2/20 text-neon-2 border-neon-2/50" : ""}
                            >
                                {carrier.status.toUpperCase()}
                            </Badge>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-1">{carrier.name}</h3>
                            <p className="text-sm text-muted-foreground line-clamp-2">{carrier.address}</p>
                        </div>

                        <div className="space-y-2 mt-auto pt-4 border-t border-white/10">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Phone className="w-4 h-4" />
                                {carrier.contact_phone}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Mail className="w-4 h-4" />
                                {carrier.contact_email}
                            </div>
                        </div>
                    </GlassCard>
                </div>
            ))}
        </div>
    );
}
