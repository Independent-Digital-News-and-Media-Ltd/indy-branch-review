import { SvgrProps } from '../../types/svgr.d';
export interface Feature {
    icon?: SvgrProps;
    feature: string;
}
export default interface FeatureListProps {
    features: Feature[];
    className?: string;
}
