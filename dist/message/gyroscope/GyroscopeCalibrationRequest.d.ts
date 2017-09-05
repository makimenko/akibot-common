import { Message } from "../..";
export declare class GyroscopeCalibrationRequest extends Message {
    maxTimeMs: number;
    intervalMs: number;
    constructor(maxTimeMs: number, intervalMs: number);
}
