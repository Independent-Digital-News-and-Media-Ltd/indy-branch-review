/// <reference types="react" />
export declare const StyledButton: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, never>>;
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
