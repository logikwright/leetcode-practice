function containDuplicates(nums, k) {
    let i=0;

    while(i<nums.length) { 
        let candidate = nums[i];
            console.log(`value of i : ${i}`);
        
        for(let j=1; j<=k; j++){
            console.log(`value of j : ${j}`);

            if(candidate === nums[j]) {

                if(Math.abs(i-j) <= k){
                    return true;
                }
            }
        }

        i++;
    }

    return false;
}

console.log(containDuplicates([1,2,3,1,2,3], 2));
console.log(containDuplicates([1,2,3,1], 3));
console.log(containDuplicates([1,0,1,1], 1));
