import { Element } from "../index";
export declare class Angle extends Element {
    radians: number;
    constructor(radians: number);
    getDegrees(): number;
    setDegrees(degrees: number): void;
    add(angle: Angle): void;
    fuzzyEqual(b: Angle, toleranceDegrees: number): boolean;
    toString(): string;
}
