//1-й вариант 

// function calc(a, b, op) {
//     if (op == 1) {
//         return a - b;
//     } else if (op == 2) {
//         return a * b;
//     } else if (op == 3) {
//         return a / b;
//     } else {
//         return a + b;
//     }
// }

// var res = calc(2, 3, 2);
// console.log(res);

//2-й вариант 
function calc(a, b, op) {
    switch (op) {
        case 1:
            return a - b;
        case 2:
            return a * b;
        case 3:
            return a / b;
        default:
            return a + b;
    }
}

var res = calc(2, 3, 2);
console.log(res);
