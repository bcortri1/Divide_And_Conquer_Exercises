function findRotationCount(numArr) {
    const startVal = numArr[0];
    
    const endVal = numArr[numArr.length - 1];

    let leftIdx = 0;
    let rightIdx = numArr.length - 1;
    let count = 0;

    if (startVal < endVal) {
        return 0;
    }
    while (leftIdx < rightIdx) {
        let curIdx = Math.floor((leftIdx + rightIdx) / 2);
        let curVal = numArr[curIdx];
        if (startVal < curVal) {
            if (numArr[curIdx + 1] !== undefined) {
                if (curVal < numArr[curIdx + 1]) {
                    //GO RIGHT
                    leftIdx = curIdx;
                }
                else {
                    return curIdx + 1;
                }
            }
        }
        else  {
            if (numArr[curIdx + 1]) {
                if (curVal < numArr[curIdx + 1]) {
                    //GO LEFT
                    rightIdx = curIdx;
                }
                else {
                    return curIdx + 1;
                }
            }

        }
    }

}

// const origArr = [...Array(1023).keys()];
// const testArr1 = origArr.slice(0,601);
// const testArr2 = origArr.slice(601,1023);
// const rotatedArr = [...testArr2, ...testArr1];

// let res = findRotationCount(rotatedArr);
// console.log(res)
module.exports = findRotationCount