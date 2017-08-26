import { Message, Distance } from "../..";
export declare class GyroscopeValueResponse extends Message {
    distance: Distance;
    constructor(distance: Distance);
}
