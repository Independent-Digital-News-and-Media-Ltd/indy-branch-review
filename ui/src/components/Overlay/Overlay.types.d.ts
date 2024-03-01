import React from 'react';
export interface OverlayProps {
    children: React.ReactNode;
    isHidden?: boolean;
    returnFocus: string;
    onBackgroundClick?: (event: unknown) => unknown;
    Wrapper: React.ElementType;
    className?: string;
    role?: string;
}
export interface BackgroundProps {
    readonly $isHidden: boolean;
}
