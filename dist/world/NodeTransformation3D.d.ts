import { Vector3D, WorldElement } from "..";
export declare class NodeTransformation3D extends WorldElement {
    position: Vector3D | undefined;
    scale: Vector3D | undefined;
    rotation: Vector3D | undefined;
    constructor(position?: Vector3D | undefined, scale?: Vector3D | undefined, rotation?: Vector3D | undefined);
}
