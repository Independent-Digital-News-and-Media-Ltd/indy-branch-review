/// <reference types="react" />
export declare const Wrapper: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<{
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
