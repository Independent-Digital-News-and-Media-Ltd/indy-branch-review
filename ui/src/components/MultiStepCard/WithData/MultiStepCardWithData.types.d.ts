export default interface MultiStepCardWithDataProps {
    totalSteps?: number;
    currentStep?: string;
    myStep?: number;
    isCardActive?: boolean;
    handleCurrentStepUpdate?: (targetStep: number) => unknown;
}
