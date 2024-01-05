import { Meta, StoryObj } from '@storybook/react';
import PriceComparisonAsList from './PriceComparisonAsList';
declare const meta: Meta<typeof PriceComparisonAsList>;
export default meta;
type DefaultStory = StoryObj<typeof PriceComparisonAsList>;
export declare const Fallback: DefaultStory;
export declare const Loading: DefaultStory;
export declare const SuccessWithSingleItem: DefaultStory;
export declare const SuccessWithMultipleItems: DefaultStory;
