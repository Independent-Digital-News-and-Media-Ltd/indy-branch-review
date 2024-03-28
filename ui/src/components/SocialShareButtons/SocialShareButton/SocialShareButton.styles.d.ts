/// <reference types="react" />
import { SocialMedia } from '../SocialShareButtons.types';
export declare const StyledButton: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, {
    $type?: SocialMedia | undefined;
}>>;
export declare const StyledIcon: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("../../Icon/Icon.types").IconProps, never>> & Omit<import("react").FC<import("../../Icon/Icon.types").IconProps>, keyof import("react").Component<any, {}, any>>;
