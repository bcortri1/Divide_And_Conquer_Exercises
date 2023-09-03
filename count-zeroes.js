//Given an array that has 1s first and is followed by all 0s
function countZeroes(numArr) {
    if (numArr[0] === 0){
        return numArr.length;
    }
    else if (numArr[numArr.length - 1] === 1){
        return 0;
    }

    else{
        let count = 1; // count starts at one due to last idx check
        let leftIdx = 1; // idx 0 already checked
        let rightIdx = numArr.length - 2; // last idx already checked
        while (leftIdx <= rightIdx ){
            let middleIdx = Math.floor((leftIdx + rightIdx)/2);
            if (numArr[middleIdx] === 0 ){
                count = numArr.length - middleIdx; 
                rightIdx = middleIdx - 1;
            }
            else {
                leftIdx = middleIdx + 1;
            }
        }
        return count;
    }
}

module.exports = countZeroes