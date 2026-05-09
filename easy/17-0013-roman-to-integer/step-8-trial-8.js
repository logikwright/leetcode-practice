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
        let current = romanValue[inputStr[i]];
        let next = romanValue[inputStr[i+1]] || 0;

        if(current >= next) {
            finalIntegerValue += current;
        }else {
            finalIntegerValue -= current;
        }
    }

    return finalIntegerValue;

}

console.log(convertToInteger("MCMXCIV"));
console.log(convertToInteger("XCIX"));
console.log(convertToInteger("MMMCMXCIX"));
