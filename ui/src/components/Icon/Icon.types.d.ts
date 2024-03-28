import { SvgrProps } from '../../types/svgr.d';
export type IconSizes = 'x-small' | 'small' | 'base' | 'large';
export interface IconProps {
    svg: SvgrProps;
    size?: IconSizes;
}
