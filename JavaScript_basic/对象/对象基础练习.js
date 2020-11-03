

let dog = {

    name: 'keke',
    type: '阿拉斯加犬',
    age: '5',
    color: 'red',
    
    brak: function () {
        console.log('wangwangwang');
    },

    showFilm: function () {
        console.log('move');
    },

}

console.log(dog['name']);
console.log(dog.type);
console.log(dog['age']);
console.log(dog.color);

dog.brak();
dog.showFilm();