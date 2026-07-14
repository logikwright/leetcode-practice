function validAnagram(s,t) {
    let testLength = t.length;

    for (let i = 0; i < t.length; i++) {
        for (let j = 0; j < s.length; j++) {
            console.log(`for tChar:${t[i]} and sChar: ${s[j]}`);
            
            console.log(testLength)

            if ( t[i] === s[j]) {
                testLength--;
            }

            if (testLength === 0){
                return true;
            }

            console.log(testLength)
        }
    }


    return false;
}

console.log(validAnagram("rat", "car"));
console.log(validAnagram("anagram", "nagaram"));
