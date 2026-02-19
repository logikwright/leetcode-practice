function longestCommonPrefix(strs) {

    let minimumLength = 0;
    for(let i = 1; i < strs.length; i++) {
        if(strs[i].length < strs[minimumLength].length) {
            minimumLength = i;
        }
    }
    
    let maxLenCheck = strs[minimumLength].length;

    let i = 0;

    let commonPrefix = [];

    while(i < strs.length) {

        let isSimilar = true;

        for( let j = 1; j < maxLenCheck; j++ ) {

            if( strs[0][i] !== strs[j][i] ) {
                isSimilar = false;
                break;
            }

        }

        if(isSimilar) {
            commonPrefix.push(strs[0][i]);
        }

        i++;

    }

    if(commonPrefix.length == 0) {
        return `""`;
    } else {
        return commonPrefix.join("");
    }

}

console.log(longestCommonPrefix(["flower", "flour", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "race", "car"]));