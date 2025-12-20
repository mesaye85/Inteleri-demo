import { Broker } from '@/types/broker';

const MOCK_BROKERS: Broker[] = [
    {
        id: '1',
        name: 'FastLane Logistics',
        contact_name: 'Sarah Johnson',
        contact_email: 'sarah@fastlane.com',
        contact_phone: '555-0123',
        address: '123 Logistics Way, Atlanta, GA 30301',
        mc_number: 'MC123456',
        dot_number: '12345678',
        is_active: true,
        trust_score: 95.5,
        created_at: new Date(Date.now() - 7776000000).toISOString(), // ~3 months ago
        updated_at: new Date().toISOString(),
    },
    {
        id: '2',
        name: 'Global Freight Solutions',
        contact_name: 'Mike Chen',
        contact_email: 'mike@globalfreight.com',
        contact_phone: '555-0456',
        address: '456 Harbor Dr, Seattle, WA 98104',
        mc_number: 'MC789012',
        dot_number: '87654321',
        is_active: true,
        trust_score: 88.2,
        created_at: new Date(Date.now() - 15552000000).toISOString(), // ~6 months ago
        updated_at: new Date().toISOString(),
    },
    {
        id: '3',
        name: 'Reliable Transport Co',
        contact_name: 'David Smith',
        contact_email: 'david@reliable.com',
        contact_phone: '555-0789',
        address: '789 Highway Blvd, Dallas, TX 75201',
        mc_number: 'MC345678',
        dot_number: '23456789',
        is_active: false,
        trust_score: 72.0,
        created_at: new Date(Date.now() - 31536000000).toISOString(), // ~1 year ago
        updated_at: new Date().toISOString(),
    }
];

class BrokerService {
    private async delay(ms: number = 500): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async getBrokers(): Promise<Broker[]> {
        await this.delay();
        return MOCK_BROKERS;
    }

    async getBroker(id: string): Promise<Broker> {
        await this.delay();
        const broker = MOCK_BROKERS.find(b => b.id === id);
        if (!broker) throw new Error('Broker not found');
        return broker;
    }
}

export const brokerService = new BrokerService();
