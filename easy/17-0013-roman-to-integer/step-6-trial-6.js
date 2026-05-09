function convertToInteger(inputStr) {
    
    const romanValue = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    };

    let finalIntegerValue = 0;

    for(let i = inputStr.length-1; i >= 0; i--) {
        let value = (i === inputStr.length-1 || romanValue[inputStr[i]] >= romanValue[inputStr[i+1]]) ? 1 : -1;
        finalIntegerValue += (value * romanValue[inputStr[i]]);
    }

    return finalIntegerValue;

}

console.log(convertToInteger("MCMXCIV"));
console.log(convertToInteger("XCIX"));
console.log(convertToInteger("MMMCMXCIX"));
