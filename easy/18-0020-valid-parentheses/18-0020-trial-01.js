function checkParentheses(inputStr) {
    let leftVal = Math.floor((inputStr.length - 1)/2);
    let rightVal = Math.ceil((inputStr.length - 1)/2);
    
    while (leftVal >= 0) {
        if(inputStr[leftVal] !== inputStr[rightVal]) {
            console.log(leftVal);
            console.log(rightVal);
            return false;
        }


        leftVal--;
        console.log(leftVal);
        rightVal++;
        console.log(rightVal);

    }
    return true;

    //return `value of inputStr[leftVal] is ${inputStr[leftVal]} and inputStr[rightVal] is ${inputStr[rightVal]}.` 
}
console.log(checkParentheses('1221'));
console.log(checkParentheses('[{}]'));
console.log(checkParentheses('([{}])'));
console.log(checkParentheses('([{)])'));
