// var num;

// var leftNum;
// var rightNum;
// var division;
// var modulDevision;


// var x = prompt('Введите число от 1 до 9', '');
// leftNum = x;
// console.log('Левое число: '+ leftNum);
// division = leftNum / 2;
// console.log('Результат деления нацело: ' + division);

// var y = prompt('Введите число от 1 до 9', '');
// rightNum = y;
// console.log('Правое число: ' + rightNum);
// modulDevision = rightNum % 3; 
// console.log('Результат деления по модулю: ' + modulDevision);


// var str1 = String(leftNum);
// var str2 = String(rightNum);

// num = Number(str1 + str2);
// console.log('Двузначное число: ' + num);



//исправленное

var num = prompt('Введите двузначное целое число', '');
var x = Number(parseInt(num / 10));
console.log('Левое число', x);

var y = Number(num % 10);
console.log('Правое число', y);