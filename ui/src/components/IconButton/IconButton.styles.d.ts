/// <reference types="react" />
import { WrapperProps } from './IconButton.types';
export declare const Wrapper: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, WrapperProps>>;
export declare const CosyWrapper: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<Omit<import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "$size"> & WrapperProps, "ref"> & {
    ref?: ((instance: HTMLButtonElement | null) => void) | import("react").RefObject<HTMLButtonElement> | null | undefined;
}, never>> & Omit<import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, WrapperProps>>, keyof import("react").Component<any, {}, any>>;
export default Wrapper;
