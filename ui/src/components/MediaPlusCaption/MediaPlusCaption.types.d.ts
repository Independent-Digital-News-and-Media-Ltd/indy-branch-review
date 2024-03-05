/// <reference types="" />
import { Ref } from 'react';
export interface MediaPlusCaptionProps {
    media: ReactNode;
    caption: string;
    className?: string;
}
export interface MediaPlusCaptionForSliderProps extends MediaPlusCaptionProps {
    ref: Ref<HTMLDivElement>;
}
