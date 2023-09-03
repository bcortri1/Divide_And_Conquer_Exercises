function sortedFrequency(sArr, targNum) {
    let leftIdx = 0;
    let rightIdx = sArr.length - 1;


    while ((sArr[leftIdx] !== targNum) || (sArr[rightIdx] !== targNum)) {
        let midIdx = Math.floor((leftIdx + rightIdx) / 2);

        if ((leftIdx > sArr.length - 1) || (rightIdx < 0)) { 
            return -1 
        }
        else{
            if (sArr[midIdx] < targNum) {
                leftIdx = midIdx + 1
            }
            else if (sArr[midIdx] > targNum) {
                rightIdx = midIdx - 1
            }
            else {
                if (sArr[leftIdx] !== targNum) {
                    leftIdx++;
                }
    
                if (sArr[rightIdx] !== targNum) {
                    rightIdx--;
                }
            }
        }
    }
    return rightIdx - leftIdx + 1;
}

module.exports = sortedFrequency