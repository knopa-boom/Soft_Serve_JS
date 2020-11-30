function Square(a) {
    if (this._numberValidator(a)) {
        this._a = a;
    } else {
        this._a = 0;
    }

    this._res = 0;
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

Square.prototype.getRes = function() {
    return this._res;
}

Square.prototype.calcPerimeter = function() {
    this._res = 4 * this._a;
}

Square.prototype._numberValidator = function(value) {
    if (typeof value === 'number' && !isNaN(value)) {
        return true;
    } else {
        return false;
    }
}




function Cube(a) {
    Square.call(this, a);
}

Cube.prototype = Object.create(Square.prototype);
Cube.prototype.constructor = Cube;

// 1 способ
Cube.prototype.calcPerimeter = function() {
    this._res = 12 * this._a;
}

// 2 способ
Cube.prototype.calcPerimeter = function() {
    Square.prototype.calcPerimeter.call(this);
    this._res *= 6;
}



var square = new Square(4);
console.log('Периметр квадрата : ' + square.getRes());

var cube = new Cube(8);

cube.setSideA(6);
cube.calcPerimeter();
console.log('Периметр куба: ' + cube.getRes());
