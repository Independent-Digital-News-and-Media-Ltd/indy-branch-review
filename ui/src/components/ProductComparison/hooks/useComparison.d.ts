import { Item } from '../ProductComparison.types';
type Options = {
    initialCompareItems: Item[];
};
type Return = {
    compareItems: Item[];
    isComparing: boolean;
    addItem: (item: Item) => void;
    removeItem: (id: Item) => void;
    clearItems: () => void;
    showModal: () => void;
    hideModal: () => void;
};
export declare const useComparison: ({ initialCompareItems }: Options) => Return;
export {};
