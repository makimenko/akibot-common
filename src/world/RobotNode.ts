import { WorldElement, NodeTransformation3D } from "..";

export class RobotNode extends WorldElement {

    constructor(public modelFileName: string, public transformation?: NodeTransformation3D) {
        super();
    }

}