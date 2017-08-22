import { Vector3D, WorldElement } from "..";

export class NodeTransformation3D extends WorldElement {

    constructor(public position?: Vector3D, public scale?: Vector3D, public rotation?: Vector3D) {
        super();
    }

}
