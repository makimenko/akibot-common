import { Angle, Vector2D, Point2D, Line2D, Vector3D, NodeTransformation3D } from "..";
export declare module VectorUtils {
    function rotate2DVector(vector2D: Vector2D, angle: Angle): Vector2D;
    function rotateEndOfLine2D(line2D: Line2D, angle: Angle): Point2D;
    function rotateLine2D(line2D: Line2D, angle: Angle): Line2D;
    function getNorthAngle(vector3d: Vector3D, offsetNorthAngle: Angle): Angle;
    function calculateRelativeTransformation(transA: NodeTransformation3D, transB: NodeTransformation3D): NodeTransformation3D;
}
