import { Message, Angle } from "../..";
export declare class OrientationResponse extends Message {
    success: boolean | undefined;
    finalAngle: Angle | undefined;
    constructor(success?: boolean | undefined, finalAngle?: Angle | undefined);
}
