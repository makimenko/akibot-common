import { WorldElement, NodeTransformation3D, DeviceNode } from "..";

export class RobotNode extends WorldElement {

    public devices: DeviceNode[] = [];

    constructor(public modelFileName: string, public transformation: NodeTransformation3D) {
        super();
    }


}