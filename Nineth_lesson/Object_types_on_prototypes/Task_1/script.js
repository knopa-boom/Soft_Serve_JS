function Mp3(model, state) {

    this.model = model;
    this.state = state;
    this.format = ['mp3', 'wav', 'wma'];
    this.volumeState = 5;
    this.currentTrack = 7;
}

Mp3.prototype.play = function() {
    this.state = 'on';
};
Mp3.prototype.pause = function() {
    this.state = 'pause';
};

Mp3.prototype.increaseVolume = function() {
    this.volumeState = this.volumeState + 2;
};

Mp3.prototype.decreaseVolume = function() {
    this.volumeState = this.volumeState - 2;
};

Mp3.prototype.nextTrack = function() {
    this.currentTrack++;
};

Mp3.prototype.prevTrack = function() {
    this.currentTrack--;
};

var mp3 = new Mp3('Hi-Fi_mini', 'off');
mp3.play();
console.log(mp3.state)