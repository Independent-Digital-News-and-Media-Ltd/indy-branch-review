/// <reference types="react" />
export declare const Wrapper: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $lines: number;
}>>;
export declare const CustomDropdown: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<{
    [x: string]: any;
    defaultOpen?: boolean | undefined;
}, never>> & Omit<{
    ({ defaultOpen, ...props }: {
        [x: string]: any;
        defaultOpen?: boolean | undefined;
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
