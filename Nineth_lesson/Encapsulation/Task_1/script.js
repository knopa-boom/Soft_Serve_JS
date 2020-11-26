function Audioplayer(currentVolume) {
    if (this.__valueValidator(currentVolume)) {
        this.__currentVolume = currentVolume;
    } else {
        this.__currentVolume = 1;
    }
};

Audioplayer.prototype.getCurrentVolume = function() {
    return this.__currentVolume;
};

Audioplayer.prototype.setCurrentVolume = function(value) {
    if (this.__valueValidator(value)) {
        this.__currentVolume = value;
    }
};

Audioplayer.prototype.__valueValidator = function(value) {
    if (typeof value === 'number' && value >= 0 && value <= 100) {
        return true;
    } else {
        return false;
    }
};


/*метод геттер - сеттер
    Audioplayer.prototype.currentVolume = function(currentVolume) {
        if (currentVolume === undefined) {
            return this.__currentVolume;
        } else {
            if (this.__valueValidator(currentVolume)) {
                this.__currentVolume = currentVolume;
            }
        };
    };
**/

var audioplayer = new Audioplayer(20);
audioplayer.getCurrentVolume();
console.log(audioplayer.__currentVolume);
audioplayer.setCurrentVolume(45);
audioplayer.getCurrentVolume();
console.log(audioplayer.__currentVolume);

/* проверка для геттер-сеттер 
     audioplayer.currentVolume(26);
     console.log(audioplayer.__currentVolume)
*/
