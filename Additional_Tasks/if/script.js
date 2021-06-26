// 1

var num = -4;

if (num > 0) {
    num++
}


// 2

var num1 = 1;
var num2 = 4;
var num3 = -5;

var resPlus = 0;
var resMinus = 0;

if (num1 > 0) {
    resPlus += num1;
}

if (num1 < 0) {
    resMinus += num1;
}

if (num2 > 0) {
    resPlus += num2;
}

if (num2 < 0) {
    resMinus += num2;
}

if (num3 > 0) {
    resPlus += num3;
}

if (num3 < 0) {
    resMinus += num3;
}


// 8

var a = 5;
var b = 18;

if (a > b) {
    console.log('Большее число ' + a);
} else {
    console.log('Большее число ' + b);
    console.log('Меньшее число ' + a);
}

/**
 * 9
 * Даны две переменные вещественного типа: A, B. Перераспределить значе-
ния данных переменных так, чтобы в A оказалось меньшее из значений, а в B — большее. Вывести новые значения переменных A и B.
 */

var numberA = 18.5;
var numberB = 3;

if (numberA > numberB) {
    numberA = numberA + numberB; // 15
    numberB = numberA - numberB; // 12
    numberA = numberA - numberB; // 15 - 9 = 6
}

console.log(numberA, numberB)