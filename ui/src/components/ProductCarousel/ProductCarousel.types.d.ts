/// <reference types="" />
import { Ref } from 'react';
import { LivePrice, Dispatchers } from '../../types/PageContext';
import { Product } from '../ProductComparisonCommon/types';
export type ProductCarouselProps = {
    initialIndex: number;
    isComparison: boolean;
    livePrices: LivePrice[];
    products: Product[];
    selectedItemIDs: string[];
    title: string;
    fetchPrice: (productId: string, endpoint: string) => void;
    onToggleSelectedProduct: Dispatchers['toggleSelectedProduct'];
    onBuyNowClick: Dispatchers['clickProductCarouselBuyNow'];
    onReadReviewClick: Dispatchers['clickProductCarouselReadReview'];
};
export type DefaultRenderSlideCallback = (arg: {
    itemIndex: number;
    slideIndex: number;
    item: Product;
    isVisible: boolean;
    ref: Ref<HTMLDivElement>;
}) => ReactNode;
