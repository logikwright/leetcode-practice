function searchInsert(nums, target) {
    let r = nums.length -1;
    let l = 0;

    while(l <= r) {
        const M = Math.floor((l+r)/2);

        if( nums[M] === target ) {
            return M;
        } else if ( nums[M] > target ) {
            r = M - 1;
        } else {
            l = M + 1;
        }
    }

    return l;
}

console.log(searchInsert([1,3,5,6], 5));