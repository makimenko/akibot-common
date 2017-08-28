import { WorldElement, NodeTransformation3D, DeviceNode } from "..";
export declare class RobotNode extends WorldElement {
    modelFileName: string;
    transformation: NodeTransformation3D;
    devices: DeviceNode[];
    constructor(modelFileName: string, transformation: NodeTransformation3D);
}
