import { Props as BaseProps } from './Base/SuccessBannerBase.types';
import { Props as WithTickAndMessageProps } from './WithTickAndMessage/SuccessBannerWithTickAndMessage.types';
declare const _default: {
    title: string;
    component: import("styled-components").IStyledComponent<"web", {
        messageTimeout?: number | undefined;
        className?: string | undefined;
    }> & (<T extends BaseProps>(args: T) => import("react/jsx-runtime").JSX.Element);
    argTypes: {
        messageTimeout: {
            description: string;
            control: {
                type: string;
            };
        };
        children: {
            description: string;
            options: string[];
            mapping: {
                Text: string;
                'Single Element': import("react/jsx-runtime").JSX.Element;
                'Multiple Elements': import("react/jsx-runtime").JSX.Element[];
            };
        };
        className: {
            description: string;
            control: {
                type: string;
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
export declare const WithSuccessMessageAndTick: {
    args: {
        children: string;
    };
    render: <T extends WithTickAndMessageProps>(args: T) => import("react/jsx-runtime").JSX.Element;
};
