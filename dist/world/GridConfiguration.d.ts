import { Vector3D, WorldElement } from "..";
export declare class GridConfiguration extends WorldElement {
    cellCount: number;
    cellSizeMm: number;
    maxObstacleCount: number;
    offsetVector: Vector3D;
    unknownValue: number;
    emptyValue: number;
    constructor(cellCount: number, cellSizeMm: number, maxObstacleCount: number, offsetVector: Vector3D);
}
