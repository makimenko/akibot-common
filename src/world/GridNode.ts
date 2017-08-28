import { Vector3D, WorldElement, GridConfiguration, Line2D, GridUtils, Point2D, Angle, VectorUtils, AngleUtils, Distance } from "..";

export class GridNode extends WorldElement {

    public data: number[][];

    constructor(public gridConfiguration: GridConfiguration) {
        super();
    }

    public initGridDataIfNeeded() {
        if (this.data == undefined) {
            this.data = GridUtils.createGridData(this.gridConfiguration.cellCount, this.gridConfiguration.unknownValue);
        }
    }

    public add(addressX: number, addressY: number) {
        this.initGridDataIfNeeded();
        // ("add(" + addressX + ", " + addressY + ")");
        if (this.data[addressX][addressY] == this.gridConfiguration.unknownValue) {
            this.data[addressX][addressY] = 1;
            //changeSequence++;
        } else if (this.data[addressX][addressY] < this.gridConfiguration.maxObstacleCount) {
            this.data[addressX][addressY]++;
            //changeSequence++;
        }
    }

    public remove(addressX: number, addressY: number) {
        this.initGridDataIfNeeded();
        // ("remove(" + x + ", " + y + ")");
        var v = this.data[addressX][addressY];
        if (v == this.gridConfiguration.unknownValue) {
            this.data[addressX][addressY] = this.gridConfiguration.emptyValue;
            //changeSequence++;
        } else if (v > this.gridConfiguration.emptyValue) {
            this.data[addressX][addressY]--;
            //changeSequence++;
        }
    }

    public addLine(line: Line2D, endIsObstacle: boolean) {
        var raster: number[][] = GridUtils.rasterize(line, endIsObstacle, this.gridConfiguration);
        for (var i = 0; i < raster.length; i++) {
            var x = raster[i][0];
            var y = raster[i][1];
            var status = raster[i][2];

            if (status == -1) {
                this.remove(x, y);
            } else if (status == 1) {
                this.add(x, y);
            }
        }
    }

    public iterateEndOfLine(line: Line2D, line2: Line2D, endIsObstacle: boolean) {
        var arrLeft: number[][] = GridUtils.rasterize(new Line2D(line2.to, line.to), endIsObstacle, this.gridConfiguration);
        if (arrLeft.length > 2) {
            for (var i = 1; i < arrLeft.length - 1; i++) {
                this.addLine(new Line2D(line.from
                    , new Point2D(
                        arrLeft[i][0] * this.gridConfiguration.cellSizeMm + this.gridConfiguration.offsetVector.x,
                        arrLeft[i][1] * this.gridConfiguration.cellSizeMm + this.gridConfiguration.offsetVector.y
                    )
                ), endIsObstacle);
            }
        }
    }

    public addLineWithAngle(line: Line2D, errorAngle: Angle, endIsObstacle: boolean) {
        var lineLeft = VectorUtils.rotateLine2D(line, errorAngle);
        var lineRight = VectorUtils.rotateLine2D(line, AngleUtils.createNegativeAngle(errorAngle));

        this.addLine(line, endIsObstacle);
        this.addLine(lineLeft, endIsObstacle);
        this.addLine(lineRight, endIsObstacle);

        this.iterateEndOfLine(line, lineLeft, endIsObstacle);
        this.iterateEndOfLine(line, lineRight, endIsObstacle);
    }

    public addDistance(positionOffset: Vector3D, northAngle: Angle, distance: Distance) {
        var line: Line2D = GridUtils.calculateNorthLine(positionOffset, northAngle, distance.distanceMm);
        this.addLineWithAngle(line, distance.errorAngle, distance.endObstacle);
    }



}
