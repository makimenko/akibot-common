"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
class Line3D extends __1.Element {
    constructor(from, to) {
        super();
        this.from = from;
        this.to = to;
    }
    getVector() {
        var x = this.to.x - this.from.x;
        var y = this.to.y - this.from.y;
        var z = this.to.z - this.from.z;
        return new __1.Vector3D(x, y, z);
    }
    toString() {
        return "Line(" + this.from + ", " + this.to + ")";
    }
}
exports.Line3D = Line3D;
//# sourceMappingURL=Line3D.js.map