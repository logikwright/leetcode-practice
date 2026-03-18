function shareMarket(priceArr) {
    let minValueIndex = 0;

    for(let i=1; i<priceArr.length; i++) {
        if( priceArr[i] < priceArr[minValueIndex] && priceArr[i] !== 0) {
            minValueIndex = i;
        }
    }

    let highestValueIndex = minValueIndex;

    for(let i = minValueIndex + 1; i<priceArr.length; i++) {

        if(priceArr[i] > priceArr[highestValueIndex]) {
            highestValueIndex = i;
        }
    }

    return  priceArr[highestValueIndex] - priceArr[minValueIndex];

}

console.log(shareMarket([3,2,6,5,0,3]));
console.log(shareMarket([7,1,5,3,6,4]));
console.log(shareMarket([3,2,6,5,0,3]));
console.log(shareMarket([7,6,5,4,3,1]));
console.log(shareMarket([2,4,1]));