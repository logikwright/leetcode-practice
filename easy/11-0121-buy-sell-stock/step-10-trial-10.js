function shareMarket(priceArr) {
    let highValIndex = priceArr.length-1;
    for(let i = priceArr.length-1; i>=0; i--) {
        if(priceArr[i] > priceArr[highValIndex]){
            highValIndex = i;
        }
    }

    let maxProfit = 0;

    for(let i = highValIndex-1; i>=0; i--) {
        let profit = priceArr[highValIndex] - priceArr[i];

        if(profit > maxProfit) {
            maxProfit = profit;
        }
    }

    return maxProfit;
}

console.log(shareMarket([3,2,6,5,0,3]));
console.log(shareMarket([7,1,5,3,6,4]));
console.log(shareMarket([3,2,6,5,0,3]));
console.log(shareMarket([7,6,5,4,3,1]));
console.log(shareMarket([2,4,1]));