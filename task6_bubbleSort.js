function mergeArrayS(arr1, arr2) {
    let result = [];
    for (i=0; i<arr1.length;i++){
        result[i] = arr1[i]
    }
    for (i=0; i<arr2.length;i++){
        result[arr1.length+i] = arr2[i]
    }
    return result
}


let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};



arr1=[9,12,13,50];
arr2=[17,20,30,50,70];
merge = mergeArrayS(arr1, arr2);
console.log(merge);

sorted = bubbleSort(merge);
console.log(sorted);