/// <reference types="react" />
import { GridProps, RowProps, ColumnProps, OffGridProps } from './Grid.types';
/**
 * Use the <OffGrid /> component to create a full-bleed container that spans the
 * full width of the grid. This must only be used within long-form content.
 *
 * This assumes that any offset applied to the parent <Column /> is equal to the
 * effective offset on the right hand side e.g. if the grid is 12 columns wide
 * and the column is offset by 1 then the total span of the column will be 10.
 */
export declare const OffGrid: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<Omit<import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
}, OffGridProps>> & Omit<import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>, keyof import("react").Component<any, {}, any>>;
export declare const Column: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ColumnProps>>;
export declare const Row: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, RowProps>>;
export declare const Grid: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, GridProps>>;
