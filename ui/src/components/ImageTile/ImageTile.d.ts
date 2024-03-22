export default ImageTile;
/**
 * A simple image tile for displaying an image with a title
 */
declare function ImageTile({ image, title, url }: {
    image: any;
    title: any;
    url: any;
}): import("react/jsx-runtime").JSX.Element;
declare namespace ImageTile {
    export { propTypes };
}
import propTypes from './ImageTile.types';
