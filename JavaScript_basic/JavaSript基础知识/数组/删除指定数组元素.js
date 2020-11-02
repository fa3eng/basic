
let arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
let newArr = new Array;

for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] == 0) {
        continue;
    }

    newArr[newArr.length] = arr[i];

}


console.log(newArr);

 
