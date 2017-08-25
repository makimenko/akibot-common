"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
class GridConfiguration extends __1.WorldElement {
    constructor(cellCount, cellSizeMm, maxObstacleCount, offsetVector) {
        super();
        this.cellCount = cellCount;
        this.cellSizeMm = cellSizeMm;
        this.maxObstacleCount = maxObstacleCount;
        this.offsetVector = offsetVector;
        this.unknownValue = -1;
        this.emptyValue = 0;
    }
}
exports.GridConfiguration = GridConfiguration;
//# sourceMappingURL=GridConfiguration.js.map