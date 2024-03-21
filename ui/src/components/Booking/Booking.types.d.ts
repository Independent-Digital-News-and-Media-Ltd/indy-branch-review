export type Amenity = {
    ref: string;
    name: string;
    items: Array<string>;
    showTooltip: boolean;
};
export type BookingData = {
    id: string;
    name: string;
    price: string;
    reviewUrl: string;
    isExternalUrl: boolean;
    url: string;
    amenities: Array<Amenity>;
};
export type BookingProps = BookingData;
