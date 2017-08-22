import { Message } from "..";
export declare class GyroscopeAutoIntervalCommand extends Message {
    interval: number | undefined;
    constructor(interval?: number | undefined);
}
