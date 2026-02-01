function twoSum(inputArr , target) {

    let result = [];

    let sum = 0;

    for( let i = 0; i < inputArr.length; i++ ) {
        sum = inputArr[i] + inputArr[i + 1];

        if(sum === target) {
            result.push(i);
            result.push(i+1);
        }
    }

    console.log(inputArr);
    return result;
}

console.log(twoSum([1, 5, 6, 9], 15));