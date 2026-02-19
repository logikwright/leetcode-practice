function longestCommonPrefix(strs) {

    let minLen = 0;
    for(let i = 0; i < strs.length; i++) {
        if(strs[i].length < strs[minLen].length) {
            minLen = i;
        }
    }

    let maxCharCheck = strs[minLen].length;

    let i = 0;
    let commonPrefix = [];

    while( i < maxCharCheck ) {

        for( let j = 0; j < strs.length; j++ ) {
            if(strs[0][i] !== strs[j][i]) {
                return commonPrefix.join("");
            }
        }

        commonPrefix.push(strs[0][i]);
        i++;
    }

    return commonPrefix.join("");
}

console.log(longestCommonPrefix(["flower", "flour", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "race", "car"]));