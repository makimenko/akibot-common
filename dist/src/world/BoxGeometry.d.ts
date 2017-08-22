import { Vector3D, Geometry, Material } from "..";
export declare class BoxGeometry extends Geometry {
    dimension: Vector3D;
    material: Material | undefined;
    constructor(dimension: Vector3D, material?: Material | undefined);
}
