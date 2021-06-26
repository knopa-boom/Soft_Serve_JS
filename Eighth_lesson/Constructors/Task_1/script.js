function Mp3(model, state) {

    this.model = model;
    this.state = state;
    this.format = ['mp3', 'wav', 'wma'];
    this.volumeState = 5;
    this.currentTrack = 7;

    this.play = function() {
        this.state = 'on';
    };
    this.pause = function() {
        this.state = 'pause';
    };

    this.increaseVolume = function() {
        this.volumeState = this.volumeState + 2;
    };

    this.decreaseVolume = function() {
        this.volumeState = this.volumeState - 2;
    };

    this.nextTrack = function() {
        this.currentTrack++;
    };

    this.prevTrack = function() {
        this.currentTrack--;
    };

    this.stop = function(stopState) {
        console.log(this.model + " имеет состояние " + stopState.state);
    };

}


function StopPlayer(state) {
    this.state = state;
}

var mp3 = new Mp3('Hi-Fi_mini', 'off');

var stopPlayer = new StopPlayer('stop');

mp3.stop(stopPlayer);