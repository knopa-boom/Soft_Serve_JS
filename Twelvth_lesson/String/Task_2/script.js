'use strict';

function enterStr(str) {
    let arrStr = [];
    let arrStr2 = arrStr;


    while (true) {
        str = prompt('Введите строки', '');

        if (str === 'end') {
            break
        } else {
            arrStr.push(str);
        }
    }

    for (let i = 0; i < arrStr2.length; i++) {
        for (let j = 0; j < arrStr2[i].length; j++) {
            if (isNaN(arrStr2[i][j])) {
                // добавлем строку 'Numbers' в массив 

            } else {
                // добавлем строку 'No numbers' в массив

            }
        }
    }

    return arrStr2;

}

let res = enterStr();
console.log(res);