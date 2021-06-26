function Sum(firstNumber, secondNumber) {
    if (this.__numberValidator(firstNumber)) {
        this.__firstNumber = firstNumber;
    } else {
        this.__firstNumber = 0;
    }

    if (this.__numberValidator(secondNumber)) {
        this.__secondNumber = secondNumber;
    } else {
        this.__secondNumber = 0;
    }

    this.res = 0;

    this.__calc();
}

Sum.prototype.getFirstNumber = function() {
    return this.__firstNumber;
}

Sum.prototype.setFirstNumber = function(value) {
    if (this.__numberValidator(value)) {
        this.__firstNumber = value;
        this.__calc();
    }
}

Sum.prototype.getSecondtNumber = function() {
    return this.__secondNumber;
}

Sum.prototype.setSecondNumber = function(value) {
    if (this.__numberValidator(value)) {
        this.__secondNumber = value;
        this.__calc();
    }
}

Sum.prototype.__calc = function() {
    this.res = this.__firstNumber + this.__secondNumber;
}

Sum.prototype.__numberValidator = function(value) {
    if (typeof value === 'number' && !isNaN(value)) {
        return true;
    } else {
        return false;
    }
}

var sum = new Sum(4, 2);
console.log(sum.res)

sum.setFirstNumber(2);
sum.setSecondNumber(5);
console.log(sum.res)