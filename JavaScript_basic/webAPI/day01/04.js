
let str = `1. 获取事件源
2. 注册事件（绑定事件）
3. 添加事件处理程序（采取函数赋值形式）`

let text = document.getElementById('t');

text.onclick = function (){
    console.log(str);
}



