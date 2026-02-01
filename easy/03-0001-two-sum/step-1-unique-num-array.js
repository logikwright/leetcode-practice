function uniqArray(target) {
    let temp = [];

    function randomNum() {
        return Math.floor(Math.random() * target) + 1;
    }

    while( temp.length < target ) {

        let num = randomNum();

        let isUnique = true;

        for( let i = 0; i < temp.length; i++ ) {
            if(temp[i] === num) {
                isUnique = false;
                break;
            }
        }
        
        if(isUnique) {
            temp.push(num);
        }

    }

    return temp;
}


console.log(uniqArray(4));