function sumIndices(sums, target) {

    for(let i = 0; i < sums.length; i++ ) {

        for(let j = i+1; j < sums.length; j++ ) {

            let total = sums[i] + sums[j];

            if(total === target) {
                return [i, j];
            }
        }
    }

}

console.log(sumIndices([1, 5, 6, 9], 15));