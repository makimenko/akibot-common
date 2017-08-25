"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common = require("..");
describe('World Utils', () => {
    it("World Content", function () {
        var gridCellCount = 100;
        var gridCellSizeMm = 100;
        var gridMaxObstacleCount = 10;
        var gridOffsetVector = new common.Vector3D(gridCellCount * gridCellSizeMm / 2, gridCellCount * gridCellSizeMm / 2, 0);
        var gridConfiguration = new common.GridConfiguration(gridCellCount, gridCellSizeMm, gridMaxObstacleCount, gridOffsetVector);
        var gridNode = new common.GridNode(gridConfiguration);
        var robotNode = new common.RobotNode("model/AkiBot.dae", new common.NodeTransformation3D());
        var worldNode = new common.WorldNode(gridNode, robotNode);
        //TODO: tests
    });
});
//# sourceMappingURL=world-utils.test.js.map