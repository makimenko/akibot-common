"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
class Distance extends __1.Element {
    constructor(distanceMm) {
        super();
        this.distanceMm = distanceMm;
        this.errorAngle = new __1.Angle();
        this.errorAngle.radians = 0;
        this.endObstacle = false;
    }
    getDistanceMm() {
        return this.distanceMm;
    }
    setDistanceMm(distanceMm) {
        this.distanceMm = distanceMm;
    }
    getErrorAngle() {
        return this.errorAngle;
    }
    setErrorAngle(errorAngle) {
        this.errorAngle = errorAngle;
    }
    isEndObstacle() {
        return this.endObstacle;
    }
    setEndObstacle(endObstacle) {
        this.endObstacle = endObstacle;
    }
}
exports.Distance = Distance;
//# sourceMappingURL=Distance.js.map