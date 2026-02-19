function reverseString(string) {

    let tempArr = string.toLowerCase().split("");

    let reversedArr = [];

    for( let i = tempArr.length - 1; i >= 0; i-- ) {
        // console.log(i);

        reversedArr.push(tempArr[i]);
    }

    return reversedArr.join("");
}

// console.log(reverseString("Babad"));


export { reverseString }