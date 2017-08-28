import { Message, Command } from "..";

export class AutoIntervalCommand extends Command {

    constructor(public interval: number) {
        super();
    }

}