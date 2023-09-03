function findFloor(numArr, targNum) {
  let leftIdx = 0;
  let rightIdx = numArr.length-1

  if (targNum < numArr[0]){
    return -1;
  }

  while(leftIdx <= rightIdx){
    let curIdx = Math.floor((leftIdx + rightIdx)/2);
    let curVal = numArr[curIdx];

    if ((curVal <= targNum) && ((numArr[curIdx+1] === undefined) || (numArr[curIdx+1] >= targNum))){
        return curVal;
    }
    else if (curVal < targNum){
        // GO RIGHT
        leftIdx = curIdx + 1;
    }
    else if (curVal > targNum){
        //GO LEFT
        rightIdx = curIdx - 1;
    }
  }
}

module.exports = findFloor