export default interface Props {
    subscriptionLength: string;
    discountedPrice: string;
    normalPrice: string;
    continuedPrice: string;
    callToActionText: string;
    shouldRenderWithMediumFontWeight?: boolean;
    badgeText?: string;
    buttonProps?: object;
}
