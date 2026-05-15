function validParentheses(inputStr) {

    const pairObj = {
        '{' : 1,
        '[' : 2,
        '(' : 3,
        '}' : -1,
        ']' : -2,
        ')' : -3
    };
    
    const storeArr = [];

    for(let i=0; i < inputStr.length; i++) {
        if(pairObj[inputStr[i]] < 0) {
            if(pairObj[storeArr[storeArr.length-1]] === Math.abs(pairObj[inputStr[i]])) {
                storeArr.pop();
            } else {
                return false;
            }
        } else {
            storeArr.push(inputStr[i]);
        }
    }

    return true;
}

console.log(validParentheses('[{()}]'));
console.log(validParentheses('[{]}()'));
console.log(validParentheses('[{]}'));
console.log(validParentheses('[{}]()'));
console.log(validParentheses('()[]{}'));
