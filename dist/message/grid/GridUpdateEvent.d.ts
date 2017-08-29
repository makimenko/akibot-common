import { Message } from "../..";
export declare class GridUpdateEvent extends Message {
    data: number[][];
    constructor(data: number[][]);
}
