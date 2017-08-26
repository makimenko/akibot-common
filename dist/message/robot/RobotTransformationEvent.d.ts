import { Message, NodeTransformation3D } from "../..";
export declare class RobotTransformationEvent extends Message {
    transformation: NodeTransformation3D;
    constructor(transformation: NodeTransformation3D);
}
