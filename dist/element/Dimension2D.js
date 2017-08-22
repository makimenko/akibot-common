"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
class Dimension2D extends __1.Element {
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
    }
    add(dimension2d) {
        if (dimension2d != null) {
            this.x += dimension2d.x;
            this.y += dimension2d.y;
        }
    }
    toString() {
        return "(" + this.x + "," + this.y + ")";
    }
}
exports.Dimension2D = Dimension2D;
//# sourceMappingURL=Dimension2D.js.map