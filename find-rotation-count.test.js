const findRotationCount = require("./find-rotation-count")

describe("#findRotationCount", function () {
  it("returns the number of rotations", function () {
    const origArr = [...Array(1023).keys()];
    const testArr1 = origArr.slice(0,601);
    const testArr2 = origArr.slice(601,1023);
    const rotatedArr = [...testArr2, ...testArr1];
    
    expect(findRotationCount(rotatedArr)).toBe(422)
    expect(findRotationCount([3, 2])).toBe(1)
    expect(findRotationCount([15, 2, 3])).toBe(1)
    expect(findRotationCount([15, 18, 2, 3, 6, 12])).toBe(2)
    expect(findRotationCount([7, 9, 11, 12, 5])).toBe(4)
    expect(findRotationCount([7, 9, 11, 12, 13, 14, 15, 16, 17, 5])).toBe(9)
    expect(findRotationCount([7, 9, 11, 14, 17, 19, 21, 22, 28, 5])).toBe(9)
    expect(findRotationCount([7, 9, 11, 14, 17, 19, 21, 22, 28, 29, 5])).toBe(10)
    expect(findRotationCount([7, 9, 11, 12, 15])).toBe(0)
  })
})