"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
var GridUtils;
(function (GridUtils) {
    function createGridData(cells, val) {
        var res = [];
        for (var i = 0; i < cells; i++) {
            var set = new Array(cells).fill(val);
            res.push(set);
        }
        return res;
    }
    GridUtils.createGridData = createGridData;
    function getPointWithOffset(point, gridConfiguration) {
        var offsetPoint = new __1.Point2D(0, 0);
        offsetPoint.x = point.x - gridConfiguration.offsetVector.x;
        offsetPoint.y = point.y - gridConfiguration.offsetVector.y;
        if (offsetPoint.x >= gridConfiguration.cellCount * gridConfiguration.cellSizeMm
            || offsetPoint.x < 0
            || offsetPoint.y >= gridConfiguration.cellCount * gridConfiguration.cellSizeMm
            || offsetPoint.y < 0) {
            throw "Outside World (point=" + point.toString() + ", offsetPoint=" + offsetPoint.toString() + ")";
        }
        return offsetPoint;
    }
    GridUtils.getPointWithOffset = getPointWithOffset;
    function getAddressX(point, gridConfiguration) {
        return Math.floor(getPointWithOffset(point, gridConfiguration).x / gridConfiguration.cellSizeMm);
    }
    GridUtils.getAddressX = getAddressX;
    function getAddressY(point, gridConfiguration) {
        return Math.floor(getPointWithOffset(point, gridConfiguration).y / gridConfiguration.cellSizeMm);
    }
    GridUtils.getAddressY = getAddressY;
    function rasterize(line, endIsObstacle, gridConfiguration) {
        var x = getAddressX(line.from, gridConfiguration);
        var y = getAddressY(line.from, gridConfiguration);
        var x2 = getAddressX(line.to, gridConfiguration);
        var y2 = getAddressY(line.to, gridConfiguration);
        //console.log("x=" + x + ", y=" + y);
        //console.log("x2=" + x2 + ", y2=" + y2);
        var distance = 1 + Math.floor(Math.sqrt(Math.pow(x2 - x, 2) + Math.pow(y2 - y, 2)));
        //var res: number[][] = new [distance][3];
        //console.log("distance=" + distance);
        var res = new Array(distance);
        // Bresenham's line algorithm
        var w = x2 - x;
        var h = y2 - y;
        var dx1 = 0, dy1 = 0, dx2 = 0, dy2 = 0;
        if (w < 0)
            dx1 = -1;
        else if (w > 0)
            dx1 = 1;
        if (h < 0)
            dy1 = -1;
        else if (h > 0)
            dy1 = 1;
        if (w < 0)
            dx2 = -1;
        else if (w > 0)
            dx2 = 1;
        //console.log("w=" + w + ", h=" + h);
        var longest = Math.abs(w);
        var shortest = Math.abs(h);
        if (!(longest > shortest)) {
            longest = Math.abs(h);
            shortest = Math.abs(w);
            if (h < 0)
                dy2 = -1;
            else if (h > 0)
                dy2 = 1;
            dx2 = 0;
        }
        var numerator = longest >> 1;
        for (var i = 0; i <= longest; i++) {
            var set = [3];
            var val;
            //console.log("iterate " + x + ", " + y);
            set[0] = x;
            set[1] = y;
            if (endIsObstacle && x == x2 && y == y2) {
                set[2] = 1;
            }
            else if (!endIsObstacle || x != x2 || y != y2) {
                set[2] = -1;
            }
            else {
                set[2] = 0;
            }
            res[i] = set;
            numerator += shortest;
            if (!(numerator < longest)) {
                numerator -= longest;
                x += dx1;
                y += dy1;
            }
            else {
                x += dx2;
                y += dy2;
            }
        }
        return res;
    }
    GridUtils.rasterize = rasterize;
    function calculateNorthLine(positionOffset, northAngle, distanceCm) {
        var a = distanceCm * Math.cos(northAngle.radians + __1.AngleUtils.degreesToRadians(90));
        var b = distanceCm * Math.sin(northAngle.radians + __1.AngleUtils.degreesToRadians(90));
        var pointTo = new __1.Vector3D(positionOffset.x + a, positionOffset.y + b, 0);
        return new __1.Line3D(positionOffset, pointTo);
    }
    GridUtils.calculateNorthLine = calculateNorthLine;
    function updateGridDistance(gridNode, robotNode, distanceNode, distance) {
        var relativeTransformation = __1.VectorUtils.calculateRelativeTransformation(robotNode.transformation, distanceNode.transformation);
        var northAngle = new __1.Angle(relativeTransformation.rotation.z);
        gridNode.addDistance(relativeTransformation.position, northAngle, distance);
    }
    GridUtils.updateGridDistance = updateGridDistance;
    function printArray(arr) {
        var numX = arr.length;
        var numY = arr[0].length;
        for (var y = numY - 1; y >= 0; y--) {
            var line = "";
            for (var x = 0; x < numX; x++) {
                line += arr[x][y] + ", ";
            }
            console.log(line);
        }
    }
    GridUtils.printArray = printArray;
})(GridUtils = exports.GridUtils || (exports.GridUtils = {}));
//# sourceMappingURL=GridUtils.js.map