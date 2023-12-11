/// <reference types="react" />
interface Image {
    url: string;
    alt: string | null;
    [key: string]: unknown;
}
interface BuyNow {
    vendorLink: string;
    isExternal: boolean;
    isAvailable: boolean;
}
interface Review {
    anchorHref: string;
    anchorId: string;
}
export interface Spec {
    key: string;
    value: string | null;
    rating?: undefined;
}
export interface SpecRating {
    key: string;
    rating: number;
    value?: undefined;
}
export type Specs = Array<Spec | SpecRating>;
export interface Product {
    id: string;
    title: string;
    image: Image;
    buyNow: BuyNow;
    readReview: Review;
    productSpecs: Specs;
}
export type Props = {
    items: Product[];
    onBuyClick?: (event: React.MouseEvent<HTMLButtonElement>) => unknown;
    onReviewClick?: (event: React.MouseEvent<HTMLButtonElement>) => unknown;
};
export interface ValueProps {
    readonly $bold?: boolean;
}
export interface HeadingProps {
    readonly $hidden?: boolean;
}
export {};
