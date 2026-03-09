export type CarrierStatus = 'active' | 'inactive' | 'pending' | 'suspended';

export interface Carrier {
    id: string;
    name: string;
    contact_name: string;
    contact_email: string;
    contact_phone: string;
    address: string;
    mc_number: string;
    dot_number: string;
    status: CarrierStatus;
    company: string;
    created_at: string;
    updated_at: string;
}
