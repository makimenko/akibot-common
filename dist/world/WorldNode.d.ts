import { WorldElement, RobotNode, GridNode } from "..";
export declare class WorldNode extends WorldElement {
    gridNode: GridNode;
    robotNode: RobotNode;
    constructor(gridNode: GridNode, robotNode: RobotNode);
}
