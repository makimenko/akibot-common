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
        var angle = new Angle();
        angle.radians = radians;
        angle.add(offsetNorthAngle);
        return angle;
    }

    export function calculateRelativeTransformation(gridNode: GridNode, robotNode: RobotNode, deviceNode: DeviceNode): NodeTransformation3D {
        if (gridNode == undefined || robotNode == undefined || deviceNode == undefined) {
            throw "Undefined nodes found"
        }
        if (robotNode.transformation == undefined) {

        }
        var cumulativeTransformation: NodeTransformation3D = (robotNode.transformation == undefined ? new NodeTransformation3D() : robotNode.transformation);

        if (cumulativeTransformation.position==undefined ) {

        }
        cumulativeTransformation.position.add(deviceNode.transformation.position)



        if (nodeB.getTransformation() != null) {
            Point posVector = nodeB.getTransformation().getPosition();
            if (cumulativeTransformation.getRotation().getZ() != 0) {
                Angle angle = new Angle(cumulativeTransformation.getRotation().getZ());
                posVector = VectorUtils.rotate2DVector(posVector, angle);
            }
            cumulativeTransformation.getPosition().add(posVector);
            cumulativeTransformation.getRotation().add(nodeB.getTransformation().getRotation());
        }

        return cumulativeTransformation;
    }

    /*
        export function updateGridDistance(gridNode: Node, distanceNode: Node, distance: Distance) {
            NodeTransformation relativeTransformation = VectorUtils.calculateRelativeTransformation(gridNode, distanceNode);
    
            GridGeometry gridGeometry = (GridGeometry) gridNode.getGeometry();
    
            double angle = relativeTransformation.getRotation().getZ();
            angle += distanceDetails.getNorthAngle().getRadians();
            Angle relativeAngle = new Angle(angle);
    
            DistanceDetails relativeDistanceDetail = new DistanceDetails();
            relativeDistanceDetail.setDistanceMm(distanceDetails.getDistanceMm());
            relativeDistanceDetail.setEndObstacle(distanceDetails.isEndObstacle());
            relativeDistanceDetail.setErrorAngle(distanceDetails.getErrorAngle());
            relativeDistanceDetail.setNorthAngle(relativeAngle);
            relativeDistanceDetail.setPositionOffset(relativeTransformation.getPosition());
    
            gridGeometry.addDistance(relativeDistanceDetail);
        }
    */

}
