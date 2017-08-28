import { Message, Angle, ValueResponse } from "../..";

export class GyroscopeValueResponse extends ValueResponse {

    constructor(public angle: Angle) {
        super();
    }

}