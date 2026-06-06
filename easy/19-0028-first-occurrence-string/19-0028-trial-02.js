function findFirstOccurrence(haystack, needle) {
    let firstOccurrence = [];

    for(let i = 0; i < haystack.length; i++) {
        if(haystack[i] === needle[0]){
            firstOccurrence.push(i);
        }
    }
    console.log(firstOccurrence);

    let k = 0;
    
    while(firstOccurrence.length > k) {

        let tempLength = firstOccurrence[k] + (needle.length-1);

        for(let j = tempLength; j >= firstOccurrence[k]; j--){
            if(haystack[j] !== needle[j]) {
                k++;
            }
        }

        return firstOccurrence[k];
    
    }

    return "-1";
}

console.log(findFirstOccurrence("leetcode", "leeto"));
console.log(findFirstOccurrence("sadbutsad", "sad"));
console.log(findFirstOccurrence("leetcodeleeto", "leeto"));
