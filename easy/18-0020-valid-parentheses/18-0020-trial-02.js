function checkParentheses(inputStr) {
    let leftVal = Math.floor((inputStr.length - 1)/2);
    let rightVal = Math.ceil((inputStr.length - 1)/2);
    
    const pairObject = {
        '{' : '}',
        '[' : ']',
        '(' : ')'
    };

    while (leftVal >= 0) {

        console.log(pairObject[inputStr[leftVal]])
        console.log(inputStr[rightVal])

        if(pairObject[inputStr[leftVal]] !== inputStr[rightVal]) {
            return false;
        }
        
        leftVal--;
        rightVal++;
    }
    return true;

    //return `value of inputStr[leftVal] is ${inputStr[leftVal]} and inputStr[rightVal] is ${inputStr[rightVal]}.` 
}
console.log(checkParentheses('[{}]'));
console.log(checkParentheses('([{}])'));
console.log(checkParentheses('([{)])'));
