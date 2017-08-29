import { Vector3D, WorldElement, GridConfiguration, Line2D, Point2D, Angle, VectorUtils, AngleUtils, Distance } from "..";

export class GridNode extends WorldElement {

    public data: number[][];

    constructor(public gridConfiguration: GridConfiguration) {
        super();
    }



}
