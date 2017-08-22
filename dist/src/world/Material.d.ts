import { WorldElement } from "./WorldElement";
export declare enum ThreeMaterialConstants {
    THREE_NO_SHADING = 0,
    THREE_FLAT_SHADING = 1,
    THREE_SMOOTH_SHADING = 2,
}
export declare class Material extends WorldElement {
    color: string;
    shading: number;
    opacity: number;
    transparent: boolean;
    wireframe: boolean;
}
