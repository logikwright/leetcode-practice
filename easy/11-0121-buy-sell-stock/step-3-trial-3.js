function shareMarket(priceArr) {
    let minValue = priceArr[0];

    for(let value of priceArr){
        if(value < minValue) {
            minValue = value;
        }
    }

    let minIndex = priceArr.indexOf(minValue);

    if(minIndex !== (priceArr.length-1)) {
        let sliceArr = priceArr.slice(minIndex+1);
        sliceArr.sort((a,b) => b-a);

        return sliceArr[0] - minValue;
    } else {
        return 0;
    }
}

console.log(shareMarket([7,1,5,3,6,4]));
console.log(shareMarket([7,6,5,3,1,4]));
console.log(shareMarket([7,6,5,4,3,1]));