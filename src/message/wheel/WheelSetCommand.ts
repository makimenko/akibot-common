import { Message } from "../..";

export enum WHEEL_SET_DIRECTION {
    Stop,
    Left,
    Right,
    Forward,
    Backward
};

export class WheelCommand extends Message {

    constructor(public direction: WHEEL_SET_DIRECTION, public pctSpeed?: number, public durationMs?: number) {
        super();
    }

}