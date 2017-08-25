"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const common = require("..");
describe('Grid Utils', () => {
    it("createGridData: 1", function () {
        var actual = common.GridUtils.createGridData(1, 8);
        var expected = [[8]];
        chai_1.assert.deepEqual(expected, actual);
    });
    it("createGridData: 2", function () {
        var actual = common.GridUtils.createGridData(2, 9);
        var expected = [[9, 9], [9, 9]];
        chai_1.assert.deepEqual(expected, actual);
    });
});
//# sourceMappingURL=grid-utils.test.js.map