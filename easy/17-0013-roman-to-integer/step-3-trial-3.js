function convertToInteger(inputStr) {
    
    const romanValue = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    }

    let finalIntegerValue = 0;

    for(let i = 0; i < inputStr.length; i++) {
        let value = (i === 0 || romanValue[inputStr[i]] >= romanValue[inputStr[i+1]]) ? 1 : -1;

        console.log(value);
        finalIntegerValue = (value * romanValue[inputStr[i]]) + finalIntegerValue;
    }

    return Math.abs(finalIntegerValue);
}

console.log(convertToInteger("XCIX"));
console.log(convertToInteger("XII"));
console.log(convertToInteger("VIII"));
console.log(convertToInteger("MCMXCIV"));
