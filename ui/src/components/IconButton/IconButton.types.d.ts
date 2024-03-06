import { SvgrProps } from '../../types/svgr.d';
import { ButtonType } from '../Button/Button.types';
import { IconSizes } from '../Icon/Icon.types';
export type CommonButtonProps = Omit<ButtonType, 'children'>;
export interface IconButtonProps extends CommonButtonProps {
    /** The SVG to render the icon with */
    svg: SvgrProps;
    /** A title attribute for describing the button */
    title?: string;
    /** The size of the icon within the button */
    size?: IconSizes;
    /** Consume only the real-estate of the icon whilst still providing the minimum touch area of 44px */
    isCosy?: boolean;
    /** Whether the button is disabled */
    isDisabled?: boolean;
    onClick?: () => void;
}
export interface WrapperProps extends CommonButtonProps {
    $size: IconSizes;
}
