/**
 * Converts a hex color to rgba
 * @param hex The hex value to convert to rgba
 * @param alpha The alpha value to use
 * @param asFunction Whether or not to return the rgba as a function
 * @returns The rgba value in the form '{r} {g} {b} {alpha}' or
 * 'rgba({r}, {g}, {b}, {alpha})
 */
export declare function hex2rgba(hex: string, alpha?: number, asFunction?: boolean): string;
export declare function getLuma(value: string): number | null;
