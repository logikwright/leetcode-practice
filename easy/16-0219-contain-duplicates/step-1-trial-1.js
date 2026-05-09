function containDuplicates(nums, k) {
    for(let i=0; i<nums.length; i++) {
        for(let j=nums.length-1; j>=0; j--) {
                console.log(i);
                console.log(j);
            if(nums[i] === nums[j]) {

                let n = Math.abs(i-j);
                if(n <= k) {
                    return true;
                }
            }
        }
    }
}

console.log(containDuplicates([1,2,3,1,2,3], 2));
console.log(containDuplicates([1,2,3,1], 3));
