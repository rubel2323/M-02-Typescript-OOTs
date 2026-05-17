
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

// Abstract class
// idea
abstract class SocialMediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;

  showInfo(): void {
    console.log('The version is 4.0.9.0');
  }
}

// implementation

class SocialMusicPlayer extends SocialMediaPlayer {
  play() {
    console.log('playing music from abstract class');
  }
  pause() {
    console.log('paused music from abstract class');
  }
  stop() {
    console.log('paused music from abstract class');
  }
}

const SocialMusicPlayer1 = new SocialMusicPlayer();
SocialMusicPlayer1.play();
SocialMusicPlayer1.stop();
SocialMusicPlayer1.showInfo();
