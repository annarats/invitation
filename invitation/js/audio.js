const playBtn = document.getElementById('playPause');
  const playIcon = document.getElementById('playIcon');
  const music = document.getElementById('bgMusic');

  playBtn.addEventListener('click', () => {
    if (music.paused) {
      music.play();
      playIcon.innerHTML = '&#10073;&#10073;';
    } else {
      music.pause();
      playIcon.innerHTML = '&#9658;';
    }
  });