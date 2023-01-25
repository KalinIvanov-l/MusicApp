export const playAudio = (isPlaying, audioRef) => {
  if (isPlaying) {
    const playPro = audioRef.current.play();
    if (playPro !== undefined) {
      playPro.then((audio) => {
        audioRef.current.play();
      });
    }
  }
};
