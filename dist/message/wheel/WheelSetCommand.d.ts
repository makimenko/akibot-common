import { Message } from "../..";
export declare enum WHEEL_SET_DIRECTION {
    Stop = 0,
    Left = 1,
    Right = 2,
    Forward = 3,
    Backward = 4,
}
export declare class WheelCommand extends Message {
    direction: WHEEL_SET_DIRECTION;
    pctSpeed: number | undefined;
    durationMs: number | undefined;
    constructor(direction: WHEEL_SET_DIRECTION, pctSpeed?: number | undefined, durationMs?: number | undefined);
}
