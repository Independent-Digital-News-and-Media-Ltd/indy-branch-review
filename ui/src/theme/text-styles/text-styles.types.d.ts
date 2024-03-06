import { TagSizes, TagVariants } from '../../components/Tag/Tag.types';
export type StyleDeclarations = Record<string, string>;
export type TagStyles = Record<TagVariants, StyleDeclarations>;
export type TagStyleBySize = Record<TagSizes, TagStyles>;
export type TextTransform = 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'initial' | 'inherit';
