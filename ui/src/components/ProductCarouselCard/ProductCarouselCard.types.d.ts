import { Dispatchers, LivePrice } from '../../types/PageContext';
import { Product, BuyNowClickHandler, ReadReviewClickHandler } from '../ProductComparisonCommon/types';
export type ProductCarouselCardProps = {
    isComparison: boolean;
    isLoading: boolean;
    price: string;
    product: Product;
    selectedItemIDs: string[];
    vendorLink: string;
    onToggleSelectedProduct: Dispatchers['toggleSelectedProduct'];
    onBuyNowClick: BuyNowClickHandler;
    onReadReviewClick: ReadReviewClickHandler;
};
export type LazyProductCardProps = {
    isVisible: boolean;
    livePrice: LivePrice;
    isComparison: boolean;
    product: Product;
    selectedItemIDs: string[];
    fetchPrice: (productId: string, endpoint: string) => void;
    onToggleSelectedProduct: Dispatchers['toggleSelectedProduct'];
    onBuyNowClick: BuyNowClickHandler;
    onReadReviewClick: ReadReviewClickHandler;
};
