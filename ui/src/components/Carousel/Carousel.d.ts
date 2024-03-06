export default Carousel;
declare function Carousel({ className, items, ButtonNext, ButtonPrev, renderSlide, ...props }: {
    [x: string]: any;
    className: any;
    items: any;
    ButtonNext: any;
    ButtonPrev: any;
    renderSlide: any;
}): import("react/jsx-runtime").JSX.Element;
declare namespace Carousel {
    export let displayName: string;
    export { propTypes };
}
import propTypes from './Carousel.types';
