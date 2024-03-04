import { CharacterType, SchemaFn, SchemaType } from './schema.types';
export declare const isNotEmpty: SchemaFn;
export declare const isString: SchemaFn;
export declare const isNumber: SchemaFn;
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
