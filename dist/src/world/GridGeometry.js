"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
class GridGeometry extends __1.Geometry {
    //TODO: private grid: number[][];
    constructor(gridConfiguration) {
        super();
        this.gridConfiguration = gridConfiguration;
        /* how to init?
         this.grid = new int[gridConfiguration.getCellCountX()][gridConfiguration.getCellCountY()];

        final ArrayUtils arrayUtils = new ArrayUtils();
        arrayUtils.updateValue(grid, gridConfiguration.getUnknownValue());
        */
    }
}
exports.GridGeometry = GridGeometry;
//# sourceMappingURL=GridGeometry.js.map