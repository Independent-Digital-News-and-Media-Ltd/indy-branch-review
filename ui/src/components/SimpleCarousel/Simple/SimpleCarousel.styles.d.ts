/// <reference types="react" />
interface SimpleCarouselStylesProps {
    $captionHeight: number;
}
export declare const StyledCarousel: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("../Carousel.types").CarouselProps, SimpleCarouselStylesProps>> & Omit<import("react").FC<import("../Carousel.types").CarouselProps>, keyof import("react").Component<any, {}, any>>;
export declare const StyledMediaPlusCaption: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<Omit<Omit<import("../../MediaPlusCaption/MediaPlusCaption.types").MediaPlusCaptionForSliderProps, "ref"> & import("react").RefAttributes<HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
}, never>> & Omit<import("react").ForwardRefExoticComponent<Omit<import("../../MediaPlusCaption/MediaPlusCaption.types").MediaPlusCaptionForSliderProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>, keyof import("react").Component<any, {}, any>>;
export {};
