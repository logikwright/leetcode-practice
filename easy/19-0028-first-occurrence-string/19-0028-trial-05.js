function findFirstOccurrence(haystack, needle) {

    for(let i=0; i<haystack.length; i++){
        
        if(haystack[i] !== needle[0]) {
            continue;
        } else {

            for( let j = needle.length-1; j >= 0; j--) {

                if(j===0) {
                    return i;
                } else if (haystack[i+j] !== needle[j]) {
                    break;
                }
            }

        }

    }
    
return -1;

}

console.log(findFirstOccurrence("leetcode", "leeto"));
console.log(findFirstOccurrence("sadbutsad", "sad"));
console.log(findFirstOccurrence("leetcodeleeto", "leeto"));
