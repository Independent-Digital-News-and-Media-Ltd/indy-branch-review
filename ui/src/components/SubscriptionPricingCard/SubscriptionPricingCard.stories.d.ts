import BaseProps from './Base/SubscriptionPricingCard.types';
import WithDetailsProps from './WithDetails/SubscriptionPricingCardWithDetails.types';
declare const _default: {
    title: string;
    component: <T extends BaseProps>(args: T) => import("react/jsx-runtime").JSX.Element;
    argTypes: {
        children: {
            description: string;
            options: string[];
            mapping: {
                Text: string;
                'Single Element': import("react/jsx-runtime").JSX.Element;
                'Multiple Elements': import("react/jsx-runtime").JSX.Element[];
            };
        };
    };
};
export default _default;
export declare const Default: {
    args: {
        children: string;
    };
};
export declare const DefaultWithBadge: {
    args: {
        badgeText: string;
        children: string;
    };
    render: <T extends BaseProps>(args: T) => import("react/jsx-runtime").JSX.Element;
};
export declare const DefaultWithBadgeAndDetails: {
    args: {
        subscriptionLength: string;
        discountedPrice: string;
        normalPrice: string;
        continuedPrice: string;
        callToActionText: string;
        badgeText: string;
        children: string;
    };
    render: <T extends WithDetailsProps>(args: T) => import("react/jsx-runtime").JSX.Element;
};
