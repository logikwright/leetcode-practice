function shareMarket(priceArr) {
    let minPrice = priceArr[0];
    let maxProfit = 0;

    for(let i=1; i<priceArr.length; i++) {
        let profit = priceArr[i] - minPrice;

        if(profit > maxProfit) {
            maxProfit = profit;
        }

        if(priceArr[i] < minPrice) {
            minPrice = priceArr[i];
        }
    }

    return maxProfit;
}

console.log(shareMarket([3,2,6,5,0,3]));
console.log(shareMarket([7,1,5,3,6,4]));
console.log(shareMarket([3,2,6,5,0,3]));
console.log(shareMarket([7,6,5,4,3,1]));
console.log(shareMarket([2,4,1]));