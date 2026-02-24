function plusOne(digits) {

    let expo = 0;
    let lastNumEdit = 0;

    for( let i = digits.length - 1; i >= 0; i = i - 2) {
        if(digits[i] === 9) {
            if(i > 0) {
                let j = i - 1;
                digits[i] = digits[i] * Math.pow(10, expo);
                digits[j] = digits[j] * Math.pow(10, expo + 1);

                expo = expo + 2;
                lastNumEdit = j;
            } else if(i  === 0) {
                digits[i] = digits[i] * Math.pow(10, expo);
                lastNumEdit = i;
            } else {
                break;
            }
        }
    }
}

console.log(plusOne([1,9,9]));