function longestPalindrome(s) {
    let toArr = s.split("");

    function reverseString(inputStr) {
        let tempArr = inputStr.split("");
        let temp = [];
        
        for( let i = tempArr.length - 1; i >= 0; i--) {
            temp.push(tempArr[i]);
        }

        return temp.join("");
    }

    function sliceArray(inputArr) {
        let temp = [];

        for(let i = 0; i < inputArr.length; i++ ) {
            temp.push(inputArr.slice(i));
        }

        return temp;
    }

    let subArr = sliceArray(toArr);
    let palindromes = [];
    let n = subArr.length;

    for( let i = 0; i < n - (n - 1); i++ ) {

        let leftToRight = subArr[i].join("");
        let rightToLeft = reverseString(leftToRight);

        // console.log(leftToRight);
        // console.log(rightToLeft);
        
        let tempArr = rightToLeft.split("");

        let tempSubArr = sliceArray(tempArr);
        // console.log(tempSubArr);

        for (let j = 0; j < tempSubArr.length; j++) {

            let tempLToR = tempSubArr[j].join("");
            // console.log(tempLToR);
            let tempRToL = reverseString(tempLToR);
            // console.log(tempRToL);
            let isPalindrome = true;

            for( let k = 0; k < tempLToR.length; k++ ) {

                if(tempLToR[k] !== tempRToL[k]) {
                    isPalindrome = false;
                    break;
                }
            }

            if(isPalindrome) {
                palindromes.push(tempRToL);
            }
        }
    }

    let isLongest = true;
    let longestLength = 0;

    for( let i = 0; i < palindromes.length; i++ ) {
        if(palindromes[i].length > palindromes[longestLength].length ) {
            isLongest = false;
            longestLength = i;
        }
    }

    if(isLongest) {
        return palindromes[longestLength]
    }

}


console.log(longestPalindrome("c"));
console.log(longestPalindrome("civicx"));
console.log(longestPalindrome("abacdfgdcaba"));