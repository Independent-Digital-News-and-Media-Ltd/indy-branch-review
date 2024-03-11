/**
 * Takes a map of theme names and their overrides and outputs a similar map with
 * complete themes.
 * NB. themes should contain a `default` property as it is from this that all
 * sibling themes extend
 */
declare function buildThemes(themes: {
    [key: string]: object;
}, baseThemeName?: string): {
    [x: string]: {
        name: string;
    };
};
export default buildThemes;
