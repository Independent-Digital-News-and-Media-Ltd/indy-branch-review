import { Meta, StoryObj } from '@storybook/react';
import { MediaPlusFlushCaption, MediaPlusPaddedCaption, MediaPlusCaptionForSlider } from './MediaPlusCaption';
declare const MediaPlusCaption: () => null;
declare const meta: Meta<typeof MediaPlusCaption>;
export default meta;
export declare const Flush: StoryObj<typeof MediaPlusFlushCaption>;
export declare const Padded: StoryObj<typeof MediaPlusPaddedCaption>;
/**
 * This variant is for use wherever a ref needs attaching to the caption e.g. in
 * a slider where the height of the caption needs to be controlled
 */
export declare const ForSlider: StoryObj<typeof MediaPlusCaptionForSlider>;
