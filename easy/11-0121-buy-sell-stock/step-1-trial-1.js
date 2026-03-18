function shareMarket(priceArr) {
    let minIndex = 0;
    let minValue = priceArr[minIndex];

    for(let value of priceArr) {
        console.log(`this is value of for/of ${value}`);
        if(priceArr[value] < priceArr[minIndex]) {
            minIndex = value;
        }
    }
    console.log("");
    for(let value in priceArr) {
        console.log(`this is value of for/in ${value}`);
        if(priceArr[value] < priceArr[minIndex]) {
            minIndex = value;
        }
    }



    return `value of minIndex is ${minIndex}`;
}

console.log(shareMarket([7,1,5,3,6,4]));