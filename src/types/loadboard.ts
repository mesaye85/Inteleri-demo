export type LoadType = 'full_truckload' | 'less_than_truckload' | 'partial';
export type EquipmentType = 'dry_van' | 'reefer' | 'flatbed' | 'box_truck';
export type RateType = 'flat_rate' | 'per_mile' | 'per_hundredweight';
export type LoadStatus = 'posted' | 'bidding' | 'awarded' | 'in_transit' | 'delivered' | 'cancelled';

export interface Load {
    id: string;
    title: string;
    description: string;
    load_type: LoadType;
    equipment_type: EquipmentType;
    weight: string;
    pickup_location: string;
    pickup_city: string;
    pickup_state: string;
    pickup_zip: string;
    pickup_country: string;
    pickup_date: string;
    delivery_location: string;
    delivery_city: string;
    delivery_state: string;
    delivery_zip: string;
    delivery_country: string;
    delivery_date: string;
    rate_type: RateType;
    rate_amount: string;
    rate_currency: string;
    fuel_surcharge: boolean;
    estimated_miles: number;
    transit_time_hours: number;
    status: LoadStatus;
    posted_at: string;
    bidding_deadline: string;
    expires_at: string;
    posted_by: string;
    company: string;
    hazmat_required: boolean;
    liftgate_required: boolean;
    appointment_required: boolean;
    inside_delivery: boolean;
    residential_pickup: boolean;
    residential_delivery: boolean;
    is_featured: boolean;
    is_urgent: boolean;
    is_negotiable: boolean;
    view_count: number;
    bid_count: number;
    created_at: string;
    updated_at: string;
}

export type BidStatus = 'submitted' | 'accepted' | 'rejected' | 'withdrawn';

export interface Bid {
    id: string;
    load: string; // Load ID
    bidder: string;
    company: string;
    status: BidStatus;
    submitted_at: string;
    updated_at: string;
    bid_amount?: string;
    notes?: string;
    driver_name?: string;
    bid_currency?: string;
    equipment_type?: string;
}
