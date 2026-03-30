function findThat(nums) {
    let i = 0;

    while(i < nums.length) {
        let candidate = nums[i];
        let sum = 0;

        for( let j = 0; j < nums.length; j++) {
            if(nums[j] === candidate) {
                sum++;
            }
        }

        if(sum === 1) {
            return candidate;
        }

        i++;
    }
}

console.log(findThat([4, 1, 2, 1, 2]));
console.log(findThat([1]));
console.log(findThat([1,2,2,2]));