export type TrustTier = 'trusted_partner' | 'reliable' | 'watchlist' | 'restricted';

export interface Carrier {
    id: string;
    company_name: string;
    dot_number: string;
    mc_number: string;
    fleet_size: number;
    operating_region: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export interface CategoryBreakdowns {
    operational: number;
    safety: number;
    feedback: number;
    transparency: number;
    emissions: number;
}

export interface CarrierTrustScore {
    id: string;
    carrier: Carrier;
    composite_score: number;
    tier: TrustTier;
    category_breakdowns: CategoryBreakdowns;
    calculation_version: string;
    last_calculated: string;
    created_at: string;
}
