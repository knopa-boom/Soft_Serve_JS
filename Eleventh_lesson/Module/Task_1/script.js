// модуль

var calcRectangle = (function() {
    var sideA = 5;
    var sideB = 7;


    var resPer = 0;
    var resSq = 0;

    function calcPer() {
        return resPer = 2 * (sideA + sideB);
    }

    function calcSquare() {
        return resSq = sideA * sideB;
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
