function removeElement(nums, val) {
    let k = 0;

    for( let read = 1; read < nums.length; read++ ){
        if(nums[read - 1] !== val) {
            k++;
        } else {
            for(let write = read; write < nums.length; write++ ) {
                if( nums[read - 1] !== nums[write] ) {
                    nums[read - 1] = nums[write];
                    break;
                }
            }
        }
    }
    console.log(nums);
    return k;
}

console.log(removeElement([0,1,2,2,3,0,4,2], 2));