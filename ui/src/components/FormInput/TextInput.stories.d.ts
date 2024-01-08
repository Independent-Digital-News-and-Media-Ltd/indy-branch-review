/// <reference types="react" />
declare const _default: {
    title: string;
    component: import("react").FC<import("./TextInput.types").TextInputProps>;
    argTypes: {
        id: {
            description: string;
            control: {
                type: string;
            };
        };
        label: {
            description: string;
            control: {
                type: string;
            };
        };
        helpText: {
            description: string;
            control: {
                type: string;
            };
        };
        required: {
            description: string;
            control: {
                type: string;
            };
        };
        state: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
        };
        type: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
        };
        message: {
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
        id: string;
        label: string;
        helpText: string;
        required: boolean;
        type: string;
        state: string;
        message: string;
    };
};
