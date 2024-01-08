/// <reference types="react" />
type ShowHideToggleProps = {
    isShowing: boolean;
};
export declare const ShowButton: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("styled-components/dist/types").FastOmit<import("styled-components/dist/types").Substitute<import("../IconButton/IconButton.types").IconButtonProps, import("../IconButton/IconButton.types").IconButtonProps>, never>, never>> & Omit<import("react").FC<import("../IconButton/IconButton.types").IconButtonProps>, keyof import("react").Component<any, {}, any>>;
export declare const HideButton: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("styled-components/dist/types").FastOmit<import("styled-components/dist/types").Substitute<import("../IconButton/IconButton.types").IconButtonProps, import("../IconButton/IconButton.types").IconButtonProps>, never>, never>> & Omit<import("react").FC<import("../IconButton/IconButton.types").IconButtonProps>, keyof import("react").Component<any, {}, any>>;
declare const ShowHideToggle: React.FC<ShowHideToggleProps>;
export default ShowHideToggle;
