function majorityElement(nums) {
    let count = 0;
    let candidate = null;

    for(let num of nums) {
    
        if(count === 0) {
            candidate = num;
        }

        if(candidate !== num) {
            count--;
        } else {
            count++;
        }
    }
    
    return candidate;
}

console.log(majorityElement([2,2,1,1,1,2,2]));
console.log(majorityElement([2,2,1,3,4,2,2]));
console.log(majorityElement([2,3,3,3,2]));
