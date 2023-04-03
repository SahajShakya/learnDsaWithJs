function buyApple(money) {
    if (money>0) {
        console.log("I have "+ money + " Rs but", totalApple + " apples");
        buyMore(money);
    }
    else {
        console.log("I dont have money but", totalApple+ " apples")
    }
}

function buyMore(money) {
    totalApple++;
    buyApple(money-10);
}

totalApple = 0;
money=100
buyApple(money);