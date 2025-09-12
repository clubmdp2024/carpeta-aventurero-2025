// Ejemplo: pausar el video con un click
const video = document.getElementById('video-fondo');
video.addEventListener('click', () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});
document.querySelectorAll('.timon').forEach(timon => {
  timon.addEventListener('click', () => {
    // Evita que se dispare varias veces
    if (timon.classList.contains('girar')) return;

    // Agregar animación de giro
    timon.classList.add('girar');

    // Esperar a que termine la animación y luego redirigir
    setTimeout(() => {
      window.location.href = timon.dataset.url;
    }, 1000); // 1 segundo = mismo tiempo que el CSS
  });
});
