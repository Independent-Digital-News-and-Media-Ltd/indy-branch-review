export type FontFamily = 'sans' | 'serif';
export type FontWeight = 400 | 700;
export type FontSize = 'medium' | 'small';
export type FontByWeight = Record<FontWeight, string>;
export type FontBySize = Record<FontSize, FontByWeight>;
export type FontByFamily = Record<FontFamily, FontBySize>;
export type Font = FontByFamily;
export type FontProperties = {
    family: FontFamily;
    size: FontSize;
    weight: FontWeight;
};
