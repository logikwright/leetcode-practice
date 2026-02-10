function isPalindrome(x) {
    let tempStr = x.toString();

    let numIsPalindrome = true;

    let i = 0;
    let j = tempStr.length - 1;

    while(i < tempStr.length/2) {
        console.log(tempStr[i]);
        console.log(tempStr[j]);

        if( tempStr[i] !== tempStr[j] ) {
            numIsPalindrome = false;
            break;
        }

        i++;
        j--;
    }

    return numIsPalindrome;
}

// console.log(isPalindrome(121))
// console.log(isPalindrome(-121))
console.log(isPalindrome(12345654321))

console.log(isPalindrome(12345634321))