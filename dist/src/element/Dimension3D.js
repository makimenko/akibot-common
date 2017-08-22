"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
class Dimension3D extends __1.Dimension2D {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
    add(dimension3d) {
        if (dimension3d != null) {
            this.x += dimension3d.x;
            this.y += dimension3d.y;
            this.z += dimension3d.z;
        }
    }
    subtract(dimension3d) {
        if (dimension3d != null) {
            this.x -= dimension3d.x;
            this.y -= dimension3d.y;
            this.z -= dimension3d.z;
        }
    }
    toString() {
        return "(" + this.x + "," + this.y + "," + this.x + ")";
    }
    equals(dimension3d, tolerance) {
        return dimension3d != null
            && Math.abs(dimension3d.x - this.x) < tolerance
            && Math.abs(dimension3d.y - this.y) < tolerance
            && Math.abs(dimension3d.z - this.z) < tolerance;
    }
}
exports.Dimension3D = Dimension3D;
//# sourceMappingURL=Dimension3D.js.map