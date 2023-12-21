declare namespace _default {
    export let title: string;
    export { ProductCarouselCard as component };
    export namespace parameters {
        namespace backgrounds {
            let _default: string;
            export { _default as default };
        }
    }
    export namespace argTypes {
        namespace image {
            let description: string;
            namespace control {
                let disable: boolean;
            }
        }
        namespace checkbox {
            export namespace control_1 {
                let disable_1: boolean;
                export { disable_1 as disable };
            }
            export { control_1 as control };
        }
    }
}
export default _default;
export namespace Default {
    export { defaultArgs as args };
}
import ProductCarouselCard from './ProductCarouselCard';
declare namespace defaultArgs {
    export let anchorHref: string;
    export let anchorId: string;
    export let bestForPrefixed: string;
    export let id: string;
    export let intro: string;
    export let prettyPrice: string;
    export let rating: number;
    let title_1: string;
    export { title_1 as title };
    export let vendorLink: string;
    let image_1: import("react/jsx-runtime").JSX.Element;
    export { image_1 as image };
    let checkbox_1: null;
    export { checkbox_1 as checkbox };
    export let isExternal: boolean;
    export let isLoading: boolean;
}
