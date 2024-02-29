import { ALIGN_NONE, ALIGN_CENTRE, ALIGN_LEFT, ALIGN_RIGHT } from './BlockQuote.constants';
export type AlignType = typeof ALIGN_NONE | typeof ALIGN_CENTRE | typeof ALIGN_LEFT | typeof ALIGN_RIGHT;
export interface BlockQuoteProps {
    cite: string;
    markup: string;
    svgColor?: string;
    align?: AlignType;
}
