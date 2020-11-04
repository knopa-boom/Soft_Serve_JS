var a = prompt('Введите первое целое число', '');
var b = prompt('Введите второе целое число', '');;
var res;

for (var i = 0; a < b; i++) {
    res = Number(a) + Number(b);
    console.log(res);
    break;
}