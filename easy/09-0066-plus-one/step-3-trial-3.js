function plusOne(digits) {
    let lastIndex = digits.length - 1;
    let onePlus = digits[lastIndex] + 1;

    if(digits[lastIndex] < 9) {
        digits[lastIndex] = onePlus;
        return digits;
    } else {
        let expo = 0;
        let lastNumEdit = 0;

        for(let i = lastIndex; i >= 0; i = i-2) {
            if(i > 0) {
                let j = i-1;

                digits[i] = digits[i] * Math.pow(10, expo);
                digits[j] = digits[j] * Math.pow(10, expo+1);

                lastNumEdit = j;
            }

            if(i === 0) {
                digits[i] = digits[i] * Math.pow(10, expo);
                
                lastNumEdit = i;
            }

            expo += 2;
        }
        console.log(digits);

        digits[lastIndex] = onePlus;
        console.log(digits);

        let removeEle = digits.splice(lastNumEdit, lastIndex);

        const SUM = removeEle.reduce((acc, curr) => acc + curr, 0);

        const TEMPARR = SUM.toString().split("").map(Number);

        if(lastNumEdit > 0) {
            return digits.concat(TEMPARR);
        } else {
            return TEMPARR;
        }
    }
}

// console.log(plusOne([1,2,3,5]));
console.log(plusOne([1,2,9,9]));