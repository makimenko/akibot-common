import { Element } from "..";
export declare class Dimension2D extends Element {
    x: number;
    y: number;
    constructor(x: number, y: number);
    add(dimension2d: Dimension2D): void;
    toString(): string;
}
