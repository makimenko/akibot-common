import { Message } from "../..";

export class GyroscopeCalibrationRequest extends Message {

    constructor(public maxTimeMs: number, public intervalMs: number) {
        super();
    }

}