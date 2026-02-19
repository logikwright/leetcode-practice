function removeDuplicates(sums) {
    for(let i = 0; i < sums.length; i++) {

        for(let j = i+1; j < sums.length; j++) {
            if(sums[i] == sums[j]){
                sums.splice(i, 1);
            }
        }
    }
    return sums;
}


console.log(removeDuplicates([1, 2, 3, 3, 3, 5, 5, 5, 6, 7, 7, 7]));