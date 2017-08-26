import { Angle, Element } from "..";

export class Distance extends Element {

    public constructor(public distanceMm: number, public errorAngle: Angle, public endObstacle: boolean) {
        super();
    }

}
