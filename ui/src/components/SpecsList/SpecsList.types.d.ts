/// <reference types="" />
type Sublist = {
    svg?: SvgIcon;
    value: string;
};
type items = {
    label: string;
    value: string;
    sublist?: Sublist[];
};
export interface SpecsListProps {
    image?: ReactNode;
    items: items[];
}
export {};
