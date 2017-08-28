import { Message, Angle, Distance, ValueResponse } from "../..";

export class DistanceValueResponse extends ValueResponse {

    constructor(public distance: Distance) {
        super();
    }

}