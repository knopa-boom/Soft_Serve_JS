var arr = [];

while (true) {
    var num = prompt('Введите целое число', '0');

    if (num == '' || num == null || isNaN(num)) {
        break;
    }

    arr.push(num);
    console.log(num);
}

var sum = 0;

for (i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
}

console.log(sum);