import { FieldValues, Path, UseFormProps } from 'react-hook-form';
import { InputState } from '../components/Form/Input/Input.types';
import { Schema } from '../utils/schema';
import { ValidationErrors } from '../utils/schema/schema.types';
/**
 * This builds on top of the react-hook-form library
 * to provide a consistent handling of form state
 *
 * Designed to be used with TextInput & PasswordInput
 * and could be extended to support other input types
 *
 */
declare const useIndyForm: <T extends FieldValues>(schema: Schema<T>, options?: Partial<{
    mode: "onBlur" | "onChange" | "onSubmit" | "all" | "onTouched";
    disabled: boolean;
    reValidateMode: "onBlur" | "onChange" | "onSubmit";
    defaultValues: ((payload?: unknown) => Promise<T>) | import("react-hook-form").DefaultValues<T>;
    values: T;
    errors: import("react-hook-form").FieldErrors<T>;
    resetOptions: Partial<{
        keepDirtyValues: boolean;
        keepErrors: boolean;
        keepDirty: boolean;
        keepValues: boolean;
        keepDefaultValues: boolean;
        keepIsSubmitted: boolean;
        keepIsSubmitSuccessful: boolean;
        keepTouched: boolean;
        keepIsValidating: boolean;
        keepIsValid: boolean;
        keepSubmitCount: boolean;
    }> | undefined;
    resolver: import("react-hook-form").Resolver<T, any>;
    context: any;
    shouldFocusError: boolean;
    shouldUnregister: boolean;
    shouldUseNativeValidation: boolean;
    progressive: boolean;
    criteriaMode: import("react-hook-form").CriteriaMode;
    delayError: number;
}>) => {
    registerControlledInput: (id: keyof T) => {
        id: keyof T;
        state: InputState;
        message: string | undefined;
        required: boolean;
        'aria-required': boolean;
        'aria-invalid': boolean;
        'aria-describedby': string;
    };
    methods: {
        setFormError: (message: string) => void;
        setFieldError: (name: Path<T>, message: string) => void;
        getFormError: () => string | undefined;
        getFieldErrors: () => string[];
        getFieldValidationHints: (id: keyof T) => Record<keyof T, {
            [key: string]: {
                passes: boolean;
                hint?: string | undefined;
            };
        }>[keyof T];
        watch: import("react-hook-form").UseFormWatch<T>;
        getValues: import("react-hook-form").UseFormGetValues<T>;
        getFieldState: import("react-hook-form").UseFormGetFieldState<T>;
        setError: import("react-hook-form").UseFormSetError<T>;
        clearErrors: import("react-hook-form").UseFormClearErrors<T>;
        setValue: import("react-hook-form").UseFormSetValue<T>;
        trigger: import("react-hook-form").UseFormTrigger<T>;
        formState: import("react-hook-form").FormState<T>;
        resetField: import("react-hook-form").UseFormResetField<T>;
        reset: import("react-hook-form").UseFormReset<T>;
        handleSubmit: import("react-hook-form").UseFormHandleSubmit<T, undefined>;
        unregister: import("react-hook-form").UseFormUnregister<T>;
        control: import("react-hook-form").Control<T, any>;
        register: import("react-hook-form").UseFormRegister<T>;
        setFocus: import("react-hook-form").UseFormSetFocus<T>;
    };
    formState: {
        errors: ValidationErrors<T>;
        isDirty: boolean;
        isLoading: boolean;
        isSubmitted: boolean;
        isSubmitSuccessful: boolean;
        isSubmitting: boolean;
        isValidating: boolean;
        isValid: boolean;
        disabled: boolean;
        submitCount: number;
        defaultValues?: Readonly<import("react-hook-form").DeepPartial<T>> | undefined;
        dirtyFields: Partial<Readonly<import("react-hook-form").DeepMap<import("react-hook-form").DeepPartial<T>, boolean>>>;
        touchedFields: Partial<Readonly<import("react-hook-form").DeepMap<import("react-hook-form").DeepPartial<T>, boolean>>>;
        validatingFields: Partial<Readonly<import("react-hook-form").DeepMap<import("react-hook-form").DeepPartial<T>, boolean>>>;
    };
};
export default useIndyForm;
