import { Vector3D, WorldElement, GridConfiguration } from "..";

export class GridNode extends WorldElement {

    public data: number[][];

    constructor(public gridConfiguration: GridConfiguration) {
        super();
    }

}
