function digitN(k, n) {
    for (var i = 0; i < n - 1; i++) {
        k = k / 10;
        console.log(k)
    }

    if (parseInt(k) == 0) {
        return -1;
    } else return parseInt(k % 10);


}
var res = digitN(1845, 9); // ждем ответ 8
console.log(res);