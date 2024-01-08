/// <reference types="" />
import { LivePrice } from '../../../types/PageContext';
import { Item } from '../ProductComparison.types';
export interface ModalProps {
    children: ReactNode;
    className?: string;
    isHidden?: boolean;
    returnFocus: string;
    items: Item[];
    hideProductModal: () => void;
    livePrices: LivePrice[];
}
