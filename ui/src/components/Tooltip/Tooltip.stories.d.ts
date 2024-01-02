import { TooltipStatefulProps, TooltipProps, WithRepositioningAndOutsideClosingProps } from './Tooltip.types';
declare const _default: {
    title: string;
    component: (args: TooltipProps) => import("react/jsx-runtime").JSX.Element;
};
export default _default;
export declare const Default: {
    args: {
        children: string;
        id: string;
    };
};
export declare const Visible: {
    args: {
        isOpen: boolean;
        children: string;
        id: string;
    };
};
export declare const Stateful: {
    args: {
        trigger: string;
        children: string;
        id: string;
    };
    argTypes: {
        isOpen: {
            table: {
                disable: boolean;
            };
        };
    };
    render: (args: TooltipStatefulProps) => import("react/jsx-runtime").JSX.Element;
};
export declare const WithRepositioning: {
    args: {
        children: string;
        id: string;
    };
    render: (args: TooltipProps) => import("react/jsx-runtime").JSX.Element;
};
export declare const WithClickOutsideClosing: {
    args: {
        isOpen: boolean;
        children: string;
        id: string;
    };
    render: (args: WithRepositioningAndOutsideClosingProps) => import("react/jsx-runtime").JSX.Element;
};
export declare const WithRepositioningAndClickOutsideClosing: {
    args: {
        isOpen: boolean;
        children: string;
        id: string;
    };
    render: (args: WithRepositioningAndOutsideClosingProps) => import("react/jsx-runtime").JSX.Element;
};
