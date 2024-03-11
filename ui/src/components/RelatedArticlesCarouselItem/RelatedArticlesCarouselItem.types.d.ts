/// <reference types="" />
export type RelatedArticlesCarouselItemProps = {
    href: string;
    title: string;
    image: ReactNode;
    /** whether this item is sponsored and will receive a "sponsored" tag */
    isSponsored?: boolean;
};
