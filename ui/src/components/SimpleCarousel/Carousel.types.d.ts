/// <reference types="react" />
/// <reference types="" />
export type Item<T> = {
    [key: string]: T;
};
export interface SimpleRenderSlideProps {
    captionRef: (element: HTMLDivElement | null) => void;
    item: Item<unknown>;
}
export interface SimpleSliderProps {
    items: Item<unknown>[];
    renderSlide: (props: SimpleRenderSlideProps) => JSX.Element;
    currentIndex: number;
    handleCaptionRef: (index: number) => (element: HTMLDivElement | null) => void;
}
export interface ControlsProps {
    handlePrev: () => void;
    handleNext: () => void;
}
export interface SimpleControlsProps extends ControlsProps {
    itemCount: number;
    currentIndex: number;
    contentType?: string;
}
export interface CarouselProps {
    title: string;
    description: string;
    children: ReactNode;
    showTitle?: boolean;
    className?: string;
}
export interface SimpleCarouselProps {
    title: string;
    items: Item<unknown>[];
    renderSlide: (props: SimpleRenderSlideProps) => JSX.Element;
}
export interface HeaderProps {
    title: string;
    showTitle: boolean;
}
