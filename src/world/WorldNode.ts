import { WorldElement, GridConfiguration, RobotNode, GridNode } from "..";

export class WorldNode extends WorldElement {

    constructor(public gridNode: GridNode, public robotNode: RobotNode) {
        super();
    }


}