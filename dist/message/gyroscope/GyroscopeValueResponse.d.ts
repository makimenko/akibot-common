import { Message, Angle } from "../..";
export declare class GyroscopeValueResponse extends Message {
    angle: Angle;
    constructor(angle: Angle);
}
