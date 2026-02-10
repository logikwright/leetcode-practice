function lengthOfLongestSubstring(s) {
    let inputArr = s.split("");

    let contigiousSubStrings = [];

    let i = 0;

    while( i < inputArr.length) {

        let tempArr = [];
        tempArr.push(inputArr[i]);

        for(j = i+1; j < inputArr.length; j++ ) {

            if( inputArr[i] === inputArr[j] ) {
                break;
            } else {
                tempArr.push(inputArr[j]);
            }
        }

        contigiousSubStrings.push(tempArr);
        i++;
    }
    return contigiousSubStrings;
}

console.log(lengthOfLongestSubstring("abcabcbb"));