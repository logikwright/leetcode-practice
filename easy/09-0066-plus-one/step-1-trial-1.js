function plusOne(digits) {

    let expo = 0;
    let lastNumEdit = 0;

    for(let i = digits.length - 1; i >= 0; i = i - 2) {
        if(digits[i] === 9) {
            if(i > 0) {
                let j = i -1;
                
                digits[i] = digits[i] * Math.pow(10, expo);
                digits[j] = digits[j] * Math.pow(10, expo + 1);

                expo = expo + 2;
                lastNumEdit = j;
            } else {
                digits[i] = digits[i] * Math.pow(10, expo);
                lastNumEdit = i;
            }
        }
    }
    
    let lastIndex = digits.length - 1;
    digits[lastIndex] = digits[lastIndex] + 1;

    let removeEle = digits.splice(lastNumEdit, lastIndex);
    const SUM = removeEle.reduce((acc, curr) => acc + curr, 0);

    let tempArr = SUM.toString().split("").map(Number);
    let concatArr = digits.concat(tempArr);

    // console.log(removeEle);
    // console.log(SUM);
    // console.log(digits);
    console.log(tempArr);
    return concatArr;
}

console.log(plusOne([1,2,9]));
// console.log(plusOne([1,9,9]));