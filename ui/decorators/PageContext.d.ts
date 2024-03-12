/**
 * @explain
 * mocks the PageState context
 * specifically for ProductComparison at the moment, so requires to be extended for other components
 */
import { FC } from 'react';
import { Dispatchers, LivePrice } from '../types/PageContext';
export declare const PageContext: import("react").Context<{
    dispatchers: Dispatchers;
    defaultState: import('../types/PageContext').DefaultState;
    productPrices: LivePrice[];
    productComparison: import('../types/PageContext').ProductComparison;
}>;
export declare const PageContextDecorator: (Story: FC) => import("react/jsx-runtime").JSX.Element;
