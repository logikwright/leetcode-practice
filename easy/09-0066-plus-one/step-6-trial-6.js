function plusOne(digits) {
    let digitsByOne = Number(digits.join("")) + 1;
    return digitsByOne.toString().split("").map(Number);
}

console.log(plusOne([1,2,3,4,5]));
console.log(plusOne([1,9,9,9]));
console.log(plusOne([1,3,9,9]));
console.log(plusOne([9,9]));