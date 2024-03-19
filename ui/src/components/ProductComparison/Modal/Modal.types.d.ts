/// <reference types="" />
import { LivePrice } from '../../../types/PageContext';
import { BuyNowClickHandler, ReadReviewClickHandler } from '../../ProductComparisonCommon/types';
import { Item } from '../ProductComparison.types';
export interface ModalProps {
    children: ReactNode;
    className?: string;
    isHidden?: boolean;
    returnFocus: string;
    items: Item[];
    livePrices: LivePrice[];
    hideProductModal: () => void;
    onBuyNowClick: BuyNowClickHandler;
    onReadReviewClick: ReadReviewClickHandler;
}
