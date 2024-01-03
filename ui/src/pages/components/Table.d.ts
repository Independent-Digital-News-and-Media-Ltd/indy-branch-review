export function Table({ children, className, colCount, colWidth }: {
    children: any;
    className: any;
    colCount?: number | undefined;
    colWidth?: number | undefined;
}): import("react/jsx-runtime").JSX.Element;
export namespace Table {
    namespace propTypes {
        let children: any;
        let className: any;
        let colCount: any;
        let colWidth: any;
    }
}
export const Group: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>, never>>;
export const GroupHeader: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>, never>>;
export const GroupTitle: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, never>>;
export const GroupTable: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<{
    children: any;
    className: any;
    colCount?: number | undefined;
    colWidth?: number | undefined;
}, never>> & Omit<{
    ({ children, className, colCount, colWidth }: {
        children: any;
        className: any;
        colCount?: number | undefined;
        colWidth?: number | undefined;
    }): import("react/jsx-runtime").JSX.Element;
    propTypes: {
        children: any;
        className: any;
        colCount: any;
        colWidth: any;
    };
}, keyof import("react").Component<any, {}, any>>;
export const Headings: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("styled-components/dist/types").FastOmit<{
    children: any;
    className: any;
    colCount?: number | undefined;
    colWidth?: number | undefined;
}, never>, never>> & Omit<import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<{
    children: any;
    className: any;
    colCount?: number | undefined;
    colWidth?: number | undefined;
}, never>> & Omit<{
    ({ children, className, colCount, colWidth }: {
        children: any;
        className: any;
        colCount?: number | undefined;
        colWidth?: number | undefined;
    }): import("react/jsx-runtime").JSX.Element;
    propTypes: {
        children: any;
        className: any;
        colCount: any;
        colWidth: any;
    };
}, keyof import("react").Component<any, {}, any>>, keyof import("react").Component<any, {}, any>>;
export const Cell: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, never>>;
export const CellContents: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;
export const RowHeading: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("styled-components/dist/types").FastOmit<import("styled-components/dist/types").Substitute<Omit<import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, never>, "ref"> & {
    ref?: ((instance: HTMLTableDataCellElement | null) => void) | import("react").RefObject<HTMLTableDataCellElement> | null | undefined;
}, Omit<import("react").DetailedHTMLProps<import("react").ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, "ref"> & {
    ref?: ((instance: HTMLTableHeaderCellElement | null) => void) | import("react").RefObject<HTMLTableHeaderCellElement> | null | undefined;
}>, never>, never>>;
export const Description: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>, never>>;
