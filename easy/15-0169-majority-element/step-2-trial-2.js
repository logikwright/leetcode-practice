function majorityElement(nums) {
    let n = nums.length;
    let majorityCondition = Math.ceil(n/2);

    for(let i=0; i<n; i++) {
        let count = 1;
        for(let j=0; j<n;j++) {
            if( nums[i] === nums[j]) {
                count++;
            }
        }
        
        if( count >= majorityCondition) {
            return nums[i];
        }
    }
}

console.log(majorityElement([2,2,1,1,1,2,2]));
console.log(majorityElement([2,3,2]));
