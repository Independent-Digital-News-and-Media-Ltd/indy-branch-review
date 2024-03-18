import { HTMLProps } from 'react';
import { WrapperProps, LabelProps } from './Checkbox.types';
export declare const HiddenInput: import("react").FC<HTMLProps<HTMLInputElement>>;
export declare const Label: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, LabelProps>>;
export declare const TickIcon: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("../../../Icon/Icon.types").IconProps, never>> & Omit<import("react").FC<import("../../../Icon/Icon.types").IconProps>, keyof import("react").Component<any, {}, any>>;
export declare const CheckableBox: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;
export declare const Wrapper: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, WrapperProps>>;
