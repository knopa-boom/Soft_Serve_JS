'use strict';

function random(min, max, delay, callback) {
    var data;
    var error;
    if (min < max) {
        data = Math.random() * (max - min) + min;
    } else {
        error = new Error('value is incorrect');
    }
    setTimeout(function() {
        callback(error, data);
    }, delay);
}

random(1, 100, 2000, function(error, data) {
    if (error) {
        throw error;
    } else {
        console.log(data);
    }
});

random(1000, 100, 3000, function(error, data) {
    if (error) {
        throw error;
    } else {
        console.log(data);
    }
});