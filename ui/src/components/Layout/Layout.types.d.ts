import { ReactNode, ReactElement } from 'react';
export type NullableReactElement = ReactElement | null | undefined;
export interface LayoutProps {
    children: ReactNode;
}
export interface OneColumnLayoutProps {
    main: ReactNode;
}
export interface TwoColumnLayoutProps extends OneColumnLayoutProps {
    aside?: NullableReactElement;
    asideVisibleAtWidth?: string;
}
export interface TwoColumnStackedLayoutProps {
    topLeft: ReactNode;
    topRight: NullableReactElement;
    middle: ReactNode;
    bottomLeft: ReactNode;
    bottomRight: NullableReactElement;
    topAsideVisibleAtWidth?: string;
    bottomAsideVisibleAtWidth?: string;
}
