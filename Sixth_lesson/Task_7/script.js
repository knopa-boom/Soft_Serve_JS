var salaries = {
    Cris: 150,
    Brain: 600,
    John: 300,
    Steve: 400,
    Bill: 50,
}

function calc(obj) {
    var sum = 0;
    var middle = 0;
    var count = 0;

    for (var key in obj) {
        sum += salaries[key];
        count++;

        middle = sum / count;
    }

    return middle;
}

var res = calc(salaries);
console.log(res);
