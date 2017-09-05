"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
class GyroscopeCalibrationRequest extends __1.Message {
    constructor(maxTimeMs, intervalMs) {
        super();
        this.maxTimeMs = maxTimeMs;
        this.intervalMs = intervalMs;
    }
}
exports.GyroscopeCalibrationRequest = GyroscopeCalibrationRequest;
//# sourceMappingURL=GyroscopeCalibrationRequest.js.map