/**
 * @explain
 * This storybook decorator is used to provide a component which require a
 * button or control to return focus to.
 */
import { FC } from 'react';
/**
 * Storybook decorator which adds a button
 */
export declare const FOCUS_SELECTOR = "[name=returnFocus]";
export declare const FocusReturn: (Story: FC) => import("react/jsx-runtime").JSX.Element;
