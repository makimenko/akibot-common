"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
class Angle extends index_1.Element {
    constructor(radians) {
        super();
        this.radians = radians;
    }
    getDegrees() {
        if (this.radians == undefined)
            throw "Undefined radians";
        return index_1.AngleUtils.radiansToDegrees(this.radians);
    }
    setDegrees(degrees) {
        this.radians = index_1.AngleUtils.degreesToRadians(degrees);
    }
    add(angle) {
        if (this.radians == undefined || angle.radians == undefined)
            throw "Undefined radians";
        var value = this.radians + angle.radians;
        value = index_1.AngleUtils.normalizeRadian(value);
        this.radians = value;
    }
    fuzzyEqual(b, toleranceDegrees) {
        var res = index_1.AngleUtils.modularDistanceDegrees(this.getDegrees(), b.getDegrees());
        return res < toleranceDegrees;
    }
    toString() {
        return "Angle(" + this.getDegrees() + " deg)";
    }
}
exports.Angle = Angle;
//# sourceMappingURL=Angle.js.map