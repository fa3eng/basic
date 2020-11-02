

function getSum() {
    
    let max = arguments[0];

    for (let i = 1; i < arguments.length; i++){

        if (arguments[i] > max) {
            max = arguments[i];
        }

    }

    return max;

}

let max = getSum(1, 2, 3, 99, 1, 23);
console.log(max);