import { Dimension2D } from "..";
export declare class Dimension3D extends Dimension2D {
    z: number;
    constructor(x: number, y: number, z: number);
    add(dimension3d: Dimension3D): void;
    subtract(dimension3d: Dimension3D): void;
    toString(): string;
    equals(dimension3d: Dimension3D, tolerance: number): boolean;
}
