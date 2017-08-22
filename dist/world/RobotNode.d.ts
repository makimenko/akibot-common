import { WorldElement, NodeTransformation3D } from "..";
export declare class RobotNode extends WorldElement {
    modelFileName: string;
    transformation: NodeTransformation3D;
    constructor(modelFileName: string, transformation: NodeTransformation3D);
}
