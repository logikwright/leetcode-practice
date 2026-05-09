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

    for(let i = 0; i < inputStr.length; i++) {
        
        if(i === 0 || romanValue[inputStr[i-1]] >= romanValue[inputStr[i]]) {
            finalIntegerValue += romanValue[inputStr[i]]; 
        } else {
            finalIntegerValue += -1 * romanValue[inputStr[i]];
        }
    }

    return Math.abs(finalIntegerValue);
}

console.log(convertToInteger("XCIX"));
console.log(convertToInteger("XII"));
console.log(convertToInteger("IX"));
console.log(convertToInteger("MCMXCIV"));
