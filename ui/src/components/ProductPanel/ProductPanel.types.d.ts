/// <reference types="" />
import { JumpLinkProps } from '../JumpLink/JumpLink.types';
import { Items } from '../SpecsList/SpecsList.types';
export interface ProductPanelProps {
    title?: string;
    rating?: number;
    image?: ReactNode;
    items?: Items[];
    description?: string;
    jumpLink?: JumpLinkProps;
}
