export type DefaultState = {
    bookmarkModalOpen: boolean;
    drawerLoginOpen: boolean;
    drawerMenuOpen: boolean;
    galleryIndex: number;
    galleryOpen: boolean;
    returnFocus: string;
};
export type ProductComparison = {
    selectedItems: string[];
    showModal: boolean;
};
export type LivePrice = {
    id: string;
    loading: boolean;
    price: string;
    link: string;
    fetched: boolean;
    error: boolean;
};
export type PageState = {
    defaultState: DefaultState;
    productPrices: LivePrice[];
    productComparison: ProductComparison;
};
export type Dispatchers = {
    clearProductSelection: () => void;
    hideProductModal: () => void;
    showProductModal: () => void;
    toggleSelectedProduct: (id: string) => void;
    closeBookmarkModal: () => void;
    toggleBookmarkModal: () => void;
    closeDrawerLogin: () => void;
    closeDrawerMenu: () => void;
    toggleDrawerMenuOpen: () => void;
    toggleDrawerLoginOpen: () => void;
    toggleGalleryOpen: (returnFocus: string, galleryIndex: number) => void;
    setProductPrice: (id: string, price: string, link: string) => void;
    productPriceFetchError: (id: string) => void;
    setProductPriceIsLoading: (id: string) => void;
};
export type ContextState = PageState & {
    dispatchers: Dispatchers;
};
