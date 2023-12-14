export type Item = {
    id: string;
    title: string;
    image?: string;
    [key: string]: unknown;
};
export type ProductComparisonProps = {
    items: Item[];
};
