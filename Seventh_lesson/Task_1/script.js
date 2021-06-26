'use strict;'

var calculator = {
    a: 0,
    b: 0,

    read: function() {
        this.a = prompt('Введите первое значение', '1');
        this.b = prompt('Введите второе значение', '1');
    },

    sum: function() {
        return Number(this.a) + Number(this.b);
    },

    mul: function() {
        return this.a * this.b;
    }
}

console.log(calculator.sum());
calculator.read();
console.log(calculator.mul());