/// <reference types="react" />
import MultiStepCardProps from './MultiStepCard.types';
declare const _default: {
    title: string;
    component: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<Omit<MultiStepCardProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
    }, never>> & Omit<import("react").ForwardRefExoticComponent<MultiStepCardProps & import("react").RefAttributes<HTMLDivElement>>, keyof import("react").Component<any, {}, any>>;
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
