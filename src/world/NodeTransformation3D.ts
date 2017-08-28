import { Vector3D, WorldElement } from "..";

export class NodeTransformation3D extends WorldElement {

    public position: Vector3D;
    public scale: Vector3D;
    public rotation: Vector3D;

    constructor(_position?: Vector3D, _scale?: Vector3D, _rotation?: Vector3D) {
        super();
        this.position = (_position != undefined ? _position : new Vector3D(0, 0, 0));
        this.rotation = (_rotation != undefined ? _rotation : new Vector3D(0, 0, 0));;
        this.scale = (_scale != undefined ? _scale : new Vector3D(1, 1, 1));
    }

    public add(nodeTransformation: NodeTransformation3D) {
        this.position.add(nodeTransformation.position);
        this.rotation.add(nodeTransformation.rotation);
        this.scale.add(nodeTransformation.scale);
    }

    public clone(): NodeTransformation3D {
        return new NodeTransformation3D(this.position.clone(), this.scale.clone(), this.rotation.clone());
    }

}
