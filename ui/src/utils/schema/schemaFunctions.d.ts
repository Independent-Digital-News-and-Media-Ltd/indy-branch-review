import { CharacterType, PrimitiveType, SchemaFn, SchemaType } from './schema.types';
export declare const isString: SchemaFn;
export declare const isNumber: SchemaFn;
export declare const isBoolean: SchemaFn;
export declare const isNotEmpty: (type?: PrimitiveType) => SchemaType;
/**
 * Value must be a valid email address
 * @param config
 */
export declare const isEmail: SchemaFn;
/**
 * Value must match to value of another field
 * @param config
 */
export declare const doesMatch: (fieldName: string) => SchemaType;
/**
 * Value must have length of any/particular kind of character
 * @param config
 */
export declare const hasMin: (minLen: number, countType?: CharacterType) => SchemaType;
/**
 * Value must not exceed length of any/particular kind of character
 * @param config
 */
export declare const hasMax: (maxLength: number, countType?: CharacterType) => SchemaType;
/**
 * Value must be within a range of length of any/particular kind of character
 * @param config
 */
export declare const hasRange: (minLength: number, maxLength: number, countType?: CharacterType) => SchemaType;
/**
 * Value must not contain any spaces
 * @param config
 */
export declare const containsNoSpaces: () => SchemaType;
/**
 * Value must match a specific regular expression pattern
 * @param regex
 * @param config
 */
export declare const matchesRegex: (regex: RegExp) => SchemaType;
/**
 * Value must pass the provided custom validation
 * @param validator
 * @param config
 */
export declare const hasCustomValidation: (validator: (value: string) => boolean | Promise<boolean>) => SchemaType;
