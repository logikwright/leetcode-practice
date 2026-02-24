function plusOne(digits) {
    let lastIndex = digits.length -1;
    let onePlus = digits[lastIndex] + 1;

    if(digits[lastIndex] < 9) {
        digits[lastIndex] = onePlus;
        return digits;
    } else {
        let expo = 0;
        let lastEditIndex = 0;
        for(let i = lastIndex; i >= 0; i--) {
            if(digits[i] === 9) {
                digits[i] = digits[i] * Math.pow(10, expo);
                expo++;
                lastEditIndex = i;
            } else {
                expo--;
                break;
            }
        }

        digits[lastIndex] = onePlus;

        if(lastEditIndex > 0) {
            let n = lastEditIndex -1;
            digits[n] = digits[n] * Math.pow(10, expo+1);

            let len = lastIndex + 1;
            let removeEle = digits.splice(n, len);
            
            const SUM = removeEle.reduce((acc, curr) => acc + curr, 0);
            const TEMPARR = SUM.toString().split("").map(Number);

            return digits.concat(TEMPARR);
        } else {
            const SUM = digits.reduce((acc, curr) => acc + curr, 0);
            const TEMPARR = SUM.toString().split("").map(Number);

            return TEMPARR;
        }

    }
}

console.log(plusOne([1,2,3,4,5]));
console.log(plusOne([1,9,9,9]));
console.log(plusOne([1,3,9,9]));
console.log(plusOne([9,9]));