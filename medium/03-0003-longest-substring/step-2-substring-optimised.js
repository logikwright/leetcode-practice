function lengthOfLongestSubstring(s) {
    let inputArr = s.split("");

    let contigiousSubstring = [];

    let i = 0;

    while(i < inputArr.length) {

        // console.log(`value of inputArr i ${i} is ${inputArr[i]}`);
        let tempArr = [];

        tempArr.push(inputArr[i]);

        for(let j = i+1; j<inputArr.length; j++) {

            let isDifferent1 = true;
            if(inputArr[i] === inputArr[j]) {
               isDifferent1 = false; 
            }

            let isDifferent2 = true;
            for(let k = 0; k < tempArr.length; k++ ) {
                if(tempArr[k] === inputArr[j]) {
                    isDifferent2 = false;
                }
            }

            if( isDifferent1 && isDifferent2) {
                tempArr.push(inputArr[j])
            }

        }
        contigiousSubstring.push(tempArr);
        i++;
    }

    return contigiousSubstring;
} 

console.log(lengthOfLongestSubstring("abcabcbb"));