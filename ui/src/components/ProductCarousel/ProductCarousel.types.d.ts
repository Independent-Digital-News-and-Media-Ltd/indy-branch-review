/// <reference types="" />
import { Ref } from 'react';
import { Product } from '../ProductComparisonCommon/types';
import { LivePrice, Dispatchers } from '../../types/PageContext';
export type ProductCarouselProps = {
    fetchPrice: (productId: string, endpoint: string) => void;
    initialIndex: number;
    isComparison: boolean;
    livePrices: LivePrice[];
    products: Product[];
    selectedItemIDs: string[];
    title: string;
    dispatchers: Dispatchers;
};
export type DefaultRenderSlideCallback = (arg: {
    slideIndex: number;
    item: Product;
    isVisible: boolean;
    ref: Ref<HTMLDivElement>;
}) => ReactNode;
