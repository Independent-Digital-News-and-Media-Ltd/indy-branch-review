/// <reference types="react" />
import { AuthorHighlightProps } from './AuthorHighlight.types';
declare const _default: {
    title: string;
    component: import("react").FC<AuthorHighlightProps>;
    argTypes: {
        biography: {
            description: string;
        };
        authors: {
            description: string;
            control: {
                disable: boolean;
            };
        };
        image: {
            description: string;
            control: {
                disable: boolean;
            };
        };
    };
};
export default _default;
export declare const Default: {
    args: AuthorHighlightProps;
    render: (args: AuthorHighlightProps) => import("react/jsx-runtime").JSX.Element;
};
export declare const DefaultWithoutImage: {
    args: AuthorHighlightProps;
    render: (args: AuthorHighlightProps) => import("react/jsx-runtime").JSX.Element;
};
export declare const DefaultWithoutImageOrBio: {
    args: AuthorHighlightProps;
    render: (args: AuthorHighlightProps) => import("react/jsx-runtime").JSX.Element;
};
export declare const DefaultWithMultipleAuthors: {
    args: AuthorHighlightProps;
    render: (args: AuthorHighlightProps) => import("react/jsx-runtime").JSX.Element;
};
export declare const Travel: {
    args: {
        authors: import("./AuthorHighlight.types").Author[];
        className?: string | undefined;
        biography?: string | undefined;
        image?: import("react").ReactNode;
    };
    render: (args: AuthorHighlightProps) => import("react/jsx-runtime").JSX.Element;
};
export declare const TravelWithoutImage: {
    args: AuthorHighlightProps;
    render: (args: AuthorHighlightProps) => import("react/jsx-runtime").JSX.Element;
};
export declare const TravelWithoutImageOrBio: {
    args: AuthorHighlightProps;
    render: (args: AuthorHighlightProps) => import("react/jsx-runtime").JSX.Element;
};
export declare const TravelWithMultipleAuthors: {
    args: AuthorHighlightProps;
    render: (args: AuthorHighlightProps) => import("react/jsx-runtime").JSX.Element;
};
export declare const TravelPrimary: {
    args: AuthorHighlightProps;
    render: (args: AuthorHighlightProps) => import("react/jsx-runtime").JSX.Element;
};
export declare const TravelPrimaryWithoutBio: {
    args: AuthorHighlightProps;
    render: (args: AuthorHighlightProps) => import("react/jsx-runtime").JSX.Element;
};
export declare const TravelPrimaryWithMultipleAuthors: {
    args: AuthorHighlightProps;
    render: (args: AuthorHighlightProps) => import("react/jsx-runtime").JSX.Element;
};
