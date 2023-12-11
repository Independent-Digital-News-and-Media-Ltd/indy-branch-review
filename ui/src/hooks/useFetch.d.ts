export declare const enum Step {
    INITIAL = "initial",
    LOADING = "loading",
    SUCCESS = "success",
    ERROR = "error"
}
type State = {
    step: Step;
    data: unknown;
    error?: string;
};
type Options = {
    url: string;
    initialData: unknown;
    triggerFetch?: boolean;
    responseTransformer?: (data: unknown) => unknown;
};
interface Return extends State {
    fetchData: () => Promise<unknown>;
}
export declare const useFetch: ({ url, initialData, triggerFetch, responseTransformer, }: Options) => Return;
export {};
