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
            if(digits[i] === 9) {
                let j = i - 1;

                digits[i] = digits[i] * Math.pow(10, expo);
                lastNumEdit = i;

                if(j > 0) {
                    digits[j] = digits[j] * Math.pow(10, expo + 1);
                    lastNumEdit = j;
                }
            }
            expo += 2;
            break;
        }
        console.log(digits);
    }
}

console.log(plusOne([1,2,4,5]));
console.log(plusOne([1,2,9,9]));