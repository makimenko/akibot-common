"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
class Vector3D extends __1.Dimension3D {
    constructor(x, y, z) {
        super(x, y, z);
    }
    toString() {
        return "Vector3D" + super.toString();
    }
}
exports.Vector3D = Vector3D;
//# sourceMappingURL=Vector3D.js.map