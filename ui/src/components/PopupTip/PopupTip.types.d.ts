/// <reference types="" />
import { type IconSizes } from '../Icon/Icon.types';
export type PopupTipProps = {
    children: ReactNode;
    svg?: ReactNode;
    size?: IconSizes;
};
export type ControlledPopupTipProps = {
    children: ReactNode;
    isOpen: boolean;
    svg?: ReactNode;
    id: string;
    size?: IconSizes;
    className?: string;
};
export type Position = {
    left: number;
    top: number;
};
