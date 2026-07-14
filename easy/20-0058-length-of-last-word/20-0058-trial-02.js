function lengthOfLastWord(inputStr) {
    let tempStr = "";

    for(let i = inputStr.length-1; i >= -1; i--) {

        if(inputStr[i] === " " || i === -1) {
            if(tempStr === "") {
                continue;
            }else {
                return tempStr.length;
            }
        }else {
            tempStr += inputStr[i];
        }
        console.log(`i is ${i} and tempStr is ${tempStr}`);
    }
}

console.log(lengthOfLastWord("Hello The World   "));
