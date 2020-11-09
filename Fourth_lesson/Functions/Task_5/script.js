function digitN(k, n) {
    for (var i = 0; i < n - 1; i++) {

        k = k / 10;
    }

    return parseInt(k % 10);
}
var res = digitN(1845, 3); // ждем ответ 8
console.log(res);
