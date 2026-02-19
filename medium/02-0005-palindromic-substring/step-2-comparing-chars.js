import { reverseString } from "./step-1-reverse-string.js"

function compareChar(string) {

    let toCase = string.toLowerCase();
    let inputStr = reverseString(string);
    let n = string.length;

    let temp = [];

    // for(let i = 0; i < n; i++ ) {

    //     if(inputStr[i] === toCase[i]) {
    //         temp.push(toCase[i]);
    //     }
    // }

    while(temp.length < n) {

        for(let i = 0; i < n; i++ ) {

            if(inputStr[i] !== toCase[i]) {
                continue;
            }else {
                temp.push(toCase[i]);
            }

        }
    }
    console.log(inputStr);
    return temp.join("");
}

console.log(compareChar("Nayan"));