'use strict';

function GeometricFigure(x, y) {
    if (this._valueValidator(x)) {
        this.__x = x;
    } else {
        this.__x = 0;
    }

    if (this._valueValidator(y)) {
        this.__y = y;
    } else {
        this.__y = 0;
    }
}

GeometricFigure.prototype.getX = function() {
    return this.__x;
}

GeometricFigure.prototype.setX = function(value) {
    if (this._valueValidator(value)) {
        this.__x = value;
    }
}

GeometricFigure.prototype.getY = function() {
    return this.__y;
}

GeometricFigure.prototype.setY = function(value) {
    if (this._valueValidator(value)) {
        this.__y = value;
    }
}

GeometricFigure.prototype._valueValidator = function(val) {
    if (typeof val === 'number' && !isNaN(val)) {
        return true;
    } else {
        return false;
    }
}


var figure = new GeometricFigure(8, 9);
console.log(figure.getX());

figure.setX(12);
console.log(figure.getX());


// Rectangle

function Rectangle(x, y, l) {
    GeometricFigure.call(this, x, y);

    if (this._valueValidator(l)) {
        this.__l = l;
    } else {
        this.__l = 0;
    }
}

Rectangle.prototype = Object.create(GeometricFigure.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.info = function() {
    console.log("Длина прямоугольника: " + this.__l);
}

var rectangle = new Rectangle(2, 4, '25');
rectangle.info();


// Circle

function Circle(x, y, r) {
    GeometricFigure.call(this, x, y);

    if (this._valueValidator(r)) {
        this.__r = r;
    } else {
        this.__r = 0;
    }
}

Circle.prototype = Object.create(GeometricFigure.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.info = function() {
    console.log('Радиус круга: ' + this.__r);
}

var circle = new Circle(9, 3, 18);
circle.info();