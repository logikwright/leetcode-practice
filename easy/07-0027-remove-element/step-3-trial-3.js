function removeElements(nums, val) {
    let k = 0;
    for(let read = 1; read < nums.length; read++ ) {

        if(nums[read - 1] !== val) {
            k++;
        } else {
            for( j = read; j < nums.length; j++ ) {
                if(nums[read - 1] !== nums[j]) {
                    nums[read - 1] = nums[j];
                    break;
                }
            }
        }
    } 

    console.log(nums);
    return k;
}

console.log(removeElements([3,2,2,3], 3));
console.log(removeElements([0,1,2,2,3,0,4,2], 2));