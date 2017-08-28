import { Vector3D, WorldElement, GridConfiguration, Line2D, Angle, Distance } from "..";
export declare class GridNode extends WorldElement {
    gridConfiguration: GridConfiguration;
    data: number[][];
    constructor(gridConfiguration: GridConfiguration);
    initGridDataIfNeeded(): void;
    add(addressX: number, addressY: number): void;
    remove(addressX: number, addressY: number): void;
    addLine(line: Line2D, endIsObstacle: boolean): void;
    iterateEndOfLine(line: Line2D, line2: Line2D, endIsObstacle: boolean): void;
    addLineWithAngle(line: Line2D, errorAngle: Angle, endIsObstacle: boolean): void;
    addDistance(positionOffset: Vector3D, northAngle: Angle, distance: Distance): void;
}
