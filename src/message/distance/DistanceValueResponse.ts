import { Message, Angle, Distance } from "../..";

export class DistanceValueResponse extends Message {

    constructor(public distance: Distance) {
        super();
    }

}