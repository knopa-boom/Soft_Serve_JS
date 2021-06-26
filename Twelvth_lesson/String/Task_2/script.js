'use strict';

function enterStr(str) {
    let arrStr = [];
    let arrStr2 = arrStr;

    console.log(arrStr2)

    while (true) {
        str = prompt('Введите строки', '');

        if (str.toLowerCase()) === 'end') {
        break
    } else {
        arrStr.push(str);
    }
}


arrStr2.forEach((str) => {
    //через регулярные выражения
    // const regExp = /[0-9]/;
    // if (regExp.test(string)) {
    //     console.log(`Numbers: ${str}`);
    // } else {
    //     console.log(`No numbers: ${str}`);
    // }


    // через циклы 
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
            console.log(`Numbers: ${str}`);
            return;
        }
    };

    console.log(`No numbers: ${str}`);
});


let res = enterStr();
console.log(res);

// ---------------------------------------------------