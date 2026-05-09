function majorityElement(nums) {
    let count = 1;
    let candidate = nums[0];

    for(let i=1; i<nums.length; i++) {

        if( count > 0) {

            if( candidate === nums[i]) {
                count++;
            } else {
                count--;
            }

        } else {
            candidate = nums[i];
            count = 1;
        }

        console.log(`This is current candidate : ${candidate}`);

    }
    
    return candidate;
}

console.log(majorityElement([2,2,1,1,1,2,2]));
console.log(majorityElement([2,2,1,3,4,2,2]));
console.log(majorityElement([2,3,3,3,2]));
