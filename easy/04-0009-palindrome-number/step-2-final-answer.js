function isPalindrome(x) {
    if(x < 0) return false;

    let tempStr = x.toString();

    let i = 0;
    let j = tempStr.length-1;

    while(i < j) {

        if(tempStr[i] !== tempStr[j]) {
            return false;
        }

        i++;
        j--;
    }

    return true;
}
console.log(isPalindrome(12345654321))

console.log(isPalindrome(10))