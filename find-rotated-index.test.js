const findRotatedIndex = require("./find-rotated-index")

describe("#findRotatedIndex", function(){
  it("returns the correct index", function(){
    const origArr = [...Array(1023).keys()];
    const testArr1 = origArr.slice(0,601);
    const testArr2 = origArr.slice(601,1023);
    const rotatedArr = [...testArr2, ...testArr1];
    expect(findRotatedIndex(rotatedArr, 1023)).toBe(-1)
    expect(findRotatedIndex(rotatedArr, 1022)).toBe(421)
    expect(findRotatedIndex(rotatedArr, 1021)).toBe(420)
    expect(findRotatedIndex(rotatedArr, 1020)).toBe(419)
    expect(findRotatedIndex(rotatedArr, 1019)).toBe(418)
    expect(findRotatedIndex(rotatedArr, 1018)).toBe(417)
    expect(findRotatedIndex(rotatedArr, 1017)).toBe(416)
    expect(findRotatedIndex(rotatedArr, 1016)).toBe(415)
    expect(findRotatedIndex(rotatedArr, 1015)).toBe(414)
    expect(findRotatedIndex(rotatedArr, 1014)).toBe(413)
    expect(findRotatedIndex(rotatedArr, 1013)).toBe(412)
    expect(findRotatedIndex(rotatedArr, 1012)).toBe(411)
    expect(findRotatedIndex(rotatedArr, 1011)).toBe(410)
    expect(findRotatedIndex(rotatedArr, 1010)).toBe(409)
    expect(findRotatedIndex(rotatedArr, 1009)).toBe(408)
    expect(findRotatedIndex(rotatedArr, 600)).toBe(1022)
    expect(findRotatedIndex(rotatedArr, 601)).toBe(0)

    expect(findRotatedIndex([2, 3, 1], 2)).toBe(0)
    expect(findRotatedIndex([2, 3, 1], 1)).toBe(2)
    expect(findRotatedIndex([2, 1], 1)).toBe(1)
    expect(findRotatedIndex([3, 4, 1, 2], 4)).toBe(1)
    expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)).toBe(2)
    expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)).toBe(6)
    expect(findRotatedIndex([6, 7, 8, 9, 10, 1, 2, 3, 4], 3)).toBe(7)
    expect(findRotatedIndex([37, 44, 66, 102, 10, 22], 102)).toBe(3)
    expect(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)).toBe(-1)
    expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)).toBe(-1)
  })
})