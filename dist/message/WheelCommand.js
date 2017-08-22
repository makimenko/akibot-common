"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
var WHEEL_DIRECTION;
(function (WHEEL_DIRECTION) {
    WHEEL_DIRECTION[WHEEL_DIRECTION["Stop"] = 0] = "Stop";
    WHEEL_DIRECTION[WHEEL_DIRECTION["Left"] = 1] = "Left";
    WHEEL_DIRECTION[WHEEL_DIRECTION["Right"] = 2] = "Right";
    WHEEL_DIRECTION[WHEEL_DIRECTION["Forward"] = 3] = "Forward";
    WHEEL_DIRECTION[WHEEL_DIRECTION["Backward"] = 4] = "Backward";
})(WHEEL_DIRECTION = exports.WHEEL_DIRECTION || (exports.WHEEL_DIRECTION = {}));
;
class WheelCommand extends __1.Message {
    constructor(direction) {
        super();
        this.direction = direction;
    }
}
exports.WheelCommand = WheelCommand;
//# sourceMappingURL=WheelCommand.js.map