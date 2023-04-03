function mergeArrayS(arr1, arr2) {
    let result = [];
    for (i=0; i<arr1.length;i++){
        result[i] = arr1[i]
    }
    console.log(result);
    for (i=0; i<arr2.length;i++){
        result[arr1.length+i] = arr2[i]
    }
    console.log(result);
}
arr1=[9,12,13,50];
arr2=[17,20,30,50,70];
mergeArrayS(arr1, arr2);
console.log(arr1.concat(arr2));
arr3 = [...arr1, ...arr2];
console.log(arr3);
const cars = ['🚗', '🚙'];
const trucks = ['🚚', '🚛'];
cars.push(trucks);
console.log(cars);