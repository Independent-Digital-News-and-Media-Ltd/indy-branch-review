/**
 * This is here to sidestep the fact that Jest does not like the `import.meta`
 * syntax. This file has been omitted from the coverage report as a result.
 * @todo find a way of supporting `import.meta...` in Jest
 * @see {@link https://github.com/vitejs/vite/issues/1149}
 */

const svgs = import.meta.glob('#icons/**/*.svg', { eager: true });

export default svgs;
