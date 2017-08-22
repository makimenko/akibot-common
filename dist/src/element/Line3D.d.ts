import { Point3D, Vector3D, Element } from "..";
export declare class Line3D extends Element {
    from: Point3D;
    to: Point3D;
    constructor(from: Point3D, to: Point3D);
    getVector(): Vector3D;
    toString(): string;
}
