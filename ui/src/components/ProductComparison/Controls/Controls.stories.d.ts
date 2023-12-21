import { Meta, StoryObj } from '@storybook/react';
import Controls from './Controls';
declare const meta: Meta<typeof Controls>;
export default meta;
type Story = StoryObj<typeof Controls>;
/**
 * The component is for use in the [ProductComparison](/docs/components-product-comparison--docs) component.
 *
 * It does not control the state of the selected items, but rather
 * receives the selected items and the max number of items as props.
 *
 * **Note:** Not intended to be used in isolation.
 */
export declare const Default: Story;
