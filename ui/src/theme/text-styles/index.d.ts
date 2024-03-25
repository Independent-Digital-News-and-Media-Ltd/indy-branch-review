/**
 * @explain This step is necessary in order to allow the imported modules to be
 * merged into the base theme. Modules are not supported by Ramda's
 * mergeDeepRight function and so spreading them here produces new objects from
 * them.
 */
export declare const base: {
    h1: import("styled-components").RuleSet<object>;
    h2: import("styled-components").RuleSet<object>;
    h3: import("styled-components").RuleSet<object>;
    h4: import("styled-components").RuleSet<object>;
    h5: import("styled-components").RuleSet<object>;
    h6: import("styled-components").RuleSet<object>;
    p: import("styled-components").RuleSet<object>;
    a: import("styled-components").RuleSet<object>;
    headline: {
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
    subheadline: {
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
    blockQuoteQuote: "bold 3.5em Georgia";
    tag: import("./text-styles.types").TagStyleBySize;
    storyCard: {
        relatedLinks: {
            carousel: {
                font: string;
                'text-transform': string;
            };
        };
    };
    recommendedLinks: {
        font: string;
        letterSpacing: string;
    };
    button: {
        base: string;
        medium: string;
        large: string;
        xLarge: string;
    };
    buttonGroup: {
        base: string;
    };
    checkbox: {
        xSmall: string;
        small: string;
        base: string;
        large: string;
    };
    body: {
        h2: string;
        h3: string;
        list: string;
    };
    ImageTile: {
        title: string;
    };
    tooltip: {
        base: string;
    };
    media: {
        caption: string;
        pagination: string;
    };
    quote: {
        quoteText: {
            mobile: string;
            tablet: string;
            laptop: string;
        };
        title: string;
        citation: string;
    };
    capsule: {
        base: string;
    };
    relatedStoriesHeadline: {
        base: string;
    };
    premiumBadge: {
        base: string;
    };
    priceList: {
        updated: string;
        action: string;
        price: string;
    };
    controlImage: "bold 15px/1.4 'Indy Serif', 'Indy Serif Fallback', serif";
    productComparison: {
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
    booking: {
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
    specsList: {
        small: string;
        base: string;
    };
    continueReading: import("styled-components").RuleSet<object>;
    productTitle: {
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
    productCarouselCardBestFor: {
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
    productCarouselCardTitle: {
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
    productCarouselCardPrice: {
        font: string;
        lineHeight: string;
    };
    formInput: {
        base: string;
        label: string;
        helpText: string;
        error: string;
        hint: string;
    };
    sellingPage: {
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
    subscriptionPricingCard: {
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
    subscriptionConfirmationPage: {
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
    subscriberOffer: {
        title: string;
        small: string;
        base: string;
        large: string;
        offerLength: string;
        terms: string;
    };
    blockQuote: {
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
    infoBox: {
        text: string;
        headline: string;
        subheadline: string;
        crosshead: {
            font: string;
            textTransform: import("./text-styles.types").TextTransform;
        };
    };
    verdict: {
        h2: string;
        h5: {
            font: string;
            letterSpacing: string;
            textTransform: import("./text-styles.types").TextTransform;
        };
    };
};
export declare const luxury: {
    h2: import("styled-components").RuleSet<object>;
    h3: import("styled-components").RuleSet<object>;
    h4: import("styled-components").RuleSet<object>;
    h5: import("styled-components").RuleSet<object>;
    h6: import("styled-components").RuleSet<object>;
    p: import("styled-components").RuleSet<object>;
    a: import("styled-components").RuleSet<object>;
};
