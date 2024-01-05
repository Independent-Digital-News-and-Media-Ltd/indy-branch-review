export interface ImageProps {
    layout?: 'fixed' | 'responsive' | 'fill';
    height?: undefined;
    width?: undefined;
    [key: string]: unknown;
}
export interface LayoutStylesProps {
    $layout: string;
    $width?: number;
    $height?: number;
}
export interface StyledImageProps extends LayoutStylesProps {
    src: string;
    $layout: string;
}
