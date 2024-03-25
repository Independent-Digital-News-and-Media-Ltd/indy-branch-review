import { ThemeType } from '../types/styled.d';
/**
 * Takes a map of theme names and their overrides and outputs a similar map with
 * complete themes. NB. `themes` should contain a 'base' property or define as it is
 * from this that all sibling themes extend
 */
declare function buildThemes(themes: {
    [key: string]: object;
}, baseThemeName?: string): {
    [key: string]: ThemeType;
};
export default buildThemes;
