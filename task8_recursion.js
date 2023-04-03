function fact(num) {
    if (num == 0) {
        return 1;
    }
    return num * fact(num - 1);            
}

function factRecursion() {
    num = 2
    let result = fact(num);
    console.log(result)
}

factRecursion();