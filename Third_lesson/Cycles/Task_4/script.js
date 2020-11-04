var n = prompt('Введите целое число', '0');
var res = 1;

for (var i = 1; i <= n; i++) {

    res = i * res;
    console.log(res);
    break;
}