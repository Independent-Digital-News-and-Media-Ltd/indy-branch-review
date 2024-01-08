declare const useInputControl: (action: VoidFunction) => {
    onMouseDown: (evt: MouseEvent) => void;
    onKeyDown: (evt: KeyboardEvent) => void;
};
export default useInputControl;
