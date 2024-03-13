/// <reference types="" />
import { ReactElement } from 'react';
export default interface MultiStepCardProps {
    currentStep: string;
    title: string;
    description: string;
    goBackToPreviousStep?: ReactElement;
    children: Children;
    className?: string;
    isCardActive?: boolean;
}
