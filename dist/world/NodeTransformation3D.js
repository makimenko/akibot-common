"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
class NodeTransformation3D extends __1.WorldElement {
    constructor(_position, _scale, _rotation) {
        super();
        this.position = (_position != undefined ? _position : new __1.Vector3D(0, 0, 0));
        this.rotation = (_rotation != undefined ? _rotation : new __1.Vector3D(0, 0, 0));
        ;
        this.scale = (_scale != undefined ? _scale : new __1.Vector3D(1, 1, 1));
    }
    add(nodeTransformation) {
        this.position.add(nodeTransformation.position);
        this.rotation.add(nodeTransformation.rotation);
        this.scale.add(nodeTransformation.scale);
    }
    clone() {
        return new NodeTransformation3D(this.position.clone(), this.scale.clone(), this.rotation.clone());
    }
}
exports.NodeTransformation3D = NodeTransformation3D;
//# sourceMappingURL=NodeTransformation3D.js.map