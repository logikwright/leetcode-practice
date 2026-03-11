function pascalTriangle(numRows) {
    let multiArray = [[1],[1,1]];

    if(numRows === 1) {
        multiArray.pop();
        return multiArray;
    } else if(numRows === 2) {
        return multiArray;
    } else {
        multiArray.length = numRows;

        for(let i=2; i<multiArray.length; i++) {
            let len = i+1;
            multiArray[i] = new Array(len);
            multiArray[i][0] = 1;
            multiArray[i][len-1] = 1;

            for(let j=1; j<multiArray[i].length-1; j++) {
                multiArray[i][j] = multiArray[i-1][j] + multiArray[i-1][j-1];
            }
        }
        return multiArray;
    }
}

console.log(pascalTriangle(5));
console.log(pascalTriangle(2));
console.log(pascalTriangle(1));