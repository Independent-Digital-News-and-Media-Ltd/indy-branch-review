import { Meta, StoryObj } from '@storybook/react';
import Table from './Table';
declare const meta: Meta<typeof Table>;
export default meta;
type Story = StoryObj<typeof Table>;
/**
 * The component is for use in the [ProductComparison](/docs/components-product-comparison--docs) component in conjunciton with the [Modal](/docs/components-product-comparison-modal--docs).<br>
 * It is used to display a table of products and their specifications.
 *
 * **Note:** Not intended to be used in isolation.
 */
export declare const Default: Story;
