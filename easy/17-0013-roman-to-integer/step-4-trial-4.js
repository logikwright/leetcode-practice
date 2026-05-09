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

    for(let i=0; i<inputStr.length; i++) {
        let value = (romanValue[inputStr[i]] >= romanValue[inputStr[i+1]] || i === inputStr.length-1) ? 1 : -1;
        finalIntegerValue += (value * romanValue[inputStr[i]]);
    }

    return finalIntegerValue;

}

console.log(convertToInteger("MCMXCIV"));
console.log(convertToInteger("XCIX"));
