let choose = prompt(`简易计算器：
1. 加法运算
2. 减法运算
3. 乘法运算
4. 除法运算
5. 退出
请输入宁的选项`);

if (choose == 1) {
    alert(sum());
} else if (choose == 2) {
    alert(subtract());
} else if (choose == 3) {
    alert(muti());
} else if (choose == 4) {
    alert(divide());
} else {

}


function getNum() {
    let num1 = Number(prompt('输入数值'));
    let num2 = Number(prompt('输入数值'));
    let num = [num1, num2];
    return num;
}

function sum() {
    let num = getNum();
    return (num[0] + num[1]);
}

function subtract() {
    let num = getNum();
    return (num[1] - num[0]);
}

function muti() {
    let num = getNum();
    return (num[1] * num[0]);
}

function divide() {
    let num = getNum();
    return (num[1] / num[2]);
}