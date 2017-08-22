import { Point2D, Vector2D, Element } from "..";
export declare class Line2D extends Element {
    from: Point2D;
    to: Point2D;
    constructor(from: Point2D, to: Point2D);
    getVector(): Vector2D;
    toString(): string;
}
