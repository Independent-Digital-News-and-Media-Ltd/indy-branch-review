/**
 * @explain
 * This storybook decorator is used to wrap the content of the story in a
 * container. This is useful to limit the width of the content, and to center
 * it.
 */
import { FC } from 'react';
declare const ContentDecorator: (Story: FC) => import("react/jsx-runtime").JSX.Element;
export default ContentDecorator;
