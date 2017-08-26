import { Message, NodeTransformation3D } from "../..";

export class RobotTransformationEvent extends Message {

    constructor(public transformation: NodeTransformation3D) {
        super();
    }

}

