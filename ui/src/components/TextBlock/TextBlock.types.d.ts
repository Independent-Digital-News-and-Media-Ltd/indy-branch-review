/// <reference types="" />
export interface TextBlockProps {
    children: ReactNode;
    className?: string;
}
export interface CollapsibleProps extends TextBlockProps {
    id?: string;
    lines?: number;
    prompt?: string;
}
