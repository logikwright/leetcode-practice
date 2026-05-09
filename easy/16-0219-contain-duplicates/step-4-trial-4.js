function containDuplicates(nums, k) {
    let previousIndex = 0;
    let i=1;

    while(i<nums.length) { 
            console.log(`value of i : ${i}`);

        if(nums[previousIndex] === nums[i]) {
            if(i-previousIndex <= k) {
                return true;
            }
        }
        
        previousIndex = i;

        i++;
    }

    return false;
}

console.log(containDuplicates([1,2,3,1,2,3], 2));
console.log(containDuplicates([1,2,3,1], 3));
console.log(containDuplicates([1,0,1,1], 1));
