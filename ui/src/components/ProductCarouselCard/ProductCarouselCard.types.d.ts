import { Product } from '../ProductComparisonCommon/types';
import { LivePrice } from '../../types/PageContext';
export type ProductCarouselCardProps = {
    isComparison: boolean;
    isLoading: boolean;
    price: string;
    product: Product;
    selectedItemIDs: string[];
    toggleSelectedProduct: (id: string) => void;
    vendorLink: string;
};
export type LazyProductCardProps = {
    fetchPrice: (productId: string, endpoint: string) => void;
    isVisible: boolean;
    livePrice: LivePrice;
    isComparison: boolean;
    product: Product;
    selectedItemIDs: string[];
    toggleSelectedProduct: (id: string) => void;
};
