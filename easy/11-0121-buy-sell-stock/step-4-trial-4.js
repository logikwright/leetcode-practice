function shareMarket(priceArr) {
    let minIndex = 0;
    
    for(let i=1; i<priceArr.length; i++) {
        if(priceArr[i] < priceArr[minIndex]) {
            minIndex = i;
        }
    }

    if(minIndex !== (priceArr.length-1)) {
        let tempArr = priceArr.slice((minIndex+1));
        tempArr.sort((a,b) => b-a);

        return tempArr[0] - priceArr[minIndex];
    } else {
        return 0;
    }

}

console.log(shareMarket([7,1,5,3,6,4]));
console.log(shareMarket([7,6,5,3,1,4]));
console.log(shareMarket([7,6,5,4,3,1]));
console.log(shareMarket([2,4,1]));