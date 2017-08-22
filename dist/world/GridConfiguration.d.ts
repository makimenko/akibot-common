import { Vector3D, WorldElement } from "..";
export declare class GridConfiguration extends WorldElement {
    cellCountX: number | undefined;
    cellCountY: number | undefined;
    cellSizeMm: number | undefined;
    maxObstacleCount: number | undefined;
    offsetVector: Vector3D | undefined;
    unknownValue: number;
    emptyValue: number;
    constructor(cellCountX?: number | undefined, cellCountY?: number | undefined, cellSizeMm?: number | undefined, maxObstacleCount?: number | undefined, offsetVector?: Vector3D | undefined);
}
