import { Message, BaseNode } from "..";
export declare class WorldContentResponse extends Message {
    worldNode: BaseNode | undefined;
    constructor(worldNode?: BaseNode | undefined);
}
