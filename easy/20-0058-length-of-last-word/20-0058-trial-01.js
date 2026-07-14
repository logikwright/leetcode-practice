function lengthOfLastWord(inputStr) {
    let strToArr = inputStr.split(" ");

    for(let key = strToArr.length-1; key >= 0; key--){
    
        if(strToArr[key].length > 0) {
            return strToArr[key].length;
        }

    }
}

console.log(lengthOfLastWord("Hello The World   "));
