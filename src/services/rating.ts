import { CarrierTrustScore } from '@/types/rating';

const MOCK_RATINGS: CarrierTrustScore[] = [
    {
        id: '1',
        carrier: {
            id: 'c1',
            company_name: 'Apex Logistics',
            dot_number: '12345678',
            mc_number: 'MC123456',
            fleet_size: 50,
            operating_region: 'National',
            is_active: true,
            created_at: new Date(Date.now() - 31536000000).toISOString(),
            updated_at: new Date().toISOString(),
        },
        composite_score: 96.5,
        tier: 'trusted_partner',
        category_breakdowns: {
            operational: 98.0,
            safety: 99.5,
            feedback: 94.0,
            transparency: 95.0,
            emissions: 90.0,
        },
        calculation_version: 'v1.0',
        last_calculated: new Date().toISOString(),
        created_at: new Date().toISOString(),
    },
    {
        id: '2',
        carrier: {
            id: 'c2',
            company_name: 'Midwest Haulers',
            dot_number: '87654321',
            mc_number: 'MC654321',
            fleet_size: 12,
            operating_region: 'Midwest',
            is_active: true,
            created_at: new Date(Date.now() - 15552000000).toISOString(),
            updated_at: new Date().toISOString(),
        },
        composite_score: 82.3,
        tier: 'reliable',
        category_breakdowns: {
            operational: 85.0,
            safety: 88.0,
            feedback: 78.0,
            transparency: 80.0,
            emissions: 75.0,
        },
        calculation_version: 'v1.0',
        last_calculated: new Date().toISOString(),
        created_at: new Date().toISOString(),
    },
    {
        id: '3',
        carrier: {
            id: 'c3',
            company_name: 'Speedy Transport',
            dot_number: '11223344',
            mc_number: 'MC112233',
            fleet_size: 5,
            operating_region: 'Southwest',
            is_active: true,
            created_at: new Date(Date.now() - 5000000000).toISOString(),
            updated_at: new Date().toISOString(),
        },
        composite_score: 65.0,
        tier: 'watchlist',
        category_breakdowns: {
            operational: 70.0,
            safety: 60.0,
            feedback: 65.0,
            transparency: 50.0,
            emissions: 40.0,
        },
        calculation_version: 'v1.0',
        last_calculated: new Date().toISOString(),
        created_at: new Date().toISOString(),
    },
];

class RatingService {
    private async delay(ms: number = 500): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async getRatings(): Promise<CarrierTrustScore[]> {
        await this.delay();
        return MOCK_RATINGS;
    }

    async getRating(id: string): Promise<CarrierTrustScore> {
        await this.delay();
        const rating = MOCK_RATINGS.find(r => r.id === id);
        if (!rating) throw new Error('Rating not found');
        return rating;
    }
}

export const ratingService = new RatingService();
