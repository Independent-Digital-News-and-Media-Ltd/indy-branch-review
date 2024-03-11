import { SvgrProps } from '../../types/svgr.d';
type Sublist = {
    svg?: SvgrProps;
    value: string;
};
export type Items = {
    label: string;
    value: string;
    sublist?: Sublist[];
};
export interface SpecsListProps {
    items: Items[];
}
export {};
