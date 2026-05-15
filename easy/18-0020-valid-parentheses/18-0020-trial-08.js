function validParentheses(inputStr) {

    const pairObj = {
        '{' : '}',
        '[' : ']',
        '(' : ')'
    };
    
    const storeArr = [];

    for(let i=0; i < inputStr.length; i++) {

        if(!pairObj.hasOwnProperty(inputStr[i])) {

            if(pairObj[storeArr[storeArr.length-1]] === inputStr[i]) {
                storeArr.pop();
            } else {
                return false;
            }

        } else {
            storeArr.push(inputStr[i]);
        }
    }
    
    if(storeArr.length === 0) return true;

}

console.log(validParentheses('[{()}]'));
console.log(validParentheses('[{]}()'));
console.log(validParentheses('[{]}'));
console.log(validParentheses('[{}]()'));
console.log(validParentheses('[)'));

console.log(
    `
    true
    false
    false
    true
    false
    `
);
