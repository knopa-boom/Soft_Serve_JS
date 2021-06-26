'use strict';

let mp3 = {
    _name: 'Hi-Fi_mini',
    _volumeState: 3,
    _currentTrack: 7,
    _state: 'off',
    _format: ['mp3', 'wav', 'wma'],

    get name() {
        return this._name;
    },

    set state(str) {
        this._state = str;
    },

    get state() {
        return this._state;
    },

    play() {
        this._state = 'on';
    },

    pause() {
        this._state = 'pause';
    },

    stop() {
        this._state = 'stop';
    },

    nextTrack() {
        this.currentTrack += 1;
    },

    prevTrack() {
        this.currentTrack -= 1;
    }


}

console.log(mp3.name);
console.log(mp3.state);