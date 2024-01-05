/// <reference types="react" />
import { SocialMedia } from '../SocialShareButtons.types';
export declare const StyledButton: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, {
    $type?: SocialMedia | undefined;
}>>;
export declare const StyledIcon: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<{
    [x: string]: any;
    svg: any;
}, never>> & Omit<{
    ({ svg, ...rest }: {
        [x: string]: any;
        svg: any;
    }): import("react/jsx-runtime").JSX.Element;
    propTypes: {
        svg: any;
    };
}, keyof import("react").Component<any, {}, any>>;
