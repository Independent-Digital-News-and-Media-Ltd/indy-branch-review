/// <reference types="" />
import React from 'react';
import { BUTTON_AS_ANCHOR, BUTTON_AS_BUTTON, BUTTON_SIZE_BASE, BUTTON_SIZE_LARGE, BUTTON_SIZE_SMALL, BUTTON_VARIANT_PRIMARY, BUTTON_VARIANT_SECONDARY, BUTTON_VARIANT_TERTIARY, BUTTON_VARIANT_PRIMARY_UNCAP } from './Button.constants';
export type ButtonAs = typeof BUTTON_AS_BUTTON | typeof BUTTON_AS_ANCHOR;
export type ButtonVariants = typeof BUTTON_VARIANT_PRIMARY | typeof BUTTON_VARIANT_SECONDARY | typeof BUTTON_VARIANT_TERTIARY | typeof BUTTON_VARIANT_PRIMARY_UNCAP;
export type ButtonSizes = typeof BUTTON_SIZE_SMALL | typeof BUTTON_SIZE_BASE | typeof BUTTON_SIZE_LARGE;
interface CommonButton {
    name?: string;
    value?: string;
    type?: 'button' | 'submit' | 'reset';
}
interface CommonLink {
    href: string;
    target?: string;
    rel?: string;
    isExternal?: boolean;
}
interface CommonType {
    children: Children;
    as?: ButtonAs;
    forwardedAs?: ButtonAs;
    id?: string;
    className?: string;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    role?: string;
    title?: string;
    tabIndex?: number;
    icon?: ReactNode;
}
interface StyleTypes {
    size?: ButtonSizes;
    variant?: ButtonVariants;
}
export interface ButtonStyleProps {
    $variant?: ButtonVariants;
    $size?: ButtonSizes;
}
export interface ButtonType extends CommonType, StyleTypes, CommonButton {
    as?: 'button';
    [key: string]: unknown;
    href?: never;
    target?: never;
    rel?: never;
    isExternal?: never;
}
export interface LinkType extends CommonType, StyleTypes, CommonLink {
    as?: 'a';
    [key: string]: unknown;
    name?: never;
    value?: never;
    type?: never;
}
export type Props = ButtonType | LinkType;
export {};
