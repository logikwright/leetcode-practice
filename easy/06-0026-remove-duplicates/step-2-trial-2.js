function removeDuplicates(sums) {
    let i = 0;

    while( i < sums.length ) {
        let isSame = 0;

        for( let j = i+1; j < sums.length; j++ ) {
            // console.log(j);

            if( i == j) {
                isSame = j;
            }
        }

        // console.log(i);
        // console.log(isSame);
        console.log(sums.length);
        sums.splice(i, isSame);
        console.log(sums.length);

        i++;
    }
    return sums;
}

console.log(removeDuplicates([1, 2, 2, 3]));