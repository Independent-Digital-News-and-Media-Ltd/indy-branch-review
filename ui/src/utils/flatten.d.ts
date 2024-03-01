export type TFlattenInputObject = {
    [key: string]: number | boolean | string | TFlattenInputObject | (number | boolean | string)[];
};
declare const flatten: (obj: TFlattenInputObject, arrayModifier?: (path: string, value: (number | boolean | string)[]) => {
    [key: string]: string;
}) => {
    [key: string]: string | number | boolean;
};
export default flatten;
