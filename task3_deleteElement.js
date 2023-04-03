function removeElement(position) {
    list = [10,20, 30, 12, 19, 92];
    for (i=position; i<list.length;i++){
        list[i] = list[i+1];
    }
    list.length = list.length-1;
    console.log(list)
}
let position=2//3rd element
position = position-1
removeElement(position);

const myArray = [10,20, 30, 12, 19, 92];

const x = myArray.splice(1, 1);

console.log(`myArray values: ${myArray}`);
console.log(`variable x value: ${x}`);