import { Angle } from "..";
export declare module AngleUtils {
    function radiansToDegrees(radians: number): number;
    function degreesToRadians(degrees: number): number;
    function normalizeRadian(radians: number): number;
    function createNegativeAngle(angle: Angle): Angle;
    function createAngleFromDegrees(degrees: number): Angle;
    function addDegrees(a: number, b: number): number;
    function leftDistanceDegrees(from: number, to: number): number;
    function rightDistanceDegrees(from: number, to: number): number;
    function modularDistanceDegrees(from: number, to: number): number;
}
