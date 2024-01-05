/// <reference types="react" />
import { WrapperProps } from './IconButton.types';
export declare const Wrapper: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, WrapperProps>>;
export declare const CosyWrapper: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, keyof WrapperProps> & WrapperProps, never>> & Omit<import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, WrapperProps>>, keyof import("react").Component<any, {}, any>>;
export default Wrapper;
