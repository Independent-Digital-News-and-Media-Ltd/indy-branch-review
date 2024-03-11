/// <reference types="react" />
export declare const Wrapper: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;
export declare const Title: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, never>>;
/**
 * @todo fix instance where icon is not visible ∴ not added to Symbols during
 * CSR
 */
export declare const ShowMore: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never>>;
export declare const ChevronIcon: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("../../Icon/Icon.types").IconProps, never>> & Omit<import("react").FC<import("../../Icon/Icon.types").IconProps>, keyof import("react").Component<any, {}, any>>;
export declare const CustomDropdown: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<{
    id: any;
    className: any;
    trigger: any;
    children: any;
    isOpen?: boolean | undefined;
    disabled?: boolean | undefined;
    onInteract: any;
}, never>> & Omit<{
    ({ id, className, trigger, children, isOpen, disabled, onInteract, }: {
        id: any;
        className: any;
        trigger: any;
        children: any;
        isOpen?: boolean | undefined;
        disabled?: boolean | undefined;
        onInteract: any;
    }): import("react/jsx-runtime").JSX.Element;
    propTypes: {
        className: any;
        id: any;
        trigger: any;
        children: any;
        isOpen: any;
        disabled: any;
        onInteract: any;
    };
}, keyof import("react").Component<any, {}, any>>;
export declare const Content: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;
export declare const List: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, never>>;
export declare const Item: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, never>>;
export declare const Merchant: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;
export declare const Options: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;
export declare const Price: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;
export declare const CTA: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, never>>;
export declare const Notice: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, never>>;
