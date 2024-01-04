/// <reference types="" />
import React from 'react';
import { EventCallback } from './Tooltip.hooks';
export interface TooltipProps {
    /** Dynamic React elements acting as the Tooltip's content */
    children: Children;
    /** String as the Tooltip's accessible link between button and content */
    id: string;
    /** String as the Tooltip button's title on hover */
    buttonTitle?: string;
    /** Function to display the desired icon */
    icon?: SvgIcon;
    /** Boolean to determine whether the Tooltip is currently visible */
    isOpen?: boolean;
    /** Function to be called when the Tooltip is interacted with */
    onInteract?: React.MouseEventHandler<HTMLDivElement>;
    /** Custom classname for the Tooltip */
    className?: string;
    /** Function to be called when the Tooltip is interacted with */
    onFocus?: React.FocusEventHandler<HTMLButtonElement>;
    /** Object containing props for the Tooltip's button */
    buttonProps?: object;
}
export interface TooltipStatefulProps extends TooltipProps {
    defaultOpen?: boolean;
}
export interface WithRepositioningAndOutsideClosingProps extends TooltipProps {
    onOutsideClick: EventCallback;
}
export type TooltipRefElement = HTMLDivElement;
