function catchThat(nums) {
    const trapObject = {};

    for( let num of nums ) {
        if(trapObject[num] !== undefined){
            return true;
        }

        trapObject[num] = true;
    }

    return false;
}

console.log(catchDuplicate([1,2,2]));
console.log(catchDuplicate([1,2,3,4]));
console.log(catchDuplicate([1,2,3,1]));