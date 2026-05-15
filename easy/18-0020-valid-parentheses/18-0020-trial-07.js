function validParentheses(inputStr) {

    const pairObj = {
        '{' : '}',
        '[' : ']',
        '(' : ')'
    };
    
    const storeArr = [];

    if(inputStr.length > 1) {

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

    return false;
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
