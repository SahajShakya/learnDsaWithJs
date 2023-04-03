
//         [10,52,90,50]
//             /   \
//     [10, 52]    [90, 50]
//     /     \       /   \
//    10     52     90    50


//             i=0
// temp_left = 10, 52
//             j=0
// tmep_right 50, 90
//         k=0 (check 10>50 or 10<50)
// array: __
// here temp_left[i] <= temp_right[j] so incremeant i by 1
// i=0+1 = 1
// K=0+1 = 1

//                 i=1
// temp_left = 10, 52
//             j=0
// tmep_right 50, 90
//         k=0 k=1(check 52>50 or 52<50)
// array: 10, __,


///copy left and right to temporary variable

function mergeSort(array) {
    if (array.length <= 1) {
        return array
    }
    const mid = Math.floor(array.length/2);
    const left = array.slice(0, mid);
    const right = array.slice(mid)    
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const array = [];
    while(left.length && right.length) {
        if (left[0]<right[0]) {
            array.push(left.shift())
        }
        else {
            array.push(right.shift())
        }
    }
    return [...array, ...left, ...right];
}

function arrayList() {
    const array = [10,20,11,1,90,50];
    console.log(mergeSort(array))
}

arrayList();