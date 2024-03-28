/// <reference types="" />
/// <reference types="react" />
import { SvgrProps } from '../../types/svgr.d';
import { IconProps } from '../Icon/Icon.types';
import { CTA } from './RegisterLoginButton.styles';
export interface RegisterLoginButtonProps {
    id?: string;
    /** The main text of the button */
    children: Children;
    /** A subtext to the main button label */
    status?: string;
    /** A href for the button to follow */
    href: string;
    /** Whether the button is representing a user that is a registered */
    isRegistered?: boolean;
    /** Whether the button is representing a user that is a subscriber */
    isSubscriber?: boolean;
    /** An optional `<CTA />` to sit alongside the main button. */
    cta?: React.ReactElement<typeof CTA>;
}
export interface WrapperProps {
    /** Whether the button is representing a user that is a registered */
    $isRegistered?: boolean;
    /** Whether the button is representing a user that is a subscriber */
    $isSubscriber?: boolean;
}
export interface UserIconProps extends Omit<IconProps, 'svg'> {
    svg?: SvgrProps;
}
