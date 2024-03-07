/// <reference types="react" />
import Props from '../Base/SubscriptionPricingCard.types';
import PricingDetailsProps from '../PricingDetails/PricingDetails.types';
export default interface WithDetailsAndRadioButtonProps extends Omit<Props, 'children'>, PricingDetailsProps {
    isSelected?: boolean;
    inputId: string;
    inputValue: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => unknown;
}
