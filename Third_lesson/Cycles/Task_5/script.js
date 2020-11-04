var arr = [];

while (true) {
    var num = prompt('Введите целое число', '0');

    if (num == '' || num == null) {
        break;
    }

    arr.push(num);
    console.log(num);
}

var sum = 0;

for (i = 0; num < length; i++) {
    sum += Number(num[i]);
}

console.log(sum);