import { Message, Angle } from "..";
export declare class OrientationRequest extends Message {
    targetAngle: Angle | undefined;
    tolerance: Angle | undefined;
    timeout: number | undefined;
    constructor(targetAngle?: Angle | undefined, tolerance?: Angle | undefined, timeout?: number | undefined);
}
