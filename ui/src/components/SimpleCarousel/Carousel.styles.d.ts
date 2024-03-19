/// <reference types="react" />
import { IconButtonProps } from '../IconButton';
type ButtonProps = Omit<IconButtonProps, 'svg' | 'isCosy' | 'size'>;
export declare const Wrapper: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>, never>>;
export declare const Header: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>, never>>;
export declare const ScreenReaderOnlyHeader: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("styled-components/dist/types").FastOmit<import("styled-components/dist/types").Substitute<Omit<import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never>, "ref"> & {
    ref?: ((instance: HTMLSpanElement | null) => void) | import("react").RefObject<HTMLSpanElement> | null | undefined;
}, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> & {
    ref?: ((instance: HTMLElement | null) => void) | import("react").RefObject<HTMLElement> | null | undefined;
}>, never>, never>>;
export declare const Title: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, never>>;
export declare const ScreenReaderOnlyDescription: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("styled-components/dist/types").FastOmit<import("styled-components/dist/types").Substitute<Omit<import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never>, "ref"> & {
    ref?: ((instance: HTMLSpanElement | null) => void) | import("react").RefObject<HTMLSpanElement> | null | undefined;
}, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref"> & {
    ref?: ((instance: HTMLParagraphElement | null) => void) | import("react").RefObject<HTMLParagraphElement> | null | undefined;
}>, never>, never>>;
export declare const List: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, never>>;
export declare const ListItem: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, never>>;
export declare const Nav: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>, never>>;
export declare const NavText: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never>>;
export declare const PrevButton: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("styled-components/dist/types").FastOmit<import("styled-components/dist/types").Substitute<IconButtonProps, IconButtonProps>, never>, ButtonProps>> & Omit<import("react").FC<IconButtonProps>, keyof import("react").Component<any, {}, any>>;
export declare const NextButton: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("styled-components/dist/types").FastOmit<import("styled-components/dist/types").Substitute<IconButtonProps, IconButtonProps>, never>, ButtonProps>> & Omit<import("react").FC<IconButtonProps>, keyof import("react").Component<any, {}, any>>;
export {};
