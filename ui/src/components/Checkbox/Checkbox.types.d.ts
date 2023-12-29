/// <reference types="" />
import React from 'react';
import { CHECKBOX_SIZE_BASE, CHECKBOX_SIZE_LARGE, CHECKBOX_SIZE_SMALL } from './Checkbox.constants';
export type CheckboxSizes = typeof CHECKBOX_SIZE_BASE | typeof CHECKBOX_SIZE_LARGE | typeof CHECKBOX_SIZE_SMALL;
export interface Props {
    checked: boolean;
    children: Children;
    disabled: boolean;
    id: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    size?: CheckboxSizes;
}
export interface WrapperProps {
    $size: CheckboxSizes;
    className: string;
}
export type HiddenInputProps = {
    checked: boolean;
    disabled: boolean;
    id: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    type: string;
};
export interface LabelProps {
    $size: CheckboxSizes;
    $disabled: boolean;
}
