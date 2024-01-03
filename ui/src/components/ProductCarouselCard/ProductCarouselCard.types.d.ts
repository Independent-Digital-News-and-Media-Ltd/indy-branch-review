import { Product } from '../ProductComparisonCommon/types';
export type ProductCarouselCardProps = {
    isComparison: boolean;
    isLoading: boolean;
    price: string;
    product: Product;
    selectedItemIDs: string[];
    toggleSelectedProduct: (id: string) => void;
    vendorLinkUpdated: string;
};
export type LazyProductCardProps = {
    fetchPrice: (productId: string, endpoint: string) => void;
    isComparison: boolean;
    isFetched: boolean;
    isLoading: boolean;
    isVisible: boolean;
    livePrice: string;
    product: Product;
    selectedItemIDs: string[];
    toggleSelectedProduct: (id: string) => void;
    vendorLinkUpdated: string;
};
