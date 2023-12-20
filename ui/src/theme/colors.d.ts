/**
 * Be careful adding or editing these values as they are tightly coupled with
 * the design system.
 */
declare const social: {
    twitter: {
        base: string;
    };
    facebook: {
        base: string;
        alt: string;
    };
    whatsapp: {
        base: string;
        alt: string;
    };
    vk: {
        base: string;
    };
    telegram: {
        base: string;
    };
    x: {
        base: string;
        alt: string;
    };
};
declare const semiotic: {
    disabled: string;
    muted: string;
    sale: string;
    offer: string;
    /** e.g. liveblog banner, capsules */
    live: string;
    /** informational state, e.g. ready to be interacted on input:focus */
    info: string;
    error: string;
    success: string;
    inactive: string;
};
declare const base: {
    muted: string;
    primary: {
        base: string;
        light: string;
        dark: string;
    };
    /** e.g. buttons, red links */
    actionBrand: {
        /** e.g. links, button bg */
        base: string;
        /** e.g. hovered buttons/links */
        alt: string;
        /** e.g. disabled button bg */
        disabled: string;
        /** e.g. opened dropdown menus */
        selected: string;
    };
    actionWhite: {
        base: string;
        alt: string;
    };
    /** e.g. black links that become primary on hover */
    actionBlack: {
        /** e.g. icon button color*/
        base: string;
        /** e.g. icon button colour when hover, active, focus */
        alt: string;
    };
    actionSubtle: {
        base: string;
        alt: string;
    };
    actionBold: {
        base: string;
        alt: string;
    };
    actionInvert: {
        base: string;
        alt: string;
    };
    actionTransparent: {
        base: string;
        alt: string;
    };
    /** canvases i.e. backgrounds on which content is placed  */
    canvas: {
        /** standard page bg */
        base: string;
        /** when a piece of page is lifted e.g. tooltip, modal */
        secondary: string;
        /** standard page bg tinted with the colour of the brand */
        brand: string;
        /** card bg */
        card: string;
    };
    ink: {
        /** normal body text */
        base: string;
        /** lighter body text */
        light: string;
        /** subdued text e.g. caption, aside text, placeholder */
        muted: string;
        /** e.g. text/icons on buttons */
        inverted: string;
    };
    divider: {
        /** border that matches the base text colour */
        black: string;
        /**
         * dark border color e.g. around the liveblog posts, inside the article
         * page for a more prominent divider
         */
        dark: string;
        /**
         * light border color e.g. a divider around the nav, footer, and inside the
         * article page for a less prominent line
         */
        light: string;
        /** divider colour used to emphasise membership of a brand */
        brand: string;
    };
    table: {
        /** border color around the table heading */
        border: string;
    };
    /** background to overlay */
    veil: string;
    /** adds shadow to buttons */
    shadow: {
        base: string;
    };
    /** Light on dark */
    dark: {
        canvas: {
            /** page background */
            base: string;
            card: string;
        };
        ink: {
            /** text colour */
            base: string;
        };
    };
};
declare const premium: {
    muted: string;
    primary: {
        base: string;
        light: string;
        dark: string;
    };
    actionBrand: {
        base: string;
        alt: string;
        disabled: string;
        selected: string;
    };
    actionWhite: {
        alt: string;
    };
    actionBlack: {
        alt: string;
    };
    canvas: {
        brand: string;
        card: string;
    };
    divider: {
        brand: string;
    };
    dark: {
        canvas: {
            card: string;
        };
    };
};
declare const climate: {
    muted: string;
    primary: {
        base: string;
        light: string;
        dark: string;
    };
    actionBrand: {
        base: string;
        alt: string;
    };
    actionWhite: {
        alt: string;
    };
    actionBlack: {
        alt: string;
    };
    canvas: {
        brand: string;
    };
};
declare const sgi: {
    muted: string;
    primary: {
        base: string;
        light: string;
        dark: string;
    };
    actionBrand: {
        base: string;
        alt: string;
    };
    actionWhite: {
        alt: string;
    };
    actionBlack: {
        alt: string;
    };
    canvas: {
        brand: string;
    };
};
export { semiotic, social, base, premium, climate, sgi };
