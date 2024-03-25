import { TagStyleBySize, TextTransform } from './text-styles.types';
export declare const h1: import("styled-components").RuleSet<object>;
export declare const h2: import("styled-components").RuleSet<object>;
export declare const h3: import("styled-components").RuleSet<object>;
export declare const h4: import("styled-components").RuleSet<object>;
export declare const h5: import("styled-components").RuleSet<object>;
export declare const h6: import("styled-components").RuleSet<object>;
export declare const p: import("styled-components").RuleSet<object>;
export declare const a: import("styled-components").RuleSet<object>;
/**
 * All of the text styles below are waiting tokens and therefore are
 * loosely defined by the design system.
 *
 * Until the tokens have been laid out then the recommendation is to simply
 * create a unique export that encompasses ONLY the font styles, that is:
 * - try to define the full font-shorthand where possible e.g. `font: normal
 *   16px/20px ${primaryFont}`
 * - only `font-*`, `letter-spacing` etc
 * - no `margin` or `padding` or `color` etc
 */
export declare const headline: {
    base: {
        mobile: string;
        tablet: string;
        laptop: string;
    };
    voices: {
        mobile: string;
        tablet: string;
        laptop: string;
    };
    infact: string;
};
export declare const subheadline: {
    base: {
        mobile: string;
        tablet: string;
        laptop: string;
    };
    luxury: {
        mobile: string;
        tablet: string;
        laptop: string;
    };
};
export declare const blockQuoteQuote = "bold 3.5em Georgia";
export declare const tag: TagStyleBySize;
export declare const storyCard: {
    relatedLinks: {
        carousel: {
            font: string;
            'text-transform': string;
        };
    };
};
export declare const recommendedLinks: {
    font: string;
    letterSpacing: string;
};
export declare const button: {
    base: string;
    medium: string;
    large: string;
    xLarge: string;
};
export declare const buttonGroup: {
    base: string;
};
export declare const checkbox: {
    xSmall: string;
    small: string;
    base: string;
    large: string;
};
export declare const body: {
    h2: string;
    h3: string;
    list: string;
};
export declare const ImageTile: {
    title: string;
};
export declare const tooltip: {
    base: string;
};
export declare const media: {
    caption: string;
    pagination: string;
};
export declare const quote: {
    quoteText: {
        mobile: string;
        tablet: string;
        laptop: string;
    };
    title: string;
    citation: string;
};
export declare const capsule: {
    base: string;
};
/** e.g. related article headline on cards */
export declare const relatedStoriesHeadline: {
    base: string;
};
export declare const premiumBadge: {
    base: string;
};
export declare const priceList: {
    updated: string;
    action: string;
    price: string;
};
export declare const controlImage = "bold 15px/1.4 'Indy Serif', 'Indy Serif Fallback', serif";
export declare const productComparison: {
    product: {
        name: string;
    };
    spec: {
        heading: string;
        value: string;
    };
    modal: {
        title: {
            base: string;
            large: string;
        };
        body: string;
    };
    table: {
        font: string;
    };
};
export declare const booking: {
    small: string;
    base: string;
    large: string;
    title: string;
    price: {
        font: string;
        letterSpacing: string;
    };
    noPrice: {
        font: string;
        letterSpacing: string;
    };
    card: {
        xSmall: string;
        small: string;
        base: string;
        large: string;
        price: {
            font: string;
            letterSpacing: string;
        };
    };
};
export declare const specsList: {
    small: string;
    base: string;
};
export declare const continueReading: import("styled-components").RuleSet<object>;
export declare const productTitle: {
    mobile: {
        font: string;
        letterSpacing: string;
    };
    tablet: {
        font: string;
        letterSpacing: string;
    };
    laptop: {
        font: string;
        letterSpacing: string;
    };
};
export declare const productCarouselCardBestFor: {
    mobile: {
        font: string;
        lineHeight: string;
    };
    tablet: {
        font: string;
        lineHeight: string;
    };
    laptop: {
        font: string;
        lineHeight: string;
    };
};
export declare const productCarouselCardTitle: {
    mobile: {
        font: string;
        lineHeight: string;
    };
    tablet: {
        font: string;
        lineHeight: string;
    };
    laptop: {
        font: string;
        lineHeight: string;
    };
};
export declare const productCarouselCardPrice: {
    font: string;
    lineHeight: string;
};
export declare const formInput: {
    base: string;
    label: string;
    helpText: string;
    error: string;
    hint: string;
};
export declare const sellingPage: {
    variantThree: {
        title: {
            mobile: string;
            tablet: string;
        };
        subTitle: {
            mobile: string;
            tablet: string;
            laptop: string;
        };
        cardTerms: string;
    };
};
export declare const subscriptionPricingCard: {
    pricingDetails: {
        subscriptionLength: string;
        normalDiscountedPricing: string;
        continuedPrice: string;
    };
    radioButtonVariant: {
        pricingDetails: {
            subscriptionLength: {
                font: string;
                letterSpacing: string;
            };
            normalDiscountedPricing: {
                font: string;
                letterSpacing: string;
            };
            continuedPrice: string;
        };
    };
};
export declare const subscriptionConfirmationPage: {
    onboardingTitle: {
        font: string;
        letterSpacing: string;
    };
    onboardingBreadcrumb: string;
    cardTwoStepSubBeforeReg: {
        font: string;
        letterSpacing: string;
    };
    completeYourProfileForm: {
        title: string;
        terms: string;
    };
};
export declare const subscriberOffer: {
    title: string;
    small: string;
    base: string;
    large: string;
    offerLength: string;
    terms: string;
};
export declare const blockQuote: {
    quoteText: {
        mobile: {
            font: string;
        };
        tablet: {
            font: string;
        };
        laptop: {
            font: string;
        };
    };
    citation: string;
};
export declare const infoBox: {
    text: string;
    headline: string;
    subheadline: string;
    crosshead: {
        font: string;
        textTransform: TextTransform;
    };
};
export declare const verdict: {
    h2: string;
    h5: {
        font: string;
        letterSpacing: string;
        textTransform: TextTransform;
    };
};
export declare const registerLoginButton: {
    base: import("styled-components").RuleSet<object>;
    status: import("styled-components").RuleSet<object>;
    link: import("styled-components").RuleSet<object>;
};
