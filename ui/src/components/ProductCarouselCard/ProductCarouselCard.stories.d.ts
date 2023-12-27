/// <reference types="react" />
declare const _default: {
    title: string;
    component: import("react").FC<import("./ProductCarouselCard.types").ProductCarouselCardProps>;
    parameters: {
        backgrounds: {
            default: string;
        };
    };
};
export default _default;
export declare const Default: {
    args: {
        product: import("../ProductComparisonCommon/types").Product;
        toggleSelectedProduct: () => void;
        selectedItemIDs: never[];
        price: string;
        isLoading: boolean;
        isComparison: boolean;
    };
};
