export module GridUtils {

    export function createGridData(cells: number, val: number): number[][] {
        return new Array(cells).fill(new Array(cells).fill(val));
    }

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

}