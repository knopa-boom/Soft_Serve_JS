
var num = prompt('Введите целое число', '0');

if (num > 0) {
	num = 1 + Number(num);
	console.log (num);
} else if (num < 0) {
	num -= 2;
	console.log (num);
} else {
	num = 10;
	console.log (num);
}


