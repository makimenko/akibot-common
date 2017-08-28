import { WorldElement, NodeTransformation3D } from "..";

export class DeviceNode extends WorldElement {

    constructor(public transformation?: NodeTransformation3D) {
        super();
    }

}
