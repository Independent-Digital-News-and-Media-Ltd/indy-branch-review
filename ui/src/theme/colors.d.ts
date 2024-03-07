/**
 * Be careful adding or editing these values as they are tightly coupled with
 * the design system.
 */
import { SocialColors, SocialType } from './colors.types';
declare const social: Record<SocialType, SocialColors>;
declare const semiotic: {
    /** to indicate success or activation e.g. newsletter card when selected */
    success: string;
    /** indicates an error or failure e.g. input after failed validation */
    error: string;
    /** indicates that an interactive element is currently not interactive */
    disabled: string;
    /** indicates that an element has no state e.g. tick icon when resting */
    inactive: string;
    /** indicates that an element is ready to be interacted with e.g. on input:focus */
    info: string;
    /** indicates that the subject represents a live event */
    live: string;
    offer: string;
};
declare const base: {
    primary: {
        base: string;
        light: string;
        muted: string;
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
    actionSubtleLight: {
        base: string;
        alt: string;
    };
    actionSubtleDark: {
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
        /** light border color e.g. a divider around the nav, footer, and inside the article page for a less prominent line */
        light: string;
        /** dark border color e.g. around the liveblog posts, inside the article page for a more prominent divider */
        dark: string;
        /** border that matches the base text colour */
        black: string;
        /** divider colour used to emphasise membership of a brand */
        brand: string;
    };
    table: {
        /** border color around the table heading */
        border: string;
    };
    /** background to overlay */
    veil: {
        base: string;
    };
    videoStandby: {
        base: string;
    };
    shadow: {
        dark: string;
        light: string;
    };
    /** Light on dark */
    dark: {
        canvas: {
            /** page background */
            base: string;
            secondary: string;
            card: string;
        };
        ink: {
            /** text colour */
            base: string;
        };
    };
};
declare const premium: {
    primary: {
        base: string;
        light: string;
        muted: string;
        dark: string;
    };
    actionBrand: {
        base: string;
        alt: string;
        disabled: string;
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
    primary: {
        base: string;
        light: string;
        muted: string;
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
    primary: {
        base: string;
        light: string;
        muted: string;
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
declare const luxury: {
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
export { semiotic, social, base, premium, climate, sgi, luxury };
