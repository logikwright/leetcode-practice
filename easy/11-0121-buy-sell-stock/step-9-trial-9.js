function shareMarket(priceArr) {
    let lowValueIndex = 0;

    for(let i = 1; i<priceArr.length; i++) {
        if(priceArr[i] < priceArr[lowValueIndex] && priceArr[i] !== 0) {
            lowValueIndex = i;
        }
    }

    if( lowValueIndex !== (priceArr.length-1)) {
        let highValueIndex = lowValueIndex;
        for(let i=lowValueIndex + 1; i<priceArr.length; i++) {
            if(priceArr[i] > priceArr[highValueIndex]) {
                highValueIndex = i;
            }
        } 

        return priceArr[highValueIndex] - priceArr[lowValueIndex];
    } else {
        isOrdered = true;

        for(let i=0; i<priceArr.length; i++) {
            for(let j=i+1; j<priceArr.length; j++) {
                if(priceArr[j] > priceArr[i]) {
                    isOrdered = false;
                    break;
                }
            }
        }

        if(isOrdered) {
            return 0;
        } else {
            priceArr.splice(lowValueIndex);
            return shareMarket(priceArr);

        }
    }
}

console.log(shareMarket([3,2,6,5,0,3]));
console.log(shareMarket([7,1,5,3,6,4]));
console.log(shareMarket([3,2,6,5,0,3]));
console.log(shareMarket([7,6,5,4,3,1]));
console.log(shareMarket([2,4,1]));