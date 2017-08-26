import { Message } from "..";

export class AutoIntervalCommand extends Message {

    constructor(public interval: number) {
        super();
    }

}