function linearSearch (item) {
    list = [20, 30, 10, 5, 50, 100];
    for (i=0; i<list.length; i++) {
        let index = '';
        if (list[i]===item) {
            console.log('Item found');
            let index = i;
            console.log(`Index of ${item} is on index ${index+1}`)
            break;
        }
        else {
            console.log("not found")
        }
    }
}
linearSearch(10);

list1 = [20, 30, 10, 5, 50, 100];
const result = list1.includes(10);
console.log(result)
const result2 = list1.findIndex((index) => index===10);
console.log(result2+1)