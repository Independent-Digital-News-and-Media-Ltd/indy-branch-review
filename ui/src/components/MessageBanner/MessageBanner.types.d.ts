/// <reference types="" />
import { SvgrProps } from '../../types/svgr.d';
import { IconProps } from '../Icon/Icon.types';
import { VARIANT_DEFAULT, VARIANT_ERROR, VARIANT_SUCCESS } from './MessageBanner.constants';
export type Variant = typeof VARIANT_DEFAULT | typeof VARIANT_SUCCESS | typeof VARIANT_ERROR;
export interface Props {
    messageTimeout?: number;
    className?: string;
    children: Children;
    variant?: Variant;
}
export interface StyledIconProps extends Omit<IconProps, 'svg'> {
    $variant: Variant;
    svg?: SvgrProps;
}
