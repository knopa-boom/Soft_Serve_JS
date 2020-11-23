function mul() {

    var mulNumbers = 1;
    var counter = 0;

    for (var i = 0; i < arguments.length; i++) {

        if (typeof(arguments[i]) == 'number') {
            mulNumbers *= arguments[i];
            counter++;
        }
    }

    if (counter == 0) { // если в counter = 0 , то все аргументы - не числа, и возвращаем 0
        mulNumbers = 0;
    }

    return mulNumbers;
}

console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0