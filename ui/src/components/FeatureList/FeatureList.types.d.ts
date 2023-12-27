/// <reference types="" />
export interface Feature {
    icon?: SvgIcon;
    feature: string;
}
export default interface FeatureListProps {
    features: Feature[];
    className?: string;
}
