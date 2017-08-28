import { Angle, Vector2D, Point2D, Line2D, Vector3D, AngleUtils, Distance, NodeTransformation3D, GridNode, RobotNode, DeviceNode } from "..";

export module VectorUtils {

    export function rotate2DVector(vector2D: Vector2D, angle: Angle): Vector2D {
        if (angle == null || angle.radians == undefined) {
            return vector2D;
        } else {
            var x1 = vector2D.x;
            var y1 = vector2D.y;
            var angleRadians: number = angle.radians;

            var x2 = x1 * Math.cos(angleRadians) - y1 * Math.sin(angleRadians);
            var y2 = y1 * Math.cos(angleRadians) + x1 * Math.sin(angleRadians);

            return new Vector2D(x2, y2);
        }
    }

    export function rotateEndOfLine2D(line2D: Line2D, angle: Angle): Point2D {
        var vector: Vector2D = rotate2DVector(line2D.getVector(), angle);

        var resultPoint2D: Point2D = new Point2D(0, 0);
        resultPoint2D.x = vector.x + line2D.from.x;
        resultPoint2D.y = vector.y + line2D.from.y;

        return resultPoint2D;
    }

    export function rotateLine2D(line2D: Line2D, angle: Angle): Line2D {
        return new Line2D(line2D.from, rotateEndOfLine2D(line2D, angle));
    }

    export function getNorthAngle(vector3d: Vector3D, offsetNorthAngle: Angle): Angle {
        var radians: number = Math.atan2(vector3d.y, vector3d.x);
        var angle = new Angle(radians);
        angle.add(offsetNorthAngle);
        return angle;
    }

    export function calculateRelativeTransformation(transA: NodeTransformation3D, transB: NodeTransformation3D): NodeTransformation3D {
        if (transA == undefined || transB == undefined) {
            throw "undefined parameters";
        }
        var cumulativeTransformation = transA.clone();
        var posVector: Vector3D = transB.position;
        if (transA.rotation.z != 0) {
            var angle: Angle = new Angle(transA.rotation.z);
            var rotatedVector = VectorUtils.rotate2DVector(posVector, angle);
            posVector.x = rotatedVector.x;
            posVector.y = rotatedVector.y;
            // z axis not supported
        }
        cumulativeTransformation.position.add(posVector);
        cumulativeTransformation.rotation.add(transB.rotation);
        return cumulativeTransformation;
    }

}
