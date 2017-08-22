import { WorldElement, GridConfiguration, RobotNode } from "..";
export declare class WorldNode extends WorldElement {
    gridConfiguration: GridConfiguration;
    robotNode: RobotNode;
    constructor(gridConfiguration: GridConfiguration, robotNode: RobotNode);
}
