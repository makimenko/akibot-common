"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
class NodeTransformation3D extends __1.WorldElement {
    constructor() {
        super(...arguments);
        this.position = new __1.Vector3D(0, 0, 0);
        this.scale = new __1.Vector3D(1, 1, 1);
        this.rotation = new __1.Vector3D(0, 0, 0);
    }
}
exports.NodeTransformation3D = NodeTransformation3D;
//# sourceMappingURL=NodeTransformation3D.js.map