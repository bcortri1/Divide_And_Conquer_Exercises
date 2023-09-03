function findRotatedIndex(rArr, targNum) {
    let leftIdx = 0;
    let rightIdx = rArr.length - 1;
    let pivotPoint;
    
    while (leftIdx <= rightIdx) {
        let midIdx = Math.floor((leftIdx + rightIdx) / 2);
        let curVal = rArr[midIdx];

        if(curVal === targNum){
            return midIdx
        }

        if(rArr[0] <= curVal){
            pivotPoint = "right"
        }
        else if(curVal <= rArr[rArr.length-1]){
            pivotPoint = "left"
        }

        //pivot is to right
        if (pivotPoint ==="right"){
            if (rArr[0] > targNum){
                //RIGHT
                leftIdx = midIdx + 1;
            }
            else if (targNum < curVal){
                //LEFT
                rightIdx = midIdx-1;
            }
            else{
                //RIGHT
                leftIdx = midIdx+1;
            }
        }
        //pivot is to left
        else {
            if (rArr[rArr.length-1] < targNum){
                //LEFT
                rightIdx = midIdx-1;
            }
            else if (targNum < curVal){
                //LEFT
                rightIdx = midIdx-1;
            }
            else{
                //RIGHT
                leftIdx = midIdx+1;
            }
        }
    }
    return -1;
}

module.exports = findRotatedIndex