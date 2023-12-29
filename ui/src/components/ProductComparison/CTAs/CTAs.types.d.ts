/// <reference types="react" />
import { LivePrice } from '../../../types/PageContext';
import { Item } from '../ProductComparison.types';
export type Props = {
    items: Item[];
    onBuyClick?: (event: React.MouseEvent<HTMLButtonElement>) => unknown;
    onReviewClick?: (event: React.MouseEvent<HTMLButtonElement>) => unknown;
    livePrices: LivePrice[];
};
