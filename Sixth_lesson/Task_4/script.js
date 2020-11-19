var MP3 = {
    model: 'Hi-Fi_mini',
    format: ['mp3', 'wav', 'wma'],
    state: 'off',
    volumeState: 5,
    currentTrack: 7,

    play: function() {
        MP3.state = 'on';
    },
    pause: function() {
        MP3.state = 'pause';
    },

    increaseVolume: function() {
        this.volumeState = this.volumeState + 2;
    },

    decreaseVolume: function() {
        this.volumeState = this.volumeState - 2;
    },

    nextTrack: function() {
        this.currentTrack++;
    },

    prevTrack: function() {
        this.currentTrack--;
    }
}

console.log(MP3.model);
console.log(MP3.format[1]);

MP3.play();
console.log(MP3.state);
MP3.pause();
console.log(MP3.state);

MP3.increaseVolume();
console.log(MP3.volumeState);
MP3.decreaseVolume();
console.log(MP3.volumeState);

MP3.nextTrack();
console.log(MP3.currentTrack);
MP3.prevTrack();
console.log(MP3.currentTrack);
