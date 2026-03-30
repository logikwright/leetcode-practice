function majorityElement(nums) {
    let n = nums.length;
    let maxCountCondition = Math.ceil(n/2);
    
    let i = 0;

    while(i < n) {
        let count = 0;

        for(let j = 0; j < n; j++) {

            if(nums[i] === nums[j]) {
                count++;
            }

        }

        if(count >= maxCountCondition) {
            return nums[i];
        }

        i++;
    }
}

console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))