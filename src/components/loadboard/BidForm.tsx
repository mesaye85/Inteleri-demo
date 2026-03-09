"use client";

import { useState } from "react";
import { Load } from "@/types/loadboard";
import { loadboardService } from "@/services/loadboard";
import GlassCard from "@/components/GlassCard";
import NeonButton from "@/components/NeonButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, CheckCircle2 } from "lucide-react";

interface BidFormProps {
    load: Load;
    onSuccess: () => void;
    onCancel: () => void;
}

export default function BidForm({ load, onSuccess, onCancel }: BidFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        bid_amount: "",
        notes: "",
        driver_name: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await loadboardService.submitBid(load.id, {
                bid_amount: formData.bid_amount,
                notes: formData.notes,
                driver_name: formData.driver_name,
                bid_currency: load.rate_currency,
                equipment_type: load.equipment_type,
            });
            setIsSuccess(true);
            setTimeout(() => {
                onSuccess();
            }, 2000);
        } catch (error) {
            console.error("Failed to submit bid", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <GlassCard className="p-8 text-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-neon-1/20 flex items-center justify-center">
                        <CheckCircle2 className="w-8 h-8 text-neon-1" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Bid Submitted!</h3>
                    <p className="text-muted-foreground">
                        Your bid for {load.title} has been placed successfully.
                    </p>
                </div>
            </GlassCard>
        );
    }

    return (
        <GlassCard className="p-6 md:p-8">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Place Bid</h2>
                <p className="text-muted-foreground">
                    Submit your rate for {load.title}
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="bid_amount" className="text-white">Bid Amount ({load.rate_currency})</Label>
                        <Input
                            id="bid_amount"
                            type="number"
                            placeholder="0.00"
                            required
                            min="0"
                            step="0.01"
                            value={formData.bid_amount}
                            onChange={(e) => setFormData({ ...formData, bid_amount: e.target.value })}
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-neon-1"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="driver_name" className="text-white">Driver Name (Optional)</Label>
                        <Input
                            id="driver_name"
                            placeholder="John Doe"
                            value={formData.driver_name}
                            onChange={(e) => setFormData({ ...formData, driver_name: e.target.value })}
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-neon-1"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="notes" className="text-white">Notes</Label>
                    <Textarea
                        id="notes"
                        placeholder="Add any special instructions or conditions..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-neon-1 min-h-[100px]"
                    />
                </div>

                <div className="flex justify-end gap-4 pt-4">
                    <NeonButton
                        type="button"
                        variant="ghost"
                        onClick={onCancel}
                        disabled={isSubmitting}
                    >
                        Cancel
                    </NeonButton>
                    <NeonButton
                        type="submit"
                        disabled={isSubmitting}
                        className="min-w-[120px]"
                    >
                        {isSubmitting ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                            "Submit Bid"
                        )}
                    </NeonButton>
                </div>
            </form>
        </GlassCard>
    );
}
