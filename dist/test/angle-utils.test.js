"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const common = require("..");
describe('Angle Utils', () => {
    it("createAngleFromDegrees", function () {
        var angle = common.AngleUtils.createAngleFromDegrees(90);
        chai_1.assert.equal(angle.getDegrees(), 90);
        chai_1.assert.closeTo(angle.radians, 1.5708, 0.0001);
    });
    it("degreesToRadians", function () {
        var radians = common.AngleUtils.degreesToRadians(90);
        chai_1.assert.closeTo(radians, 1.5708, 0.0001);
    });
    it("radiansToDegrees", function () {
        var radians = common.AngleUtils.radiansToDegrees(1.5708);
        chai_1.assert.closeTo(radians, 90, 0.001);
    });
    it("normalizeRadian", function () {
        chai_1.assert.equal(common.AngleUtils.normalizeRadian(0), 0);
        chai_1.assert.equal(common.AngleUtils.normalizeRadian(1), 1);
        chai_1.assert.closeTo(common.AngleUtils.normalizeRadian(100), 5.75225615, 0.0001);
    });
    it("addDegrees", function () {
        chai_1.assert.equal(common.AngleUtils.addDegrees(0, 0), 0);
        chai_1.assert.equal(common.AngleUtils.addDegrees(0, 1), 1);
        chai_1.assert.equal(common.AngleUtils.addDegrees(90, 90), 180);
        chai_1.assert.equal(common.AngleUtils.addDegrees(180, 180), 0);
        chai_1.assert.equal(common.AngleUtils.addDegrees(180, -180), 0);
        //TODO: normalize 1 = -359: assert.equal(common.AngleUtils.addDegrees(180, -181), 1);
        chai_1.assert.equal(common.AngleUtils.addDegrees(-180, 181), 1);
        chai_1.assert.equal(common.AngleUtils.addDegrees(1, 36000), 1);
    });
    it("rightDistance", function () {
        chai_1.assert.equal(270, common.AngleUtils.rightDistanceDegrees(180, 90));
        chai_1.assert.equal(1, common.AngleUtils.rightDistanceDegrees(180, 181));
        chai_1.assert.equal(359, common.AngleUtils.rightDistanceDegrees(181, 180));
        chai_1.assert.equal(0, common.AngleUtils.rightDistanceDegrees(180, 180));
        chai_1.assert.equal(61, common.AngleUtils.rightDistanceDegrees(299, 0));
        chai_1.assert.equal(359, common.AngleUtils.rightDistanceDegrees(330, 329));
    });
    it("leftDistance", function () {
        chai_1.assert.equal(270, common.AngleUtils.leftDistanceDegrees(180, 270));
        chai_1.assert.equal(1, common.AngleUtils.leftDistanceDegrees(180, 179));
        chai_1.assert.equal(359, common.AngleUtils.leftDistanceDegrees(179, 180));
        chai_1.assert.equal(0, common.AngleUtils.leftDistanceDegrees(180, 180));
        chai_1.assert.equal(1, common.AngleUtils.leftDistanceDegrees(330.000000001, 329.000000001));
    });
    it("modularDistance", function () {
        chai_1.assert.equal(10, common.AngleUtils.modularDistanceDegrees(80, 90));
        chai_1.assert.equal(10, common.AngleUtils.modularDistanceDegrees(90, 80));
        chai_1.assert.equal(10, common.AngleUtils.modularDistanceDegrees(355, 5));
        chai_1.assert.equal(10, common.AngleUtils.modularDistanceDegrees(5, 355));
        chai_1.assert.equal(0, common.AngleUtils.modularDistanceDegrees(-5, 355));
        chai_1.assert.equal(0, common.AngleUtils.modularDistanceDegrees(1, 1));
    });
});
//# sourceMappingURL=angle-utils.test.js.map