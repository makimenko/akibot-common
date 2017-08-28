"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
class OrientationRequest extends __1.Message {
    constructor(targetAngle, tolerance, timeout) {
        super();
        this.targetAngle = targetAngle;
        this.tolerance = tolerance;
        this.timeout = timeout;
    }
}
exports.OrientationRequest = OrientationRequest;
//# sourceMappingURL=OrientationRequest.js.map