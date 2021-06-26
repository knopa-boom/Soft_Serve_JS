'use strict';

class GeometricFigure {
    constructor(x, y) {
        if (GeometricFigure.valueValidator(x)) {
            this.__x = x;
        } else {
            this.__x = 0;
        }

        if (GeometricFigure.valueValidator(y)) {
            this.__y = y;
        } else {
            this.__y = 0;
        }
    }

    get x() {
        return this.__x;
    }

    set x(value) {
        if (GeometricFigure.valueValidator(value)) {
            this.__x = value;
        }
    }

    get y() {
        return this.__y;
    }

    set y(value) {
        if (GeometricFigure.valueValidator(value)) {
            this.__y = value;
        }
    }

    static valueValidator(value) {
        if (typeof value === 'number' && !isNaN(value)) {
            return true;
        } else {
            return false;
        }
    }
}

class Rectangle extends GeometricFigure {
    constructor(x, y) {
        super(x, y);

        this.__l = 12;
    }

    info() {
        console.log("Длина прямоугольника: " + this.__l);
    }
}

class Circle extends GeometricFigure {
    constructor(x, y) {
        super(x, y);

        this.__r = 20;
    }

    info() {
        console.log('Радиус круга: ' + this.__r);
    }
}

const geomFigure = new GeometricFigure(8, 9);
const rect = new Rectangle();
const circle = new Circle();