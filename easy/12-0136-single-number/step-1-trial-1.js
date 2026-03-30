function findThat(nums) {
    const frequency = {};

    let sum = 1;
    let i = 0;

    while(i < nums.length) {
        let candidate = nums[i];
        sum = 1;

        for(let j = i+1; j < nums.length; j++) {
            if(candidate === nums[j]) {
                sum++;
            }
        }

        frequency[candidate] = sum;
        i++;
    }
    
    
    return frequency;
}

console.log(findThat([1,2,2]));