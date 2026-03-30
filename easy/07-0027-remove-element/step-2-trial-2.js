function removeElements(nums, val) {
    let k = 0;

    for(let read = 1; read < nums.length; read++ ) {
        if( nums[read - 1] !== val ) {
            k++;
        } else {
            nums[read - 1] = nums[read];
        }
    }
    console.log(nums);
    return k;
}

console.log(removeElements([3, 2, 2, 3], 3));