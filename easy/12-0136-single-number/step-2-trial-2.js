function findThat(nums){
    let i = 0;
    let frequency = {};

    while(i < nums.length) {
        let sum = 0;
        let candidate = nums[i];

        for(let j = 0; j<nums.length; j++) {
            if(nums[j] === candidate) {
                sum++
            }
        }

        frequency[candidate] = sum;
        i++;
    }

    return frequency;
}

console.log(findThat([4,1,2,1,2]));