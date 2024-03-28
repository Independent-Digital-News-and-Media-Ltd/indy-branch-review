/// <reference types="react" />
import { WrapperProps, UserIconProps } from './RegisterLoginButton.types';
/**
 * The call to action button which sits alongside the main button
 */
export declare const CTA: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, never>>;
/**
 * The main button which displays the users current status
 */
export declare const Button: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, never>>;
export declare const Wrapper: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, WrapperProps>>;
export declare const UserIcon: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("styled-components/dist/types").FastOmit<import("styled-components/dist/types").Substitute<import("../Icon/Icon.types").IconProps, import("../Icon/Icon.types").IconProps>, never>, UserIconProps>> & Omit<import("react").FC<import("../Icon/Icon.types").IconProps>, keyof import("react").Component<any, {}, any>>;
export declare const IconWrapper: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;
export declare const Label: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<Omit<import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never>, "ref"> & {
    ref?: ((instance: HTMLSpanElement | null) => void) | import("react").RefObject<HTMLSpanElement> | null | undefined;
}, never>> & Omit<import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never>>, keyof import("react").Component<any, {}, any>>;
export declare const Status: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("styled-components/dist/types").FastOmit<import("styled-components/dist/types").Substitute<Omit<import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never>, "ref"> & {
    ref?: ((instance: HTMLSpanElement | null) => void) | import("react").RefObject<HTMLSpanElement> | null | undefined;
}, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> & {
    ref?: ((instance: HTMLElement | null) => void) | import("react").RefObject<HTMLElement> | null | undefined;
}>, never>, never>>;
