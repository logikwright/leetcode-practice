function validParentheses(inputStr) {
    const storeObj = {};

    const pairObj = {
        '{' : '}',
        '[' : ']',
        '(' : ')'
    };

    for(let i=0; i < inputStr.length; i++) {
        for(let j = i+1; j < inputStr.length; j++) {
            if(pairObj[inputStr[i]] === inputStr[j]) {
                storeObj[inputStr[i]] = inputStr[j];
            }
        }
    }

    return storeObj;
}

console.log(validParentheses('[{()}]'));
console.log(validParentheses('[{]}()'));
