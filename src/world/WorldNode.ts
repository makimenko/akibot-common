import { WorldElement,  GridConfiguration, RobotNode } from "..";

export class WorldNode extends WorldElement {

    constructor(public gridConfiguration: GridConfiguration, public robotNode: RobotNode) {
        super();
    }


}