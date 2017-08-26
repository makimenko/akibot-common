import { Angle, Element } from "..";
export declare class Distance extends Element {
    distanceMm: number;
    errorAngle: Angle;
    endObstacle: boolean;
    constructor(distanceMm: number, errorAngle: Angle, endObstacle: boolean);
}
