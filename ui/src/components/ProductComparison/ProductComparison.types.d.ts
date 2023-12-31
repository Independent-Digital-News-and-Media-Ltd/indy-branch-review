/// <reference types="" />
import { Product } from '../ProductComparisonCommon/types';
import { Dispatchers, LivePrice } from '../../types/PageContext';
export interface Spec {
    key: string;
    value: string | null | number;
}
export type Specs = Spec[];
export interface BuyNow {
    vendorLink: string;
    isExternal: boolean;
    isAvailable: boolean;
}
export interface Review {
    anchorHref: string;
    anchorId: string;
}
export type Item = {
    best: string;
    buyNow: BuyNow;
    id: string;
    image: ReactNode;
    price: string;
    productSpecs: Specs;
    rating: number;
    readReview: Review;
    title: string;
};
export type ProductComparisonProps = {
    products: Product[];
    returnFocus: string;
    selectedItemIDs: string[];
    showModal: boolean;
    dispatchers: Dispatchers;
    livePrices: LivePrice[];
};
export interface LayoutProps {
    $columns?: number;
    $rows?: number;
}
