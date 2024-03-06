/// <reference types="" />
declare namespace _default {
    export let title: string;
    export { Icon as component };
    export namespace argTypes {
        namespace size {
            let control: string;
            let options: string[];
        }
    }
}
export default _default;
export namespace Default {
    export { defaultArgs as args };
    export namespace parameters {
        namespace docs {
            namespace source {
                let code: string;
            }
        }
    }
}
export namespace WithIcon {
    export { defaultArgs as args };
    export namespace parameters_1 {
        export namespace docs_1 {
            export namespace source_1 {
                let code_1: string;
                export { code_1 as code };
            }
            export { source_1 as source };
        }
        export { docs_1 as docs };
    }
    export { parameters_1 as parameters };
    export function render({ svg, size }: {
        svg: any;
        size: any;
    }): import("react/jsx-runtime").JSX.Element;
}
import Icon from './Icon';
declare namespace defaultArgs {
    export { SunCreamSVG as svg };
}
import SunCreamSVG from '../../assets/icons/sun-cream-outline-24.svg';
