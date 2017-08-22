"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
class Point3D extends __1.Dimension3D {
    constructor(x, y, z) {
        super(x, y, z);
    }
    toString() {
        return "Point3D" + super.toString();
    }
}
exports.Point3D = Point3D;
//# sourceMappingURL=Point3D.js.map