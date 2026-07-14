function validAnagram(s,t) {
    let tempArr = [];

    for(let i = 0; i < t.length; i++) {
        for(let j = 0; j < s.length; j++) {
            for(let k = 0; k < tempArr.length; k++){
                if(i === tempArr[k]) {
                    break;
                }
            }
            if(t[i] === s[j]) {
                tempArr.push(j);
            }
        }
    }

    if(tempArr.length === s.length) {
        return true;
    } else {
        return false;
    }

}

console.log(validAnagram("anagram", "nagaram"));
