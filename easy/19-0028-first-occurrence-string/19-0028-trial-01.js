function findFirstOccurrence(haystack, needle) {
    let firstOccurrence = "";

    for(let i = 0; i < haystack.length; i++) {
        if(haystack[0] === needle[0]){
            firstOccurrence = i;
            break;
        }
    }

    let lengthCheck = firstOccurrence + (needle.length-1);
    
    for(let j = lengthCheck; j >= firstOccurrence; j--){
        if(haystack[j] !== needle[j]) {
            return "-1";
        }
    }

    return firstOccurrence;
}

console.log(findFirstOccurrence("leetcode", "leeto"));
console.log(findFirstOccurrence("sadbutsad", "sad"));
