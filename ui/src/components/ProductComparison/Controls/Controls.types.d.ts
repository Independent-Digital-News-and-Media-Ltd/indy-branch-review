export type Item = {
    title: string;
    image?: string;
    [key: string]: unknown;
};
export type ControlsProps = {
    /**
     * The items to be compared
     */
    selectedItems: Item[];
    /**
     * The maximum number of items that can be selected
     */
    max?: 2 | 3;
    /**
     * The callback to be called when the reset button is clicked
     */
    onReset?: () => unknown;
    /**
     * The callback to be called when the compare button is clicked
     */
    onCompare?: () => unknown;
};
