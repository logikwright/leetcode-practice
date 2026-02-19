function strChrPush(str) {
    let strArr = []
    for (let i = 0; i < str.length; i++ ) {
        strArr.push(str[i]); 
    }

    return strArr;
}

console.log(strChrPush("abcXyz"));