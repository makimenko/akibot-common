import { Message, Vector3D } from "../..";

export class GyroscopeCalibrationResponse extends Message {

    constructor(public offsetVector: Vector3D) {
        super();
    }

}