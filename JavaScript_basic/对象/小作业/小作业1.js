

let computer = {

    color: 'black',
    weight: 12,
    brand: 'apple',
    model: 'mbp',

    movie: function () {
        console.log('movie');
    },

    music: function () {
        console.log('music');  
    },

    gamming: function () {
        console.log('gamming');
    },

    coding: function () {
        console.log('coding');
    },
}


let button = new Object();

button.width = '110px';
button.height = '120px';
button.backgroundColor = 'pink';
button.clickAction = function () {
    console.log('click');
}


function Car (weight, color, plate, manned, cargo, plow) {

    this.weight = weight;
    this.color = color;
    this.plate = plate;
    this.manned = function () {
        console.log(manned);
    }
    this.cargo = function () {
        console.log(cargo);
    }
    this.plow = function () {
        console.log(plow);
    }

}


let audio = new Car(12, 'red', 123313, 'yes', 'yes', 'no');

console.log(button);
console.log(computer);
console.log(audio);