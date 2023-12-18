/**
 * Takes a map of theme names and their overrides and outputs a similar map with
 * complete themes.
 * NB. themes should contain a `default` property as it is from this that all
 * sibling themes extend
 * @param {object} themes Map of themes
 * @param {string} [baseTheme=default] The key in which the base theme
 * @returns {object} Map of complete theme objects
 */
declare function buildThemes(themes: {
    [key: string]: object;
}, baseTheme?: string): {
    [x: string]: object;
};
export default buildThemes;
