/// <reference types="" />
import { type IconSizes } from '../Icon/Icon.types';
export type PopupTipProps = {
    children: ReactNode;
    svg?: ReactNode;
    /** The size of the icon to be used */
    size?: IconSizes;
};
export interface ControlledPopupTipProps extends PopupTipProps {
    className?: string;
    isOpen: boolean;
    id: string;
}
export type Position = {
    left: number;
    top: number;
};
