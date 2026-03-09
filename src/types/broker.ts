export interface Broker {
    id: string;
    name: string;
    contact_name: string;
    contact_email: string;
    contact_phone: string;
    address: string;
    mc_number: string;
    dot_number: string;
    is_active: boolean;
    trust_score: number; // 0-100
    created_at: string;
    updated_at: string;
}
