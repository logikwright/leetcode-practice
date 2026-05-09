function containDuplicates(nums, k) {
    let i=0;

    while(i<nums.length) { 
        let candidate = nums[i];
            console.log(`value of i : ${i}`);
        
        for(let j=i+1; j <= Math.min(i+k, nums.length-1); j++){
            console.log(`value of j : ${j}`);

            if(candidate === nums[j]) {

                return true;
            }
        }

        i++;
    }

    return false;
}

console.log(containDuplicates([1,2,3,1,2,3], 2));
console.log(containDuplicates([1,2,3,1], 3));
console.log(containDuplicates([1,0,1,1], 1));
