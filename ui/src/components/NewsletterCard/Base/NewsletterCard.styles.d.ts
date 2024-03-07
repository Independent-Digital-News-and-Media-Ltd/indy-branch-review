/// <reference types="react" />
import { NewsletterCardImageProps } from './NewsletterCard.types';
export declare const Wrapper: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;
export declare const Label: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, {
    htmlFor: string;
}>>;
export declare const Image: ({ className, ...rest }: NewsletterCardImageProps) => import("react/jsx-runtime").JSX.Element;
export declare const ImageMobile: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<NewsletterCardImageProps, never>> & Omit<({ className, ...rest }: NewsletterCardImageProps) => import("react/jsx-runtime").JSX.Element, keyof import("react").Component<any, {}, any>>;
export declare const ImageTablet: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<NewsletterCardImageProps, never>> & Omit<({ className, ...rest }: NewsletterCardImageProps) => import("react/jsx-runtime").JSX.Element, keyof import("react").Component<any, {}, any>>;
export declare const ContentWithoutImage: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;
export declare const Frequency: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never>>;
export declare const Title: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("styled-components/dist/types").FastOmit<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "ref"> & {
    ref?: ((instance: HTMLHeadingElement | null) => void) | import("react").RefObject<HTMLHeadingElement> | null | undefined;
}>, never>, never>>;
export declare const Description: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("styled-components/dist/types").FastOmit<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref"> & {
    ref?: ((instance: HTMLParagraphElement | null) => void) | import("react").RefObject<HTMLParagraphElement> | null | undefined;
}>, never>, never>>;
export declare const DescriptionMobile: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("styled-components/dist/types").FastOmit<import("styled-components/dist/types").FastOmit<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref"> & {
    ref?: ((instance: HTMLParagraphElement | null) => void) | import("react").RefObject<HTMLParagraphElement> | null | undefined;
}>, never>, never>, never>> & Omit<import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("styled-components/dist/types").FastOmit<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref"> & {
    ref?: ((instance: HTMLParagraphElement | null) => void) | import("react").RefObject<HTMLParagraphElement> | null | undefined;
}>, never>, never>>, keyof import("react").Component<any, {}, any>>;
export declare const DescriptionTablet: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("styled-components/dist/types").FastOmit<import("styled-components/dist/types").FastOmit<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref"> & {
    ref?: ((instance: HTMLParagraphElement | null) => void) | import("react").RefObject<HTMLParagraphElement> | null | undefined;
}>, never>, never>, never>> & Omit<import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("styled-components/dist/types").FastOmit<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref"> & {
    ref?: ((instance: HTMLParagraphElement | null) => void) | import("react").RefObject<HTMLParagraphElement> | null | undefined;
}>, never>, never>>, keyof import("react").Component<any, {}, any>>;
type CheckboxProps = {
    id: string;
    value: string;
};
export declare const Checkbox: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("styled-components/dist/types").FastOmit<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, Omit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & {
    ref?: ((instance: HTMLInputElement | null) => void) | import("react").RefObject<HTMLInputElement> | null | undefined;
}>, never>, CheckboxProps>>;
export declare const CheckboxToggleWrapper: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;
export declare const CheckboxToggle: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("styled-components/dist/types").FastOmit<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & {
    ref?: ((instance: HTMLSpanElement | null) => void) | import("react").RefObject<HTMLSpanElement> | null | undefined;
}>, never>, never>>;
export declare const AddCircleIcon: () => import("react/jsx-runtime").JSX.Element;
export declare const AddCircleIconSolidBg: () => import("react/jsx-runtime").JSX.Element;
export declare const TickIcon: () => import("react/jsx-runtime").JSX.Element;
export {};
