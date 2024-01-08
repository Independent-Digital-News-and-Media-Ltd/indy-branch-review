/// <reference types="" />
import { ButtonType } from '../Button/Button.types';
export type CommonButtonProps = Omit<ButtonType, 'children'>;
export interface IconButtonProps extends CommonButtonProps {
    /** The SVG to render the icon with */
    svg: ReactNode;
    /** A title attribute for describing the button */
    title?: string;
    /** The size of the icon within the button */
    size?: IconSizes;
    /** Consume only the real-estate of the icon */
    isCosy?: boolean;
    /** Whether the button is disabled */
    isDisabled?: boolean;
    /** width and height of button */
    width?: number;
    onClick?: () => void;
}
export interface WrapperProps extends CommonButtonProps {
    $size: IconSizes;
    /** width and height of button */
    width?: number;
}
