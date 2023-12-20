/// <reference types="react" />
/// <reference types="" />
import MultiStepCardProps from './MultiStepCard.types';
declare const _default: {
    title: string;
    component: import("styled-components").IStyledComponent<"web", {
        currentStep: string;
        title: string;
        description: string;
        goBackToPreviousStep?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
        children: Children;
        className?: string | undefined;
        isCardActive?: boolean | undefined;
        ref?: import("react").Ref<HTMLDivElement> | undefined;
        key?: import("react").Key | null | undefined;
    }> & import("react").ForwardRefExoticComponent<MultiStepCardProps & import("react").RefAttributes<HTMLDivElement>>;
};
export default _default;
export declare const Default: {
    args: {
        currentStep: string;
        title: string;
        description: string;
        isCardActive: boolean;
        children: string;
    };
};
export declare const Active: {
    args: {
        isCardActive: boolean;
        currentStep: string;
        title: string;
        description: string;
        children: string;
    };
};
export declare const WithBackToPreviousStep: {
    args: {
        currentStep: string;
        goBackToPreviousStep: import("react/jsx-runtime").JSX.Element;
        title: string;
        description: string;
        isCardActive: boolean;
        children: string;
    };
    render: (args: MultiStepCardProps) => import("react/jsx-runtime").JSX.Element;
};
