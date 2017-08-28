"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
class OrientationResponse extends __1.Message {
    constructor(success, finalAngle) {
        super();
        this.success = success;
        this.finalAngle = finalAngle;
    }
}
exports.OrientationResponse = OrientationResponse;
//# sourceMappingURL=OrientationResponse.js.map