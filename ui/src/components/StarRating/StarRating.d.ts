export default StarRating;
declare function StarRating({ className, size, value, total }: {
    className: any;
    size?: string | undefined;
    value?: number | undefined;
    total?: number | undefined;
}): import("react/jsx-runtime").JSX.Element | null;
declare namespace StarRating {
    export { propTypes };
}
import propTypes from './StarRating.types';
