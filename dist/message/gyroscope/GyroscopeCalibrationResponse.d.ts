import { Message, Vector3D } from "../..";
export declare class GyroscopeCalibrationResponse extends Message {
    offsetVector: Vector3D;
    constructor(offsetVector: Vector3D);
}
