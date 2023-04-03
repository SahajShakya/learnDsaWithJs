function insertElement (newE, pos) {
    data = [60, 30, 3, 9, 10, 50];
    for(i=data.length-1; i>=pos;i--) {
        console.log(data[i])
        if (i>=pos) {
            data[i+1] = data[i];
            if (i==pos) {
                data[i]=newE
            }
        }
    }
    console.log(data)
}

pos=3
insertElement(newE = 90, pos=pos-1)
console.log("Using Splice");
data1 = [60, 30, 3, 9, 10, 50];
data1.splice(2, 0, 90)
console.log(data1);