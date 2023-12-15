/// <reference types="" />
export interface IconButtonProps {
    /** The SVG to render the icon with */
    svg: ReactNode;
    /** A title attribute for describing the button */
    title?: string;
    /** The size of the icon within the button */
    size?: IconSizes;
    /** Consume only the real-estate of the icon */
    isCosy?: boolean;
    /** Whether the button is disabled */
    isDisabled?: boolean;
}
export interface WrapperProps {
    $size: IconSizes;
}
