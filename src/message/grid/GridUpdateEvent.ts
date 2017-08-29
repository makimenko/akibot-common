import { Message, NodeTransformation3D } from "../..";

export class GridUpdateEvent extends Message {

    constructor(public data: number[][]) {
        super();
    }

}

