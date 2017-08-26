import { Message } from "../..";
export declare enum WHEEL_DIRECTION {
    Stop = 0,
    Left = 1,
    Right = 2,
    Forward = 3,
    Backward = 4,
}
export declare class WheelCommand extends Message {
    direction: WHEEL_DIRECTION | undefined;
    constructor(direction?: WHEEL_DIRECTION | undefined);
}
