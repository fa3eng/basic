let calculator = {

    read() {
        this.a = +prompt('第一个值');
        this.b = +prompt('第二个值');
    },

    sum(a, b) {
        return this.a + this.b;
    },

    mul(a, b) {
        return this.a * this.b;
    }
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());