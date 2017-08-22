"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
class Point2D extends __1.Dimension2D {
    constructor(x, y) {
        super(x, y);
    }
    toString() {
        return "Point2D" + super.toString();
    }
}
exports.Point2D = Point2D;
//# sourceMappingURL=Point2D.js.map