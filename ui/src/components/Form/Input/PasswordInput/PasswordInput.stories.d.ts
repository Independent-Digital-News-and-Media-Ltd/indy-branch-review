/// <reference types="react" />
declare const _default: {
    title: string;
    component: import("react").FC<import("./PasswordInput.types").PasswordInputProps>;
    argTypes: {
        controlled: {
            table: {
                disable: boolean;
            };
        };
    };
};
export default _default;
export declare const Default: {
    args: {
        id: string;
        label: string;
        helpText: string;
        required: undefined;
        state: string;
        message: string;
        controlled: boolean;
    };
};
export declare const Disabled: {
    args: {
        disabled: boolean;
        id: string;
        label: string;
        helpText: string;
        required: undefined;
        state: string;
        message: string;
        controlled: boolean;
    };
};
