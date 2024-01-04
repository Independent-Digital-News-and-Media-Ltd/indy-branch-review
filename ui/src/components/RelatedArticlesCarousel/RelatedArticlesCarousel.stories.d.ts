declare namespace _default {
    export let title: string;
    export { RelatedArticlesCarousel as component };
}
export default _default;
export namespace Default {
    export { defaultArgs as args };
    export let decorators: ((Story: import("react").FC) => import("react/jsx-runtime").JSX.Element)[];
}
export namespace FewItems {
    export namespace args {
        export let items: ({
            title: string;
            image: import("react/jsx-runtime").JSX.Element;
            href: string;
            isSponsored?: undefined;
        } | {
            title: string;
            image: import("react/jsx-runtime").JSX.Element;
            href: string;
            isSponsored: boolean;
        })[];
        let title_1: string;
        export { title_1 as title };
    }
    let decorators_1: ((Story: import("react").FC) => import("react/jsx-runtime").JSX.Element)[];
    export { decorators_1 as decorators };
}
import RelatedArticlesCarousel from '.';
declare namespace defaultArgs {
    let items_1: ({
        title: string;
        image: import("react/jsx-runtime").JSX.Element;
        href: string;
        isSponsored?: undefined;
    } | {
        title: string;
        image: import("react/jsx-runtime").JSX.Element;
        href: string;
        isSponsored: boolean;
    })[];
    export { items_1 as items };
}
