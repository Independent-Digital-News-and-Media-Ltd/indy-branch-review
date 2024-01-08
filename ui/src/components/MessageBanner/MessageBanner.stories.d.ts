/// <reference types="react" />
import { Props as BaseProps } from './Base/MessageBannerBase.types';
import SuccessBannerProps from './Success/MessageBannerSuccess.types';
import { Props as WithTickAndMessageProps } from './SuccessWithTickAndMessage/MessageBannerSuccessWithTickAndMessage.types';
declare const _default: {
    title: string;
    component: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<BaseProps, never>> & Omit<(<T extends BaseProps>(args: T) => import("react/jsx-runtime").JSX.Element), keyof import("react").Component<any, {}, any>>;
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
export declare const Success: {
    args: {
        children: string;
    };
    render: <T extends SuccessBannerProps>(args: T) => import("react/jsx-runtime").JSX.Element;
};
export declare const SuccessWithTickAndMessage: {
    args: {
        children: string;
    };
    render: <T extends WithTickAndMessageProps>(args: T) => import("react/jsx-runtime").JSX.Element;
};
