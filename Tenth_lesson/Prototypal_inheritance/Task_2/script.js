function Square(a, b) {
    if (this._numberValidator(a)) {
        this._a = a;
    } else {
        this._a = 0;
    }

    if (this._numberValidator(b)) {
        this._b = b;
    } else {
        this._b = 0;
    }

    this.res = 0;
    this.calcPerimeter();

}

Square.prototype.getSideA = function() {
    return this._a;
}

Square.prototype.setSideA = function(value) {
    if (this._numberValidator(value)) {
        this._a = value;
    }
}

Square.prototype.getSideB = function() {
    return this._b;
}

Square.prototype.setSideB = function(value) {
    if (this._numberValidator(value)) {
        this._b = value;
    }
}

Square.prototype.calcPerimeter = function() {
    this.res = 2 * (this._a + this._b);
}

Square.prototype._numberValidator = function(value) {
    if (typeof value === 'number' && !isNaN(value)) {
        return true;
    } else {
        return false;
    }
}

var square = new Square(4, 5);
console.log('Периметр квадрата : ' + square.res)



function Cube(a) {
    Square.call(this, a);
}

Cube.prototype = Object.create(Square.prototype);
Cube.prototype.constructor = Cube;

// 1 способ
Cube.prototype.calcPerimeter = function() {
    this.res = 12 * this._a;
}

// 2 способ
Cube.prototype.calcPerimeter = function() {
    Square.prototype.calcPerimeter.call(this);
    this.res *= 6;
}


var cube = new Cube(8);

cube.setSideA(6);
cube.calcPerimeter();
console.log('Периметр куба: ' + cube.res);