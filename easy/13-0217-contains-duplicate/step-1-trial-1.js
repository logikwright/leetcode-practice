function catchDuplicate(nums) {
    let i = 0;

    while(i < nums.length) {
        let candidate = nums[i];
        let duplicateCandidate = 0;

        for(let num of nums) {
            if(num === candidate) {
                duplicateCandidate++;
            }
        }

        if(duplicateCandidate === 2){
            return true;
        }

        i++;
    }

    return false;
}

console.log(catchDuplicate([1,2,2]));
console.log(catchDuplicate([1,2,3,4]));
console.log(catchDuplicate([1,2,3,1]));