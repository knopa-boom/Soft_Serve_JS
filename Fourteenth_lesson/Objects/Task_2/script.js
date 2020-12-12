'use strict';

let mp3 = {
    _name: 'Hi-Fi_mini',
    volumeState: 3,
    currentTrack: 7,
    state: 'off',
    format: ['mp3', 'wav', 'wma'],

    get name() {
        return this._name;
    },

    set state(str) {
        this.state = str;
    },

    get state() {
        return this.state;
    },

    play() {
        this.state = 'on';
    },

    pause() {
        this.state = 'pause';
    },

    stop() {
        this.state = 'stop';
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