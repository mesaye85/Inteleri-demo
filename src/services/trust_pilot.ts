import { Review, ReviewEntity } from '@/types/trust_pilot';

const MOCK_ENTITIES: ReviewEntity[] = [
    {
        id: 'e1',
        entity_type: 'broker',
        name: 'FastLane Logistics',
        description: 'Premier logistics provider specializing in expedited freight.',
        contact_email: 'support@fastlane.com',
        contact_phone: '555-0123',
        city: 'Atlanta',
        state: 'GA',
        is_verified: true,
        total_reviews: 128,
        average_rating: 4.5,
        trust_score: 92.0,
        created_at: new Date(Date.now() - 31536000000).toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: 'e2',
        entity_type: 'shipper',
        name: 'Global Manufacturing Inc',
        description: 'Leading manufacturer of industrial equipment.',
        contact_email: 'logistics@globalmfg.com',
        contact_phone: '555-0456',
        city: 'Chicago',
        state: 'IL',
        is_verified: true,
        total_reviews: 45,
        average_rating: 3.8,
        trust_score: 85.0,
        created_at: new Date(Date.now() - 15552000000).toISOString(),
        updated_at: new Date().toISOString(),
    },
];

const MOCK_REVIEWS: Review[] = [
    {
        id: 'r1',
        entity: MOCK_ENTITIES[0],
        reviewer_name: 'John Doe Trucking',
        overall_rating: 5,
        title: 'Excellent payment terms and communication',
        content: 'Always a pleasure working with FastLane. They pay on time and their dispatchers are very professional.',
        category_ratings: {
            communication: 5,
            payment: 5,
            professionalism: 5,
        },
        experience_date: new Date(Date.now() - 604800000).toISOString(), // 1 week ago
        is_verified_purchase: true,
        status: 'approved',
        helpful_votes: 12,
        total_votes: 12,
        created_at: new Date(Date.now() - 500000000).toISOString(),
    },
    {
        id: 'r2',
        entity: MOCK_ENTITIES[0],
        reviewer_name: 'Smith Transport',
        overall_rating: 4,
        title: 'Good loads, sometimes slow detention approval',
        content: 'Great rates generally, but getting detention approved can take a bit of back and forth.',
        category_ratings: {
            communication: 4,
            payment: 5,
            professionalism: 4,
        },
        experience_date: new Date(Date.now() - 2592000000).toISOString(), // 1 month ago
        is_verified_purchase: true,
        status: 'approved',
        helpful_votes: 5,
        total_votes: 6,
        created_at: new Date(Date.now() - 2500000000).toISOString(),
    },
    {
        id: 'r3',
        entity: MOCK_ENTITIES[1],
        reviewer_name: 'Red Line Carriers',
        overall_rating: 3,
        title: 'Long wait times at facility',
        content: 'Appointment times are suggestions. Expect to wait 2-3 hours for loading.',
        category_ratings: {
            communication: 3,
            payment: 4,
            professionalism: 3,
        },
        experience_date: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
        is_verified_purchase: true,
        status: 'approved',
        helpful_votes: 8,
        total_votes: 10,
        created_at: new Date(Date.now() - 86400000).toISOString(),
    },
];

class TrustPilotService {
    private async delay(ms: number = 500): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async getReviews(): Promise<Review[]> {
        await this.delay();
        return MOCK_REVIEWS;
    }

    async getReview(id: string): Promise<Review> {
        await this.delay();
        const review = MOCK_REVIEWS.find(r => r.id === id);
        if (!review) throw new Error('Review not found');
        return review;
    }

    async getEntities(): Promise<ReviewEntity[]> {
        await this.delay();
        return MOCK_ENTITIES;
    }
}

export const trustPilotService = new TrustPilotService();
