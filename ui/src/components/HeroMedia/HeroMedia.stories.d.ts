declare namespace _default {
    export let title: string;
    export { HeroMedia as component };
    export namespace argTypes {
        namespace media {
            let description: string;
            let caption: string;
            namespace control {
                let disable: boolean;
            }
        }
    }
}
export default _default;
export namespace Default {
    export { defaultArgs as args };
}
import HeroMedia from './HeroMedia';
declare namespace defaultArgs {
    let media_1: import("react/jsx-runtime").JSX.Element;
    export { media_1 as media };
    let caption_1: string;
    export { caption_1 as caption };
}
