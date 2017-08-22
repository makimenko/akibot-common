import { Vector3D, WorldElement } from "..";
export declare class GridConfiguration extends WorldElement {
    cellCountX: number;
    cellCountY: number;
    cellSizeMm: number;
    maxObstacleCount: number;
    offsetVector: Vector3D;
    unknownValue: number;
    emptyValue: number;
    constructor(cellCountX: number, cellCountY: number, cellSizeMm: number, maxObstacleCount: number, offsetVector: Vector3D);
}
