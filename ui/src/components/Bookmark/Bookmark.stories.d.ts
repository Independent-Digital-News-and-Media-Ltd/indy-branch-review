/// <reference types="react" />
declare const _default: {
    title: string;
};
export default _default;
export declare const Default: {
    render: import("react").FC<import("./Bookmark.types").BookmarkButtonProps>;
    args: {};
};
export declare const Bookmarked: {
    render: import("react").FC<import("./Bookmark.types").BookmarkButtonProps>;
    args: {};
};
export declare const Modal: {
    render: import("react").FC<import("./Bookmark.types").BookmarkModalProps>;
    args: {
        isModalOpen: boolean;
        children: string;
    };
};
export declare const Alert: {
    render: import("react").FC<import("./Bookmark.types").BookmarkAlertProps>;
    args: {
        children: string;
    };
};
