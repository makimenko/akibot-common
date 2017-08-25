import { assert } from 'chai';
import * as common from "..";

describe('Grid Utils', () => {

  it("createGridData: 1", function () {
    var actual: number[][] = common.GridUtils.createGridData(1, 8);
    var expected: number[][] = [[8]]
    assert.deepEqual(expected, actual);
  });

  it("createGridData: 2", function () {
    var actual: number[][] = common.GridUtils.createGridData(2, 9);
    var expected: number[][] = [[9, 9], [9, 9]];
    assert.deepEqual(expected, actual);
  });

});