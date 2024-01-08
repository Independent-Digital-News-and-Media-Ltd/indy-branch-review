/// <reference types="react" />
export declare const Wrapper: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;
export declare const TooltipButton: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, never>>;
interface TooltipBodyProps {
    $isOpen?: boolean;
}
export declare const TooltipBody: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("styled-components/dist/types").FastOmit<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & {
    ref?: ((instance: HTMLSpanElement | null) => void) | import("react").RefObject<HTMLSpanElement> | null | undefined;
}>, never>, TooltipBodyProps>>;
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
export {};
