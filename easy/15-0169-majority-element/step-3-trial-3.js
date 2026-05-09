function majorityElement(nums) {
    let count;
    let candidate = nums[0];

    for(let i=0; i<nums.length; i++) {
        if(count > 0) {
            if(nums[i] === candidate) {
                count++;
            } else {
                count--;
            }
        } else if(count === 0) {
                candidate = nums[i+1];
        } else {
                return nums[i];
        }
    }

}

console.log(majorityElement([2,2,1,1,1,2,2]));
console.log(majorityElement([2,2,1,3,4,2,2]));
console.log(majorityElement([2,3,3,3,2]));
