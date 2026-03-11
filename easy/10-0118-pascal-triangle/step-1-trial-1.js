function pascalTriangle(numOfRow) {
    let baseArray = new Array(numOfRow);
    baseArray[0] = 1;
    baseArray.fill(0,1);

    let multiArray = [];

    for( let i=0; i<numOfRow; i++) {
        multiArray[i] = Array.from(baseArray);
    }

    for(let i=1; i<multiArray.length; i++) {
        for(let j=1; j<multiArray[i].length; j++) {
            multiArray[i][j] = multiArray[i-1][j-1] + multiArray[i-1][j];
        }
    }

    for(let i=0; i<multiArray.length; i++) {
        let index = numOfRow;
        for(let j=multiArray[i].length-1; j>=0; j--) {
            if(multiArray[i][j] === 0) {
                index--;
            }
        }
        multiArray[i].splice(index);
    }
    return multiArray;
}

console.log(pascalTriangle(5));
console.log(pascalTriangle(8));