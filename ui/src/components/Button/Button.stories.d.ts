/// <reference types="react" />
declare const _default: {
    title: string;
    component: import("react").ForwardRefExoticComponent<(Omit<import("./Button.types").ButtonType, "ref"> | Omit<import("./Button.types").LinkType, "ref">) & import("react").RefAttributes<HTMLButtonElement>>;
    argTypes: {
        props: {
            table: {
                disable: boolean;
            };
        };
        children: {
            description: string;
            defaultValue: string;
            type: {
                name: string;
                required: boolean;
            };
            control: {
                type: string;
            };
        };
        variant: {
            description: string;
            control: string;
            options: string[];
        };
        as: {
            description: string;
            control: string;
            options: string[];
        };
        size: {
            description: string;
            control: string;
            options: string[];
        };
        disabled: {
            description: string;
            control: string;
        };
        isExternal: {
            if: {
                arg: string;
                neq: string;
            };
            description: string;
            control: string;
        };
        href: {
            if: {
                arg: string;
                neq: string;
            };
            description: string;
            control: string;
        };
        type: {
            if: {
                arg: string;
                eq: string;
            };
            description: string;
            control: string;
            options: string[];
        };
    };
};
export default _default;
export declare const Primary: {
    args: {
        children: string;
        variant: string;
    };
};
export declare const Secondary: {
    args: {
        children: string;
        variant: string;
    };
};
export declare const Tertiary: {
    args: {
        children: string;
        variant: string;
    };
};
export declare const PrimaryUncapitalised: {
    args: {
        children: string;
        variant: string;
    };
};
