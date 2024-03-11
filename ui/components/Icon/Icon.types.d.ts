import { SvgrProps } from '../../types/svgr.d';
export type IconSizes = 'x-small' | 'small' | 'base' | 'large';
export type IconProps = {
    svg: SvgrProps;
    size?: IconSizes;
};
