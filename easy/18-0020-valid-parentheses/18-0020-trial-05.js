function validParentheses(inputStr) {

    const pairObj = {
        '{' : 1,
        '[' : 1,
        '(' : 1,
        '}' : -1,
        ']' : -1,
        ')' : -1
    };
    
    const storeArr = [];

    for(let i=0; i < inputStr.length; i++) {
        console.log(pairObj[inputStr[i]]);

        if(pairObj[inputStr[i]] < 0) {

            if(pairObj[storeArr[storeArr.length-1]] === Math.abs(pairObj[inputStr[i]])) {
                storeArr.pop();
                console.log(`for i = ${i} storeArr = ['${storeArr}']`);
            } else {
                return false;
            }

        } else {
            storeArr.push(inputStr[i]);
            console.log(`for i = ${i} storeArr = ['${storeArr}']`);
        }
    }

    return true;
}

//console.log(validParentheses('[{()}]'));
console.log(validParentheses('[{]}()'));
//console.log(validParentheses('[{]}'));
//console.log(validParentheses('[{}]()'));
