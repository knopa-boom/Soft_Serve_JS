function getSalaries(object) {

    var maxSalary = 0;

    for (var key in object) {
        if (object[key] > maxSalary) {
            maxSalary = object[key];
        }
    }

    return maxSalary;
}

function returnSalariesObject() {
    return {
        Cris: 150,
        Brain: 600,
        John: 300,
        Steve: 400,
        Bill: 50
    };

}

var salaries = returnSalariesObject();
console.log(salaries);

var res = getSalaries(salaries);
console.log('Максимальная зарплата: ' + res);