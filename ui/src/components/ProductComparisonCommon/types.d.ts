/// <reference types="" />
export type ProductSpec = {
    key: string;
    value: string | number | null;
};
export type Product = {
    anchorHref: string;
    anchorId: string;
    bestForPrefixed: string;
    id: string;
    prettyPrice: string;
    rating: number;
    title: string;
    vendorLink: string;
    image: ReactNode;
    endpoint: string;
    isExternal: boolean;
    productSpec: ProductSpec[];
    bestFor: string;
    isAvailable: boolean;
};
