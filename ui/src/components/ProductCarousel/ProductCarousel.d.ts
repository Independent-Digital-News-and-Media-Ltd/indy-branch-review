export default ProductCarousel;
declare function ProductCarousel({ items, title, initialIndex, responseTransformer, ...props }: {
    [x: string]: any;
    items: any;
    title: any;
    initialIndex?: number | undefined;
    responseTransformer: any;
}): import("react/jsx-runtime").JSX.Element;
declare namespace ProductCarousel {
    export { propTypes };
}
import propTypes from './ProductCarousel.types';
