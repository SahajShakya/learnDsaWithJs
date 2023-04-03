//Traversal each list element (Iterate)
list = [9, 45, 2, 8, 45, 23, 7, 78, 0, 11, 41, 77];

console.log("Traversal");
function traversal(list) {
    for (i=0; i<list.length-1;i++) {
        console.log(`Array[${i}] is ${list[i]}`)
    }
}
traversal(list);

console.log("Access");

//Access 5th element
function getElement(index) {
    //validation
    if (index<list.length && typeof parseInt(index)==="number") {
        console.log(`Array[${index}] is ${list[index]}`)
    }
    else {
        console.log("Enter valid Input")
    }
}
getElement(5);
getElement("a");