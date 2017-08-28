import { Vector3D, WorldElement } from "..";
export declare class NodeTransformation3D extends WorldElement {
    position: Vector3D;
    scale: Vector3D;
    rotation: Vector3D;
    constructor(_position?: Vector3D, _scale?: Vector3D, _rotation?: Vector3D);
    add(nodeTransformation: NodeTransformation3D): void;
    clone(): NodeTransformation3D;
}
