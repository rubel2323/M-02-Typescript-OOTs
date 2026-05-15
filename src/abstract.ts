interface Mediaplayer {
  play(): void;
  pause(): void;
  stop(): void;
}

class MusicPlayer implements Mediaplayer {
  play() {
    console.log('Playing music now...');
  }

  pause() {
    console.log('music player is paused');
  }

  stop(): void {
    console.log('music player is stopped');
  }
}

const habibPlayer = new MusicPlayer();
habibPlayer.stop();
habibPlayer.pause();
