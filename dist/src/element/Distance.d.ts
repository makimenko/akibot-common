import { Angle, Element } from "..";
export declare class Distance extends Element {
    private distanceMm;
    private errorAngle;
    private endObstacle;
    constructor(distanceMm: number);
    getDistanceMm(): number;
    setDistanceMm(distanceMm: number): void;
    getErrorAngle(): Angle;
    setErrorAngle(errorAngle: Angle): void;
    isEndObstacle(): boolean;
    setEndObstacle(endObstacle: boolean): void;
}
