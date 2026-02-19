function removeDuplicates(nums) {
    let write = 1;

    for( let read = 1; read < nums.length; read++ ) {
        if(nums[read] !== nums[read - 1]) {
            nums[write] = nums[read];
            write++;
        }
    }
    // console.log(nums);
    return write;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 5, 5, 5]));