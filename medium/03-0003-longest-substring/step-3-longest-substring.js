function lengthOfLongestSubstring(s) {
    let inputArr = s.split("");

    let contigiousSubStrings = [];

    let i = 0;

    while(i < inputArr.length) {

        let tempArr = [];

        tempArr.push(inputArr[i]);

        for( let j = i+1; j < inputArr.length; j++ ) {

            let isDifferent = true;
            for( let k = 0; k < tempArr.length; k++ ) {
                if(tempArr[k] === inputArr[j]) {
                    isDifferent = false;
                    break;
                }
            }
            
            if( isDifferent ) {
                tempArr.push(inputArr[j]);
            } else {
                break;
            }
        }
        
        contigiousSubStrings.push(tempArr);
        i++;
    }

    let isLongest = 0;

    for(let i = 1; i < contigiousSubStrings.length; i++) {
        if(contigiousSubStrings[i].length > contigiousSubStrings[isLongest].length) {
            isLongest = i;
        }
    }
    console.log(contigiousSubStrings);

    return contigiousSubStrings[isLongest].length;
}

// console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("pwwkew"));