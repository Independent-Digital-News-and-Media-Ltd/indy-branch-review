/// <reference types="react" />
declare const _default: {
    title: string;
    component: import("react").FC<import("./TextInput.types").TextInputProps>;
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
        type: string;
        state: string;
        message: string;
        controlled: boolean;
        pattern: {
            value: string;
            message: string;
        };
    };
};
export declare const Disabled: {
    args: {
        disabled: boolean;
        id: string;
        label: string;
        helpText: string;
        required: undefined;
        type: string;
        state: string;
        message: string;
        controlled: boolean;
        pattern: {
            value: string;
            message: string;
        };
    };
};
