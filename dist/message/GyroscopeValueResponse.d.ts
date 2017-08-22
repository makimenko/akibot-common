import { Message, Angle } from "..";
export declare class GyroscopeValueResponse extends Message {
    angle: Angle | undefined;
    constructor(angle?: Angle | undefined);
}
