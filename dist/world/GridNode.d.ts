import { WorldElement, GridConfiguration } from "..";
export declare class GridNode extends WorldElement {
    gridConfiguration: GridConfiguration;
    data: number[][];
    constructor(gridConfiguration: GridConfiguration);
}
