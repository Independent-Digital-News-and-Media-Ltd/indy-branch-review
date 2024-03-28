import { CheckboxProps } from '../Checkbox/Checkbox.types';
export interface CheckboxWithDropdownProps extends CheckboxProps {
    dropdownHeader: string;
    dropdownContent: string;
}