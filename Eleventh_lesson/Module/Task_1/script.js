// function Rectangle(a, b) {
//     if (this._numberValidator(a)) {
//         this._a = a;
//     } else {
//         this._a = 0;
//     }

//     if (this._numberValidator(b)) {
//         this._b = b;
//     } else {
//         this._b = 0;
//     }

//     this._resP = 0;
//     this._resSq = 0;

// }

// Rectangle.prototype.getA = function() {
//     return this._a;
// }

// Rectangle.prototype.setA = function(value) {
//     if (this._numberValidator(value)) {
//         this._a = value;
//     }
// }

// Rectangle.prototype.getB = function() {
//     return this._b;
// }

// Rectangle.prototype.setB = function(value) {
//     if (this._numberValidator(value)) {
//         this._b = value;
//     }
// }

// Rectangle.prototype.calcPerim = function() {
//     this._resP = 2 * (this._a + this._b);
// }

// Rectangle.prototype.calcSq = function() {
//     this._resSq = this._a * this._b;
// }

// Rectangle.prototype._numberValidator = function(value) {
//     if (typeof value === 'number' && !isNaN(value) && value > 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// var calc = new Rectangle(12, 17);
// console.log(calc.getA(), calc.getB());
// calc.calcSq();
// console.log(calc._resSq);

// calc.setA(20);
// calc.setB(32);
// console.log(calc.getA(), calc.getB());

// calc.calcPerim();
// console.log(calc._resP);

// calc.calcSq();
// console.log(calc._resSq);


// модуль

var calcRectangle = (function() {
    var sideA = 5;
    var sideB = 7;


    var resPer = 0;
    var resSq = 0;

    function calcPer() {
        resPer = 2 * (sideA + sideB);
    }

    function calcSquare() {
        resSq = sideA * sideB;
    }

    return {
        setA: function(value) {
            if (typeof value === 'number' && !isNaN(value) && value > 0) {
                sideA = value;
            }
        },
        setB: function(value) {
            if (typeof value === 'number' && !isNaN(value) && value > 0) {
                sideB = value;
            }
        },
        calcPer: function() {
            return calcPer();
        },
        calcSquare: function() {
            return calcSquare();
        }
    }

}());