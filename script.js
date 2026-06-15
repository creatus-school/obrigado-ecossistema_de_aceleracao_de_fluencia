// script.js — Ecossistema de Aceleração de Fluência

document.addEventListener('DOMContentLoaded', () => {
  console.log('Página de obrigado carregada com sucesso.');

  const playBtn   = document.getElementById('playBtn');
  const playerBox = document.getElementById('playerBox');
  const ytPlayer  = document.getElementById('ytPlayer');

  // Coloque aqui o mesmo ID que você usou no HTML
  const videoId = 'NUXp1qCFliQ';

  if (playBtn && playerBox && ytPlayer) {
    playBtn.addEventListener('click', () => {
      ytPlayer.src =
        `https://www.youtube-nocookie.com/embed/${videoId}` +
        `?autoplay=1&controls=0&rel=0&modestbranding=1&fs=0` +
        `&iv_load_policy=3&disablekb=1&playsinline=1`;

      playerBox.classList.remove('hidden');
      playBtn.classList.add('hidden');
    });
  }
});