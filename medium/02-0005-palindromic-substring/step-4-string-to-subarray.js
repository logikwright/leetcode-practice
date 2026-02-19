
function sliceArray(inputArr){

    let temp = [];

    for( let i = 0; i < inputArr.length; i++ ) {

        let u = inputArr.slice(i);

        temp.push(u);
    }

    return temp;
}

// console.log(sliceArray(["b", "a", "b", "a", "d"]));

// console.log(sliceArray("babad"));

export{ sliceArray };