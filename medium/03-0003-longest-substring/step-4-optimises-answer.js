function lengthOfLongestSubStrings(s) {
    let inputArr = s.toString();

    let maxLength = 0;

    let i = 0;

    while ( i < inputArr.length) {

        let tempArr = [];
        tempArr.push(inputArr[i]);
        
        for(let j = i+1; j < inputArr.length; j++) {

            let isDifferent = true; 
            for( let k = 0; k < tempArr.length; k++ ) {
                if(tempArr[k] == inputArr[j]) {
                    isDifferent = false;
                }
            }

            if(isDifferent) {
                tempArr.push(inputArr[j]);
            } else {
                break;
            }

        }

        // maxLength = tempArr.length;
        if(tempArr.length > maxLength) {
            maxLength = tempArr.length;
        }

        i++;
    }

    return maxLength;
}

console.log(lengthOfLongestSubStrings("abcabcbb"));