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

    const eleArr = inputStr.split("");
    console.log(eleArr);
    let finalIntegerValue = 0;

    for(let i=0; i<eleArr.length; i++) {
        if(romanValue[eleArr[i]] < romanValue[eleArr[i+1]]) {
            finalIntegerValue += romanValue[eleArr[i]];
        } else {
            finalIntegerValue += -1 * romanValue[eleArr[i]];
        }
    }

    return finalIntegerValue;
}

console.log(convertToInteger("VII"));
