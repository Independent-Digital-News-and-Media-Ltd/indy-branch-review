/// <reference types="react" />
export declare const TwoColumnLayout: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("../Layout.types").LayoutProps, never>> & Omit<import("react").FC<import("../Layout.types").LayoutProps>, keyof import("react").Component<any, {}, any>>;
export declare const Main: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;
export declare const Sidebar: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $visibleAtWidth?: string | undefined;
}>>;
