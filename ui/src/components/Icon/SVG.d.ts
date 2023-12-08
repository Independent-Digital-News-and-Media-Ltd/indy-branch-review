export function Inline({ children, className, viewBox, size, ...rest }: {
    [x: string]: any;
    children: any;
    className: any;
    viewBox: any;
    size?: string | undefined;
}): import("react/jsx-runtime").JSX.Element;
export namespace Inline {
    export { inlinePropTypes as propTypes };
}
export function Use({ className, id, size }: {
    className: any;
    id: any;
    size?: string | undefined;
}): import("react/jsx-runtime").JSX.Element;
export namespace Use {
    export { usePropTypes as propTypes };
}
export function SVG({ isInline, children, ...rest }: {
    [x: string]: any;
    isInline?: boolean | undefined;
    children: any;
}): import("react/jsx-runtime").JSX.Element;
export namespace SVG {
    export { svgPropTypes as propTypes };
}
export function Symbol({ children, id, viewBox }: {
    children: any;
    id: any;
    viewBox: any;
}): import("react/jsx-runtime").JSX.Element;
export namespace Symbol {
    export { symbolPropTypes as propTypes };
}
import { inlinePropTypes } from './Icon.types';
import { usePropTypes } from './Icon.types';
import { svgPropTypes } from './Icon.types';
import { symbolPropTypes } from './Icon.types';
