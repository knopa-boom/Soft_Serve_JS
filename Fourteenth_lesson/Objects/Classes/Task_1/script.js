'use strict';

class Mp3 {
    constructor(name) {
        this._name = name;
        this._volumeState = 3;
        this._currentTrack = 7;
        this._state = 'stop';
    }

    get name() {
        return this._name;
    }

    get volumeState() {
        return this._volumeState;
    }

    set volumeState(num) {
        if (typeof num == 'number' && !isNaN(num)) {
            this._volumeState = num;
        }
    }

    get currentTrack() {
        return this._currentTrack;
    }

    set currentTrack(num) {
        if (typeof num == 'number' && !isNaN(num)) {
            this._currentTrack = num;
        }
    }

    get state() {
        return this._state;
    }

    play() {
        this._state = 'play';
    }

    stop() {
        this._state = 'stop';
    }

    pause() {
        this._state = 'pause';
    }

    nextTrack() {
        this._currentTrack += 1;
    }

    prevTrack() {
        this._currentTrack -= 1;
    }

    increaseVolume() {
        this._volumeState += 2;
    }

    decreaseVolume() {
        this._volumeState -= 2;
    }

}

const mp3 = new Mp3('mp3-player');