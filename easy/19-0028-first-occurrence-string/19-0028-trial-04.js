function findFirstOccurrence(haystack, needle) {
    let foundIt = undefined;

    for(let i=0; i<haystack.length; i++){
        
        if(haystack[i] !== needle[0]) {
            continue;
        } else {
            foundIt = i;
            for( let j = needle.length-1; j >= 0; j--) {
                if(haystack[i+j] !== needle[j]) {
                    break;
                }
            }
        }
    }

    if (foundIt) {
        return foundIt;
    }else {
        return -1;
    }

}

console.log(findFirstOccurrence("leetcode", "leeto"));
console.log(findFirstOccurrence("sadbutsad", "sad"));
console.log(findFirstOccurrence("leetcodeleeto", "leeto"));
