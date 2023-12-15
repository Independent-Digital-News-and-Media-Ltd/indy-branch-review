declare namespace _default {
    export let title: string;
    export { ProductCarousel as component };
}
export default _default;
export namespace Default {
    export { defaultArgs as args };
    export function render(props: any): import("react/jsx-runtime").JSX.Element;
}
import ProductCarousel from './ProductCarousel';
declare namespace defaultArgs {
    let title_1: string;
    export { title_1 as title };
    export function responseTransformer(x: any): {
        price: any;
        link: any;
    };
    export let items: {
        anchorHref: string;
        anchorId: string;
        bestForPrefixed: string;
        id: string;
        intro: string;
        prettyPrice: string;
        rating: number;
        title: string;
        vendorLink: string;
        image: import("react/jsx-runtime").JSX.Element;
        endpoint: string;
    }[];
}
