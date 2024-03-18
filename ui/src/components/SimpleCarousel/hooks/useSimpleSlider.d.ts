import { MutableRefObject } from 'react';
interface UseSimpleSliderProps {
    initialIndex?: number;
}
interface UseSimpleSliderReturnValue {
    sliderRef: MutableRefObject<HTMLUListElement | null>;
    currentIndex: number;
    handlePrev: () => void;
    handleNext: () => void;
}
declare const useSimpleSlider: ({ initialIndex, }?: UseSimpleSliderProps) => UseSimpleSliderReturnValue;
export default useSimpleSlider;
