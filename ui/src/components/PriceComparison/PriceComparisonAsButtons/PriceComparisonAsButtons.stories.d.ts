import { Meta, StoryObj } from '@storybook/react';
import PriceComparisonAsButtons from './PriceComparisonAsButtons';
declare const meta: Meta<typeof PriceComparisonAsButtons>;
export default meta;
type DefaultStory = StoryObj<typeof PriceComparisonAsButtons>;
export declare const Fallback: DefaultStory;
export declare const Loading: DefaultStory;
export declare const SuccessWithSingleItem: DefaultStory;
export declare const SuccessWithMultipleItems: DefaultStory;
