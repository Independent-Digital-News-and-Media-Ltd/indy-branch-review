/// <reference types="react" />
declare const _default: {
    title: string;
    component: import("react").FC<{
        onSubmit: import("react-hook-form").SubmitHandler<{
            fullName: string;
            email: string;
            password: string;
            birthYear: string;
        }>;
    }>;
};
export default _default;
export declare const Default: {
    args: {
        onSubmit: (data: unknown) => void;
    };
};
