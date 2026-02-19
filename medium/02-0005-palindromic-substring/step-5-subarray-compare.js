import { reverseString } from "./step-1-reverse-string.js"
import { strToArr } from "./step-3-string-to-array.js";
import{ sliceArray } from "./step-4-string-to-subarray.js";

function subArrComp(inputStr) {

    let inputStrToArr = strToArr(inputStr);
    let subArr = sliceArray(inputStrToArr);

    let palindromes = [];

    for(let i = 0; i < subArr.length; i++ ) {

        let revSubArr = subArr[i].reverse();

        let temp = sliceArray(revSubArr);
        console.log(temp);
        console.log(temp.length);

        for( let j = 0; j < temp.length; j++ ) {

            let u = temp[j].join("");
            console.log(u);

            let p = reverseString(u);
            console.log(p);

            let isPalindrome = true;

            for( let k = 0; k < temp[j].length; k++ ) {

                if( u[k] !== p[k] ) {
                    isPalindrome = false;
                    break;
                }

            }

            if(isPalindrome) {
                palindromes.push(p);
            }

        }

    }

    for( let i = 1; i < palindromes.length; i++ ) {
        let isLongest = true;
        let longestPalindromeIndex = 0;

        if(palindromes[i].length > palindromes[longestPalindromeIndex].length) {
            isLongest = false;
            longestPalindromeIndex = i;
        }

        if(isLongest) {
            return palindromes[longestPalindromeIndex];
        }
    }
}


console.log(subArrComp("babad"));
// console.log(subArrComp("Civicx"));