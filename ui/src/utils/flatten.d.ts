/**
 * Copied, pasted, and renamed from Flow-web (json2DotNotation)
 * @todo find a way of sharing utils between packages:
 * 1. export utils as part of the UI lib; or
 * 2. export utils from flow-web; or
 * 3. create a new package for utils
 */
export type TFlattenInputObject = {
    [key: string]: number | boolean | string | TFlattenInputObject;
};
declare const flatten: (obj: TFlattenInputObject, arrayModifier?: (path: string, value: string[]) => {
    [key: string]: string;
}) => {
    [key: string]: string | number | boolean;
};
export default flatten;
