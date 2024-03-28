/// <reference types="react" />
export declare const StyledCarousel: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<{
    [x: string]: any;
    className: any;
    items: any;
    ButtonNext: any;
    ButtonPrev: any;
    renderSlide: any;
}, never>> & Omit<{
    ({ className, items, ButtonNext, ButtonPrev, renderSlide, ...props }: {
        [x: string]: any;
        className: any;
        items: any;
        ButtonNext: any;
        ButtonPrev: any;
        renderSlide: any;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
    propTypes: {
        children: any;
        className: any;
        initialIndex: any;
        ButtonNext: any;
        ButtonPrev: any;
    };
}, keyof import("react").Component<any, {}, any>>;
