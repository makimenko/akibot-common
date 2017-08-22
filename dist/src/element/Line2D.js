"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
class Line2D extends __1.Element {
    constructor(from, to) {
        super();
        this.from = from;
        this.to = to;
    }
    getVector() {
        var x = this.to.x - this.from.x;
        var y = this.to.y - this.from.y;
        return new __1.Vector2D(x, y);
    }
    toString() {
        return "Line(" + this.from + " - " + this.to + ")";
    }
}
exports.Line2D = Line2D;
//# sourceMappingURL=Line2D.js.map