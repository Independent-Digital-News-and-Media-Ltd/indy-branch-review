import { FC } from 'react';
export interface ItemProps {
    merchant: string;
    price: string;
    link: string;
}
export interface ItemsProps {
    items: ItemProps[];
    renderItems: (item: ItemProps) => JSX.Element;
}
export interface PriceComparisonComponentProps {
    className?: string;
    productName?: string;
    items: ItemProps[];
    isLoading: boolean;
    isFallback: boolean;
}
export interface PriceComparisonProps {
    className?: string;
    endpoint: string;
    productName?: string;
    vendorName: string;
    vendorLink: string;
    prettyPrice: string;
    responseTransformer: (data: unknown) => ItemProps[];
    initialFetch?: boolean;
    Component?: FC<PriceComparisonComponentProps>;
}
export interface LoadingProps {
    className?: string;
    title?: string;
}
export interface FallbackProps {
    className?: string;
    Component: () => JSX.Element;
}
export interface ListFallbackProps extends FallbackProps {
    title: string;
}
