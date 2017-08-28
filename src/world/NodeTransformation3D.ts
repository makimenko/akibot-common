import { Vector3D, WorldElement } from "..";

export class NodeTransformation3D extends WorldElement {

    public position: Vector3D;
    public scale: Vector3D;
    public rotation: Vector3D;

    constructor(_position?: Vector3D, _scale?: Vector3D, _rotation?: Vector3D) {
        super();
        this.position = (_position != undefined ? _position : new Vector3D(0, 0, 0) );
        this.rotation = _rotation;
        this.scale = _scale;
    }

    public add(nodeTransformation: NodeTransformation3D) {

    }


}
