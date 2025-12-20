import { Load, Bid } from '@/types/loadboard';

// Mock Data
const MOCK_LOADS: Load[] = [
    {
        id: '1',
        title: 'Electronics to Dallas',
        description: 'High value electronics, requires team drivers.',
        load_type: 'full_truckload',
        equipment_type: 'dry_van',
        weight: '42000.00',
        pickup_location: '123 Tech Blvd',
        pickup_city: 'San Francisco',
        pickup_state: 'CA',
        pickup_zip: '94105',
        pickup_country: 'USA',
        pickup_date: new Date(Date.now() + 86400000).toISOString(), // Tomorrow
        delivery_location: '456 Distribution Way',
        delivery_city: 'Dallas',
        delivery_state: 'TX',
        delivery_zip: '75201',
        delivery_country: 'USA',
        delivery_date: new Date(Date.now() + 259200000).toISOString(), // +3 days
        rate_type: 'flat_rate',
        rate_amount: '3500.00',
        rate_currency: 'USD',
        fuel_surcharge: true,
        estimated_miles: 1700,
        transit_time_hours: 32,
        status: 'posted',
        posted_at: new Date().toISOString(),
        bidding_deadline: new Date(Date.now() + 43200000).toISOString(), // +12 hours
        expires_at: new Date(Date.now() + 172800000).toISOString(), // +48 hours
        posted_by: 'user_1',
        company: 'comp_1',
        hazmat_required: false,
        liftgate_required: false,
        appointment_required: true,
        inside_delivery: false,
        residential_pickup: false,
        residential_delivery: false,
        is_featured: true,
        is_urgent: false,
        is_negotiable: true,
        view_count: 45,
        bid_count: 3,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: '2',
        title: 'Produce to Chicago',
        description: 'Fresh produce, temperature controlled.',
        load_type: 'full_truckload',
        equipment_type: 'reefer',
        weight: '38000.00',
        pickup_location: '789 Farm Rd',
        pickup_city: 'Fresno',
        pickup_state: 'CA',
        pickup_zip: '93706',
        pickup_country: 'USA',
        pickup_date: new Date(Date.now() + 172800000).toISOString(), // +2 days
        delivery_location: '321 Market St',
        delivery_city: 'Chicago',
        delivery_state: 'IL',
        delivery_zip: '60607',
        delivery_country: 'USA',
        delivery_date: new Date(Date.now() + 432000000).toISOString(), // +5 days
        rate_type: 'per_mile',
        rate_amount: '2.50',
        rate_currency: 'USD',
        fuel_surcharge: true,
        estimated_miles: 2100,
        transit_time_hours: 40,
        status: 'bidding',
        posted_at: new Date().toISOString(),
        bidding_deadline: new Date(Date.now() + 86400000).toISOString(), // +24 hours
        expires_at: new Date(Date.now() + 259200000).toISOString(), // +3 days
        posted_by: 'user_2',
        company: 'comp_2',
        hazmat_required: false,
        liftgate_required: false,
        appointment_required: true,
        inside_delivery: false,
        residential_pickup: false,
        residential_delivery: false,
        is_featured: false,
        is_urgent: true,
        is_negotiable: false,
        view_count: 120,
        bid_count: 8,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: '3',
        title: 'Construction Materials',
        description: 'Lumber and steel beams.',
        load_type: 'flatbed',
        equipment_type: 'flatbed',
        weight: '45000.00',
        pickup_location: '101 Industrial Park',
        pickup_city: 'Seattle',
        pickup_state: 'WA',
        pickup_zip: '98101',
        pickup_country: 'USA',
        pickup_date: new Date(Date.now() + 86400000).toISOString(),
        delivery_location: '202 Building Site',
        delivery_city: 'Portland',
        delivery_state: 'OR',
        delivery_zip: '97201',
        delivery_country: 'USA',
        delivery_date: new Date(Date.now() + 108000000).toISOString(),
        rate_type: 'flat_rate',
        rate_amount: '900.00',
        rate_currency: 'USD',
        fuel_surcharge: false,
        estimated_miles: 175,
        transit_time_hours: 4,
        status: 'posted',
        posted_at: new Date().toISOString(),
        bidding_deadline: new Date(Date.now() + 43200000).toISOString(),
        expires_at: new Date(Date.now() + 86400000).toISOString(),
        posted_by: 'user_3',
        company: 'comp_3',
        hazmat_required: false,
        liftgate_required: true,
        appointment_required: false,
        inside_delivery: false,
        residential_pickup: false,
        residential_delivery: true,
        is_featured: false,
        is_urgent: false,
        is_negotiable: true,
        view_count: 15,
        bid_count: 0,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    }
];

class LoadboardService {
    // Simulate async API calls
    private async delay(ms: number = 500): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Load Methods
    async getLoads(_params?: Record<string, string>): Promise<{ results: Load[]; count: number }> {
        await this.delay();
        // Simple mock filtering could be added here if needed
        return {
            results: MOCK_LOADS,
            count: MOCK_LOADS.length
        };
    }

    async getLoad(id: string): Promise<Load> {
        await this.delay();
        const load = MOCK_LOADS.find(l => l.id === id);
        if (!load) throw new Error('Load not found');
        return load;
    }

    async createLoad(data: Partial<Load>): Promise<Load> {
        await this.delay();
        const newLoad: Load = {
            ...MOCK_LOADS[0], // Default values from first mock load
            ...data,
            id: Math.random().toString(36).substr(2, 9),
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
        } as Load;
        return newLoad;
    }

    // Bid Methods
    async getBidsForLoad(_loadId: string): Promise<Bid[]> {
        await this.delay();
        return []; // Return empty bids for now
    }

    async submitBid(loadId: string, data: Partial<Bid>): Promise<Bid> {
        await this.delay();
        return {
            id: Math.random().toString(36).substr(2, 9),
            load: loadId,
            bidder: 'current_user',
            company: 'current_company',
            status: 'submitted',
            submitted_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            ...data
        } as Bid;
    }
}

export const loadboardService = new LoadboardService();
