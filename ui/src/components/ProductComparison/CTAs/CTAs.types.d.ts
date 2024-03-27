import { LivePrice } from '../../../types/PageContext';
import { BuyNowClickHandler, ReadReviewClickHandler } from '../../ProductComparisonCommon/types';
import { Item } from '../ProductComparison.types';
export type Props = {
    items: Item[];
    livePrices: LivePrice[];
    onBuyNowClick: BuyNowClickHandler;
    onReadReviewClick: ReadReviewClickHandler;
};
