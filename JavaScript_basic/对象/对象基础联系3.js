

//定义构造函数
function Hero (name, type, blood, attack){

    this.name = name;
    this.type = type;
    this.blood = blood;
    this.attack = attack;

}

//创建新的对象，创建对象的引用
let lianpo = new Hero('廉颇', '力量', 500, '近战');
let houyi =  new Hero('后羿', '射手', 100, '远程');

console.log(lianpo);
console.log(houyi);