// 实现反转任意数组


function reversArr(Arr) {
    
    let newArr = new Array;
    
    for (let i = Arr.length - 1; i >= 0; i--){

        newArr[newArr.length] = Arr[i];

    }

    return newArr;

}

let arr = new Array;
arr = [1, 2, 3, 4, 23, 211, 1, 3];

console.log(reversArr(arr));


//实现对数组排序

function sortArr(arr) {
    
    for (let i = 0; i < arr.length; i++){

        for (let j = i + 1; j < arr.length; j++){

            if (arr[i] > arr[j])
            {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }

        }
    }

    return arr;

}

console.log(sortArr(arr));