import { Carrier } from '@/types/carrier';

const MOCK_CARRIERS: Carrier[] = [
    {
        id: '1',
        name: 'Swift Haulage Inc',
        contact_name: 'John Doe',
        contact_email: 'john@swifthaulage.com',
        contact_phone: '555-1111',
        address: '100 Trucking Ln, Phoenix, AZ 85001',
        mc_number: 'MC998877',
        dot_number: '11223344',
        status: 'active',
        company: 'comp_1',
        created_at: new Date(Date.now() - 1000000000).toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: '2',
        name: 'Eagle Express',
        contact_name: 'Jane Smith',
        contact_email: 'jane@eagleexpress.com',
        contact_phone: '555-2222',
        address: '200 Logistics Blvd, Chicago, IL 60601',
        mc_number: 'MC665544',
        dot_number: '55667788',
        status: 'active',
        company: 'comp_2',
        created_at: new Date(Date.now() - 500000000).toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: '3',
        name: 'Blue Star Transport',
        contact_name: 'Bob Wilson',
        contact_email: 'bob@bluestar.com',
        contact_phone: '555-3333',
        address: '300 Freight Rd, Miami, FL 33101',
        mc_number: 'MC332211',
        dot_number: '99887766',
        status: 'suspended',
        company: 'comp_3',
        created_at: new Date(Date.now() - 200000000).toISOString(),
        updated_at: new Date().toISOString(),
    }
];

class CarrierService {
    private async delay(ms: number = 500): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async getCarriers(): Promise<Carrier[]> {
        await this.delay();
        return MOCK_CARRIERS;
    }

    async getCarrier(id: string): Promise<Carrier> {
        await this.delay();
        const carrier = MOCK_CARRIERS.find(c => c.id === id);
        if (!carrier) throw new Error('Carrier not found');
        return carrier;
    }
}

export const carrierService = new CarrierService();
