



function demo(arr) {
    
    let newArr = new Array();

    newArr.push(arr[0]);


    for (let i = 1; i < arr.length; i++) {

        tmp_obj[i] = true;

        if (newArr.indexOf(arr[i]) != -1) {
            continue;
        }

        newArr.push(arr[i]);

    }

}

let arr = [1, 2, 3, 3, 3, 4, 5, 5];

console.log(demo(arr));