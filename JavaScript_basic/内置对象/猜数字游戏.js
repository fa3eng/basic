

function getRandom() {
    
    let random = Math.round(((Math.random())* 10));

    return random;

}

let randnum = getRandom();

while (1) {

    let num = prompt('来，猜数字') - 0;
    
    if (num > randnum) {
        alert('大了');
    } else if (num < randnum) {
        alert('小了');
    } else {
        alert('对了');
        break;
    }

}

