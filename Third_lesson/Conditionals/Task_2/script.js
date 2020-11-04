var num = prompt('Введите целое число','');

if (num == 0) {
	console.log('нулевое число');
} else if (num > 0 && num % 2 == 0) {
	console.log('положительное четное число');
} else if (num > 0 && num % 2 != 0) {
	console.log('положительное нечетное число');
} else if (num < 0 && num % 2 != 0) {
	console.log('отрицательное нечетное число');
} else {
	console.log('отрицательное четное число');
};