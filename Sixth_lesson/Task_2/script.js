// Упрощенный синтаксис
var car = {
    model: 'Tesla',
    speed: 16,
    run: function() {
        console.log(car.model + ' едет со скоростью ' + car.speed);
    },
    stop: function() {
        console.log(car.model + ' остановилась');
    },

}

car.run();
car.stop();

// Синтаксис массивов

var car2 = {

}

car2['model'] = 'Tesla';
car2['speed'] = 16;
car2['run'] = function() {
    console.log(car.model + ' едет со скоростью ' + car.speed);
};

car2['stop'] = function() {
    console.log(car.model + ' остановилась');
};

car2['run']();
car2['stop']();

// Синтаксис стандратный

var car3 = {

}

car3.model = 'Tesla';
car3.speed = 16;
car3.run = function() {
    console.log(car.model + ' едет со скоростью ' + car.speed);
};
car3.stop = function() {
    console.log(car.model + ' остановилась');
};

car3.run();
car3.stop();