/// <reference types="" />
import { VARIANTS, APPEARANCES } from './Logo.constants';
export interface LogoProps {
    className?: string;
    variant?: (typeof VARIANTS)[number];
}
export interface WrapperProps {
    className?: string;
    children?: Children;
    $appearance: (typeof APPEARANCES)[number];
}
