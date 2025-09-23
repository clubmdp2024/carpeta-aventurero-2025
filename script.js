// Crear overlay de transición
const transitionOverlay = document.createElement("div");
transitionOverlay.classList.add("page-transition");
document.body.appendChild(transitionOverlay);

const timones = document.querySelectorAll(".timon");

timones.forEach(timon => {
  timon.addEventListener("click", () => {
    const destino = timon.getAttribute("data-url");

    // Animación de giro
    timon.classList.add("girar");

    // Animación de salida de la página actual
    document.body.classList.add("page-exit");

    // Flash + redirección
    setTimeout(() => {
      transitionOverlay.classList.add("active");
      setTimeout(() => {
        window.location.href = destino;
      }, 1200); // duración del flash
    }, 800); // duración de salida
  });
});
