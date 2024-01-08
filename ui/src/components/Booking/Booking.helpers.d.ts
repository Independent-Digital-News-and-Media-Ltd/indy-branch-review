/// <reference types="" />
import { Amenity, BookingData } from './Booking.types';
export declare const readReviewButtonLabel: (name: string) => string;
export declare const iconMap: {
    [key: string]: ReactNode;
};
export declare class AmenityBuilder {
    amenity: Amenity;
    name(name: string): this;
    items(items: string[]): this;
    showTooltip(showTooltip: boolean): this;
    ref(ref: string): this;
    build(): Amenity;
}
export declare class BookingBuilder {
    booking: BookingData;
    id(id: string): this;
    name(name: string): this;
    url(url: string): this;
    price(price: string): this;
    reviewUrl(reviewUrl: string): this;
    isExternalUrl(isExternalUrl: boolean): this;
    amenities(amenities: Amenity[]): this;
    build(): BookingData;
}
