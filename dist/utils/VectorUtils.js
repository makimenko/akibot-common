"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
var VectorUtils;
(function (VectorUtils) {
    function rotate2DVector(vector2D, angle) {
        if (angle == null || angle.radians == undefined) {
            return vector2D;
        }
        else {
            var x1 = vector2D.x;
            var y1 = vector2D.y;
            var angleRadians = angle.radians;
            var x2 = x1 * Math.cos(angleRadians) - y1 * Math.sin(angleRadians);
            var y2 = y1 * Math.cos(angleRadians) + x1 * Math.sin(angleRadians);
            return new __1.Vector2D(x2, y2);
        }
    }
    VectorUtils.rotate2DVector = rotate2DVector;
    function rotateEndOfLine2D(line2D, angle) {
        var vector = rotate2DVector(line2D.getVector(), angle);
        var resultPoint2D = new __1.Point2D(0, 0);
        resultPoint2D.x = vector.x + line2D.from.x;
        resultPoint2D.y = vector.y + line2D.from.y;
        return resultPoint2D;
    }
    VectorUtils.rotateEndOfLine2D = rotateEndOfLine2D;
    function rotateLine2D(line2D, angle) {
        return new __1.Line2D(line2D.from, rotateEndOfLine2D(line2D, angle));
    }
    VectorUtils.rotateLine2D = rotateLine2D;
    function getNorthAngle(vector3d, offsetNorthAngle) {
        var radians = Math.atan2(vector3d.y, vector3d.x);
        var angle = new __1.Angle(radians);
        angle.add(offsetNorthAngle);
        return angle;
    }
    VectorUtils.getNorthAngle = getNorthAngle;
    function calculateRelativeTransformation(transA, transB) {
        if (transA == undefined || transB == undefined) {
            throw "undefined parameters";
        }
        var cumulativeTransformation = transA.clone();
        var posVector = transB.position;
        if (transA.rotation.z != 0) {
            var angle = new __1.Angle(transA.rotation.z);
            var rotatedVector = VectorUtils.rotate2DVector(posVector, angle);
            posVector.x = rotatedVector.x;
            posVector.y = rotatedVector.y;
            // z axis not supported
        }
        cumulativeTransformation.position.add(posVector);
        cumulativeTransformation.rotation.add(transB.rotation);
        return cumulativeTransformation;
    }
    VectorUtils.calculateRelativeTransformation = calculateRelativeTransformation;
})(VectorUtils = exports.VectorUtils || (exports.VectorUtils = {}));
//# sourceMappingURL=VectorUtils.js.map