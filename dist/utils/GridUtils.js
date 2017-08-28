"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GridUtils;
(function (GridUtils) {
    function createGridData(cells, val) {
        return new Array(cells).fill(new Array(cells).fill(val));
    }
    GridUtils.createGridData = createGridData;
    /*
    
    function printArray(arr: number[][]) {
        for (var y = arr[0].length - 1; y >= 0; y--) {
            var line: string = "";
            for (var x = 0; x < arr.length; x++) {
                line += arr[x][y] + ", ";
            }
            console.log(line);
        }
    }

    function updateValue(arr: number[][], defaultValue: number): void {
        for (var x = 0; x <= arr.length - 1; x++) {
            for (var y = 0; y <= arr[0].length - 1; y++) {
                arr[x][y] = defaultValue;
            }
        }
    }

    function countIf(arr: number[][], value: number): number {
        var count = 0;
        for (var x = 0; x <= arr.length - 1; x++) {
            for (var y = 0; y <= arr[0].length - 1; y++) {
                if (arr[x][y] == value) {
                    count++;
                }
            }
        }
        return count;
    }
    */
})(GridUtils = exports.GridUtils || (exports.GridUtils = {}));
//# sourceMappingURL=GridUtils.js.map