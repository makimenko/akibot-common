"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
class GridNode extends __1.WorldElement {
    constructor(gridConfiguration) {
        super();
        this.gridConfiguration = gridConfiguration;
    }
    initGridDataIfNeeded() {
        if (this.data == undefined) {
            this.data = __1.GridUtils.createGridData(this.gridConfiguration.cellCount, this.gridConfiguration.unknownValue);
        }
    }
    add(addressX, addressY) {
        this.initGridDataIfNeeded();
        // ("add(" + addressX + ", " + addressY + ")");
        if (this.data[addressX][addressY] == this.gridConfiguration.unknownValue) {
            this.data[addressX][addressY] = 1;
            //changeSequence++;
        }
        else if (this.data[addressX][addressY] < this.gridConfiguration.maxObstacleCount) {
            this.data[addressX][addressY]++;
            //changeSequence++;
        }
    }
    remove(addressX, addressY) {
        this.initGridDataIfNeeded();
        // ("remove(" + x + ", " + y + ")");
        var v = this.data[addressX][addressY];
        if (v == this.gridConfiguration.unknownValue) {
            this.data[addressX][addressY] = this.gridConfiguration.emptyValue;
            //changeSequence++;
        }
        else if (v > this.gridConfiguration.emptyValue) {
            this.data[addressX][addressY]--;
            //changeSequence++;
        }
    }
    addLine(line, endIsObstacle) {
        var raster = __1.GridUtils.rasterize(line, endIsObstacle, this.gridConfiguration);
        for (var i = 0; i < raster.length; i++) {
            var x = raster[i][0];
            var y = raster[i][1];
            var status = raster[i][2];
            if (status == -1) {
                this.remove(x, y);
            }
            else if (status == 1) {
                this.add(x, y);
            }
        }
    }
    iterateEndOfLine(line, line2, endIsObstacle) {
        var arrLeft = __1.GridUtils.rasterize(new __1.Line2D(line2.to, line.to), endIsObstacle, this.gridConfiguration);
        if (arrLeft.length > 2) {
            for (var i = 1; i < arrLeft.length - 1; i++) {
                this.addLine(new __1.Line2D(line.from, new __1.Point2D(arrLeft[i][0] * this.gridConfiguration.cellSizeMm + this.gridConfiguration.offsetVector.x, arrLeft[i][1] * this.gridConfiguration.cellSizeMm + this.gridConfiguration.offsetVector.y)), endIsObstacle);
            }
        }
    }
    addLineWithAngle(line, errorAngle, endIsObstacle) {
        var lineLeft = __1.VectorUtils.rotateLine2D(line, errorAngle);
        var lineRight = __1.VectorUtils.rotateLine2D(line, __1.AngleUtils.createNegativeAngle(errorAngle));
        this.addLine(line, endIsObstacle);
        this.addLine(lineLeft, endIsObstacle);
        this.addLine(lineRight, endIsObstacle);
        this.iterateEndOfLine(line, lineLeft, endIsObstacle);
        this.iterateEndOfLine(line, lineRight, endIsObstacle);
    }
    addDistance(positionOffset, northAngle, distance) {
        var line = __1.GridUtils.calculateNorthLine(positionOffset, northAngle, distance.distanceMm);
        this.addLineWithAngle(line, distance.errorAngle, distance.endObstacle);
    }
}
exports.GridNode = GridNode;
//# sourceMappingURL=GridNode.js.map