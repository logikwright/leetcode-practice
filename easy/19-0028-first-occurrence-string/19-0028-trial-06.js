function findFirstOccurrence(haystack, needle) {

    for(let i = 0; i <= haystack.length - needle.length; i++){
        
        if(haystack[i] !== needle[0]) {
            continue;
        } 

        let foundIt = true;

        for(let j = needle.length - 1; j >= 0; j--) {
            if(haystack[i+j] !== needle[j]) {
                foundIt = false;
                break;
            }
        }
        
        if(foundIt) {
            return i;
        }
    }

    return -1;

}

console.log(findFirstOccurrence("leetcode", "leeto"));
console.log(findFirstOccurrence("sadbutsad", "sad"));
console.log(findFirstOccurrence("leetcodeleeto", "leeto"));
