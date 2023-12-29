export interface PriceListItem {
    action: string;
    price: string;
    icon: string;
}
export interface PriceListProps {
    title?: string;
    updated?: string;
    items: PriceListItem[];
}
