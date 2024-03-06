import { FieldError } from 'react-hook-form';
export type CharacterType = 'letters' | 'digits';
type UnknownValue = unknown;
export type UnknownValues = Record<string, UnknownValue>;
export type ValidationError = FieldError & {
    messageBuilder: (fieldName: string) => string;
};
export type ValidationErrors<T> = Record<keyof T | 'root', ValidationError[]>;
type ValidationFn = (value: UnknownValue, values: UnknownValues) => ValidationError | null;
export type SchemaType = {
    validate: ValidationFn;
};
export type UnknownFn = (...args: unknown[]) => SchemaType;
export type SchemaFn = () => SchemaType;
export type ValidatorFn = SchemaFn | UnknownFn;
export type Validator = [ValidatorFn, UnknownValue[]];
export type ValidationErrorConfig = {
    type: string;
    condition: boolean;
    message: string;
    messageBuilder: (fieldName: string) => string;
};
export {};
