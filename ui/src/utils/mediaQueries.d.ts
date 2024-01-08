declare function minHeight(val: number): string;
declare function minWidth(val: number): string;
declare function maxWidth(val: number): string;
/**
 *
 * @param {object} breakPoints Key/value pairs of named breakpoints and widths
 * @returns Media query rules based on the breakpoint e.g.
 *   {
 *     deviceName: '(min-width: 100px)',
 *     maxDeviceName: '(max-width: 99px)',
 *     onlyDeviceName: '(min-width: 100px) and (max-width: 199px)',
 *     ...
 *   }
 */
declare function generateMediaQueryRules(devices: {
    [str: string]: number;
}): {
    [key: string]: string;
};
export { minHeight, minWidth, maxWidth, generateMediaQueryRules };
