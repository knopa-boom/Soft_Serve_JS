// var a = prompt('Введите целое положительное число', '');

// a = String(a);


// var res = a % 2 !== 0 && a.length === 3;
// console.log(res);




//исправленное

var a = prompt('Введите целое положительное число', '');

var res = a % 2 == 1 && a < 1000 && a > 99;
console.log(res);