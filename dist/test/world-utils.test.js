"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common = require("..");
describe('World Utils', () => {
    it("World Content", function () {
        var gridCellCountX = 100;
        var gridCellCountY = 100;
        var gridCellSizeMm = 100;
        var gridMaxObstacleCount = 10;
        var gridOffsetVector = new common.Vector3D(gridCellCountX * gridCellSizeMm / 2, gridCellCountY * gridCellSizeMm / 2, 0);
        var gridConfiguration = new common.GridConfiguration(gridCellCountX, gridCellCountY, gridCellSizeMm, gridMaxObstacleCount, gridOffsetVector);
        var robotNode = new common.RobotNode("model/AkiBot.dae", new common.NodeTransformation3D());
        var worldNode = new common.WorldNode(gridConfiguration, robotNode);
        //TODO: tests
    });
});
//# sourceMappingURL=world-utils.test.js.map