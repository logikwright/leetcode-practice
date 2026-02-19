function removeDuplicates(sums) {
    let i = 0;

    while(i < sums.length) {
        let isSame = 0;

        for( let j = 1; j < sums.length; j++ ) {
            if(i !== j) {
                isSame = j;
            }
        // console.log(j);
        }

        sums.splice(i, isSame);

        i++;
        console.log(i);
    }

    return sums;
}

console.log(removeDuplicates([1, 2, 2, 2, 3, 4, 4, 4]));