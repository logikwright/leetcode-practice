function shareMarket(priceArr) {
    let isOrdered = true;

    for(let i=priceArr.length-1; i>=0; i--) {
        for(let j=i-1; j>=0; j--){
            if(priceArr[j] < priceArr[i]) {
                isOrdered = false;
                break;
            }
        }
    }

    if(isOrdered) {
        return 0;
    } else {
        let minValIndex = 0;

        for(let i=1; i<priceArr.length; i++) {
            if(priceArr[i] < priceArr[minValIndex]){
                minValIndex = i;
            }
        }

        if(minValIndex !== (priceArr.length-1)) {
            let tempArr = priceArr.slice(minValIndex + 1);
            tempArr.sort((a,b) => b-a);

            return tempArr[0] - priceArr[minValIndex];
        } else{
            priceArr.splice(minValIndex);
            return shareMarket(priceArr);
        }

    }
}

console.log(shareMarket([7,1,5,3,6,4]));
console.log(shareMarket([7,6,5,3,1,4]));
console.log(shareMarket([7,6,5,4,3,1]));
console.log(shareMarket([2,4,1]));