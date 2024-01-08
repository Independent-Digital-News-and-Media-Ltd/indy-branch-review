import { HTMLProps, ReactElement } from 'react';
import { ValidationRule } from 'react-hook-form';
export declare enum InputState {
    DEFAULT = "default",
    ERROR = "error",
    SUCCESS = "success"
}
export interface ValidationFields {
    pattern?: ValidationRule<RegExp>;
    required?: boolean;
    maxLength?: number;
    minLength?: number;
}
export type HTMLInputProps = Omit<HTMLProps<HTMLInputElement>, 'pattern'>;
export type ExtendedInputProps = HTMLInputProps & ValidationFields;
export interface TextInputProps extends ExtendedInputProps {
    id: string;
    label: string;
    helpText?: string;
    control?: ReactElement;
    controlAction?: VoidFunction;
    pattern?: ValidationRule<RegExp>;
    message?: string;
    state?: InputState;
}
export type PasswordInputProps = Omit<TextInputProps, 'type' | 'control' | 'controlAction'>;
