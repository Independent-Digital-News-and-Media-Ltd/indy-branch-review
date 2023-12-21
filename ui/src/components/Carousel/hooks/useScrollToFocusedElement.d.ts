export default useScrollToFocusedElement;
/**
 * A custom hook which scrolls the focused element into view inside a given
 * container.
 *
 * @param {Object} options
 * @param {React.RefObject} options.root - the ref of the root element
 * @param {string} options.behavior - the scroll behavior
 * @param {string} options.block - the scroll block
 * @param {string} options.inline - the scroll inline
 * @todo there is sometimes a jump in the page when the buttons are clicked. Not
 * sure if this is the cause.
 */
declare function useScrollToFocusedElement({ root, behavior, block, inline, }: {
    root: import("react").RefObject<any>;
    behavior: string;
    block: string;
    inline: string;
}): void;
