import { FunctionalComponent, SVGAttributes } from 'vue';

declare global {
    type SVGComponent = FunctionalComponent<SVGAttributes>;
}

export {};