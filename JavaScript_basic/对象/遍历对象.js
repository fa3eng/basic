// for in


function Demo(name, age) {
    
    this.name = name;
    this.age = age;

}

let test = new Demo('meakle', 12);

for (let key in test) {
    
    console.log(key);
    console.log(test[key]);

}



