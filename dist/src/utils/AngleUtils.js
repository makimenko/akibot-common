"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
var AngleUtils;
(function (AngleUtils) {
    function radiansToDegrees(radians) {
        return radians * 180 / Math.PI;
    }
    AngleUtils.radiansToDegrees = radiansToDegrees;
    function degreesToRadians(degrees) {
        return degrees * Math.PI / 180;
    }
    AngleUtils.degreesToRadians = degreesToRadians;
    function normalizeRadian(radians) {
        var circle = Math.PI * 2;
        var a = radians % circle;
        if (a < 0) {
            a += circle;
        }
        return a;
    }
    AngleUtils.normalizeRadian = normalizeRadian;
    function createNegativeAngle(angle) {
        if (angle.radians == undefined)
            throw "Undefined radians";
        return new __1.Angle(-angle.radians);
        ;
    }
    AngleUtils.createNegativeAngle = createNegativeAngle;
    function createAngleFromDegrees(degrees) {
        return new __1.Angle(degreesToRadians(degrees));
    }
    AngleUtils.createAngleFromDegrees = createAngleFromDegrees;
    function addDegrees(a, b) {
        var x = a + b;
        var rounds = Math.floor(x / 360);
        if (rounds != 0) {
            x = x - (360 * rounds);
        }
        if (x < 0) {
            x = 360 - x;
        }
        return x;
    }
    AngleUtils.addDegrees = addDegrees;
    function leftDistanceDegrees(from, to) {
        return addDegrees(from, -to);
    }
    AngleUtils.leftDistanceDegrees = leftDistanceDegrees;
    function rightDistanceDegrees(from, to) {
        return addDegrees(to, -from);
    }
    AngleUtils.rightDistanceDegrees = rightDistanceDegrees;
    function modularDistanceDegrees(from, to) {
        return Math.min(leftDistanceDegrees(from, to), rightDistanceDegrees(from, to));
    }
    AngleUtils.modularDistanceDegrees = modularDistanceDegrees;
})(AngleUtils = exports.AngleUtils || (exports.AngleUtils = {}));
//# sourceMappingURL=AngleUtils.js.map