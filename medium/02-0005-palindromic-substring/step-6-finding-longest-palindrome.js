function longestPalindrome(s) {
    let toArr = s.toLowerCase().split(""); 

    function reverseString(inputStr) {
        let tempArr = inputStr.split("");
        let temp = [];

        for( let i = tempArr.length - 1; i >= 0; i-- ) {
            temp.push(tempArr[i]); 
        }

        return temp.join("");
    } 

    function sliceArray(inputArr) {
        let temp = [];
        for( let i = 0; i < inputArr.length; i++ ) {
            temp.push(inputArr.slice(i));
        }
        return temp;
    }

    let subArr = sliceArray(toArr);
    let palindromes = [];

    for( let i = 0; i < subArr.length; i++ ) {

        let tempStr = subArr[i].join(""); 
        // console.log(subArr[i]);
        let tempArr = tempStr.split("");
        // console.log(tempArr);
        // console.log(tempArr === subArr[i]);

        let revArr = tempArr.reverse();
        // console.log(revArr);
        let slicedTempArr = sliceArray(revArr);
        // console.log(slicedTempArr);

        for( let j = 0; j < slicedTempArr.length; j++ ) {
            let leftToRightStr = slicedTempArr[j].join("");

            let rightToLeftStr = reverseString(leftToRightStr);
            
            // console.log(leftToRightStr);
            // console.log(rightToLeftStr);
            
            let isPalindrome = true;

            for( let k = 0; k < leftToRightStr.length; k++ ) {

                if( leftToRightStr[k] !== rightToLeftStr[k] ) {
                    isPalindrome = false;
                    break;
                }
            }

            if(isPalindrome) {
                palindromes.push(rightToLeftStr);
            }

        }

    }

    let isLongest = true;

    let largestPalindrome = 0;

    for( let i = 1; i < palindromes.length; i++ ) {

        if( palindromes[i].length > palindromes[largestPalindrome].length ) {
            isLongest = false;
            largestPalindrome = i;
        }
    }
    
    if(isLongest) {
        return palindromes[largestPalindrome];
    }

}

console.log(longestPalindrome("Civicx"));
console.log(longestPalindrome("Google"));
console.log(longestPalindrome("xyZyXq"));