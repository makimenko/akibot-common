"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const common = require("..");
describe('Vector Utils', () => {
    var ANGLE_PRECISSION = 0.0000000001;
    var ix0 = 3;
    var iy0 = 2;
    var ix1 = 7;
    var iy1 = 6;
    var line = new common.Line2D(new common.Point2D(ix0, iy0), new common.Point2D(ix1, iy1));
    var resultPoint2D;
    var resultLine2D;
    var angle0 = common.AngleUtils.createAngleFromDegrees(0);
    var angleRight90 = common.AngleUtils.createAngleFromDegrees(-90);
    var angleLeft90 = common.AngleUtils.createAngleFromDegrees(90);
    it("rotateEndOfLine2D - angle 0", function () {
        resultPoint2D = common.VectorUtils.rotateEndOfLine2D(line, angle0);
        chai_1.assert.closeTo(ix1, resultPoint2D.x, ANGLE_PRECISSION);
        chai_1.assert.closeTo(iy1, resultPoint2D.y, ANGLE_PRECISSION);
    });
    it("rotateLine2D - angle 0", function () {
        resultLine2D = common.VectorUtils.rotateLine2D(line, angle0);
        chai_1.assert.closeTo(ix0, resultLine2D.from.x, ANGLE_PRECISSION);
        chai_1.assert.closeTo(iy0, resultLine2D.from.y, ANGLE_PRECISSION);
        chai_1.assert.closeTo(ix1, resultLine2D.to.x, ANGLE_PRECISSION);
        chai_1.assert.closeTo(iy1, resultLine2D.to.y, ANGLE_PRECISSION);
    });
    it("rotateEndOfLine2D - 90 degrees to the left", function () {
        resultPoint2D = common.VectorUtils.rotateEndOfLine2D(line, angleLeft90);
        chai_1.assert.closeTo(iy1, resultPoint2D.y, ANGLE_PRECISSION);
        chai_1.assert.isTrue(resultPoint2D.x < 0);
    });
    it("rotateEndOfLine2D - 90 degrees to the right", function () {
        resultPoint2D = common.VectorUtils.rotateEndOfLine2D(line, angleRight90);
        chai_1.assert.closeTo(ix1, resultPoint2D.x, ANGLE_PRECISSION);
        chai_1.assert.isTrue(resultPoint2D.y < 0);
        resultLine2D = common.VectorUtils.rotateLine2D(line, angleRight90);
        chai_1.assert.closeTo(ix0, resultLine2D.from.x, ANGLE_PRECISSION);
        chai_1.assert.closeTo(iy0, resultLine2D.from.y, ANGLE_PRECISSION);
        chai_1.assert.closeTo(ix1, resultLine2D.to.x, ANGLE_PRECISSION);
        chai_1.assert.isTrue(resultLine2D.to.y < 0);
    });
    it("rotateEndOfLine2D - 90 degrees to the right (via negative angle)", function () {
        resultPoint2D = common.VectorUtils.rotateEndOfLine2D(line, common.AngleUtils.createNegativeAngle(angleLeft90));
        chai_1.assert.closeTo(ix1, resultPoint2D.x, ANGLE_PRECISSION);
        chai_1.assert.isTrue(resultPoint2D.y < 0);
    });
    it("calculateRelativeTransformation", function () {
        var COORD_PRECISSION = 0.01;
        var ROTATION_PRECISSION = 0.0000001;
        var gridConfiguration = new common.GridConfiguration(1, 1, 1, new common.Vector3D(0, 0, 0));
        var gridNode = new common.GridNode(gridConfiguration);
        var robotTransformation = new common.NodeTransformation3D();
        robotTransformation.position = new common.Vector3D(3, 2, 0);
        robotTransformation.rotation = new common.Vector3D(0, 0, common.AngleUtils.degreesToRadians(45));
        var robotNode = new common.RobotNode("filename", robotTransformation);
        var worldNode = new common.WorldNode(gridNode, robotNode);
        var distanceTransformation = new common.NodeTransformation3D();
        distanceTransformation.position = new common.Vector3D(0, 2, 0);
        distanceTransformation.rotation = new common.Vector3D(0, 0, common.AngleUtils.degreesToRadians(5));
        var distanceNode = new common.DeviceNode(distanceTransformation);
        robotNode.devices.push(distanceNode);
        var relative = common.VectorUtils.calculateRelativeTransformation(robotNode.transformation, distanceNode.transformation);
        // Make sure that original transformation was not changed:
        chai_1.assert.equal(robotNode.transformation.position.x, 3);
        chai_1.assert.equal(robotNode.transformation.position.y, 2);
        chai_1.assert.equal(robotNode.transformation.position.z, 0);
        // Check:
        chai_1.assert.approximately(relative.position.x, 1.58, COORD_PRECISSION);
        chai_1.assert.approximately(relative.position.y, 3.41, COORD_PRECISSION);
        chai_1.assert.approximately(relative.position.z, 0, 0);
        chai_1.assert.approximately(relative.rotation.x, 0, 0);
        chai_1.assert.approximately(relative.rotation.y, 0, 0);
        chai_1.assert.approximately(relative.rotation.z, common.AngleUtils.degreesToRadians(50), ROTATION_PRECISSION);
        chai_1.assert.equal(1, relative.scale.x);
        chai_1.assert.equal(1, relative.scale.y);
        chai_1.assert.equal(1, relative.scale.z);
    });
});
//# sourceMappingURL=vector-utils.test.js.map