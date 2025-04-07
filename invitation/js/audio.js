const playBtn = document.getElementById('playPause');
  const playIcon = document.getElementById('playIcon');
  const music = document.getElementById('bgMusic');

  playBtn.addEventListener('click', () => {
    if (music.paused) {
      music.play();
      playIcon.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
      music.pause();
      playIcon.innerHTML = '<i class="fas fa-play"></i>';
    }
  });