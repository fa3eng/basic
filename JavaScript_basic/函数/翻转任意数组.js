

function reversArr(arr) {
    
    let newArr = new Array;

    for (let i = arr.length - 1; i >= 0 ; i--) {

        newArr[newArr.length] = arr[i];

    }

    return newArr;
}


console.log(reversArr([1, 2, 3, 4]));