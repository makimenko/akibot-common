"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
var WHEEL_SET_DIRECTION;
(function (WHEEL_SET_DIRECTION) {
    WHEEL_SET_DIRECTION[WHEEL_SET_DIRECTION["Stop"] = 0] = "Stop";
    WHEEL_SET_DIRECTION[WHEEL_SET_DIRECTION["Left"] = 1] = "Left";
    WHEEL_SET_DIRECTION[WHEEL_SET_DIRECTION["Right"] = 2] = "Right";
    WHEEL_SET_DIRECTION[WHEEL_SET_DIRECTION["Forward"] = 3] = "Forward";
    WHEEL_SET_DIRECTION[WHEEL_SET_DIRECTION["Backward"] = 4] = "Backward";
})(WHEEL_SET_DIRECTION = exports.WHEEL_SET_DIRECTION || (exports.WHEEL_SET_DIRECTION = {}));
;
class WheelSetCommand extends __1.Message {
    constructor(direction, pctSpeed, durationMs) {
        super();
        this.direction = direction;
        this.pctSpeed = pctSpeed;
        this.durationMs = durationMs;
    }
}
exports.WheelSetCommand = WheelSetCommand;
//# sourceMappingURL=WheelSetCommand.js.map