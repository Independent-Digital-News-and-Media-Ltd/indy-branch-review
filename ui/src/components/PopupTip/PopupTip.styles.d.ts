/// <reference types="react" />
type TriggerProps = {
    $gap: number;
    $arrowheight: number;
    $arrowwidth: number;
    $triggerwidth: number;
};
export declare const StyledIcon: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("../Icon/Icon.types").IconProps, never>> & Omit<import("react").FC<import("../Icon/Icon.types").IconProps>, keyof import("react").Component<any, {}, any>>;
export declare const Wrapper: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;
/**
 * @todo replace with IconButton
 */
export declare const Trigger: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, TriggerProps>>;
export declare const Body: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;
export {};
