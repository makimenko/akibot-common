import { Message, WorldNode } from "../..";

export class WorldContentResponse extends Message {

    constructor(public worldNode: WorldNode) {
        super();
    }
    
}