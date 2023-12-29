export default interface SubscriptionOfferCardProps {
    subscriptionType?: string;
    subscriptionLength: string;
    newPrice: string;
    oldPrice: string;
    terms: string;
    buttonProps?: {
        [key: string]: unknown;
    };
}
