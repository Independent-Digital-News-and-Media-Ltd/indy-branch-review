/// <reference types="" />
import { Ref } from 'react';
export interface MediaPlusCaptionProps {
    caption: string;
    children: Children;
    className?: string;
}
export interface MediaPlusCaptionForSliderProps extends MediaPlusCaptionProps {
    ref: Ref<HTMLDivElement>;
}
