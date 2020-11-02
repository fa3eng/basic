
let arr = ['red', 'green', 'blue', 'pink', 'purple'];
let newArr = new Array;

for (let i = arr.length - 1; i >= 0; i--){

    newArr[newArr.length] = arr[i];

}

console.log(newArr);