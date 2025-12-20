export type EntityType = 'broker' | 'shipper' | 'carrier' | 'warehouse';
export type ReviewStatus = 'approved' | 'pending' | 'rejected' | 'flagged';

export interface ReviewEntity {
    id: string;
    entity_type: EntityType;
    name: string;
    description: string;
    contact_email: string;
    contact_phone: string;
    city: string;
    state: string;
    is_verified: boolean;
    total_reviews: number;
    average_rating: number;
    trust_score: number;
    created_at: string;
    updated_at: string;
}

export interface CategoryRatings {
    communication: number;
    payment: number;
    professionalism: number;
}

export interface Review {
    id: string;
    entity: ReviewEntity;
    reviewer_name: string;
    overall_rating: number;
    title: string;
    content: string;
    category_ratings: CategoryRatings;
    experience_date: string;
    is_verified_purchase: boolean;
    status: ReviewStatus;
    helpful_votes: number;
    total_votes: number;
    created_at: string;
}
