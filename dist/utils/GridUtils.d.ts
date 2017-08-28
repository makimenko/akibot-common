import { DeviceNode, GridNode, Distance, RobotNode, Vector3D, Angle, Line2D, Point2D, GridConfiguration } from "..";
export declare module GridUtils {
    function createGridData(cells: number, val: number): number[][];
    function getPointWithOffset(point: Point2D, gridConfiguration: GridConfiguration): Point2D;
    function getAddressX(point: Point2D, gridConfiguration: GridConfiguration): number;
    function getAddressY(point: Point2D, gridConfiguration: GridConfiguration): number;
    function rasterize(line: Line2D, endIsObstacle: boolean, gridConfiguration: GridConfiguration): number[][];
    function calculateNorthLine(positionOffset: Vector3D, northAngle: Angle, distanceCm: number): Line2D;
    function updateGridDistance(gridNode: GridNode, robotNode: RobotNode, distanceNode: DeviceNode, distance: Distance): void;
    function printArray(arr: number[][]): void;
}
