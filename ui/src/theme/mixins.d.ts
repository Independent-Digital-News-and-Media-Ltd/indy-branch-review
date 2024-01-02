import { RuleSet } from 'styled-components';
/**
 * CSS to fully hide elements of the page
 */
declare const hidden: RuleSet<object>;
/**
 * CSS to visually hide semantically necessary elements of the page
 */
declare const visuallyHidden: RuleSet<object>;
/**
 * Returns CSS required to hide an element on the page
 * @param {string} [feature] Feature to match against to hide elements
 * @returns {string} CSS containing declarations wrapped in a media query
 */
declare function hiddenOn(feature: string): RuleSet<object> | null;
/**
 * Returns CSS required to visually hide an element on the page
 * @param {string} [feature] Feature to match against to hide elements
 * @returns {string} CSS containing declarations wrapped in a media query
 */
declare function visuallyHiddenOn(feature: string): RuleSet<object> | null;
declare const anchorLink: RuleSet<object>;
declare const typography: {
    tag: {
        small: RuleSet<object>;
        medium: RuleSet<object>;
        large: RuleSet<object>;
    };
    recommendedLinks: RuleSet<object>;
};
export { hidden, visuallyHidden, hiddenOn, visuallyHiddenOn, anchorLink, typography, };
