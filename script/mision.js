// Animación de tarjetas al hacer scroll
const tarjetas = document.querySelectorAll(".tarjeta");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

tarjetas.forEach(tarjeta => {
  observer.observe(tarjeta);
});

// Fondo animado: burbujas flotando con colores del logo
const canvas = document.getElementById("fondo");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas(); // inicializar tamaño

let colores = ["#0072CE", "#5EBB41", "#FFD23B", "#ffffff"];
let burbujas = [];

for (let i = 0; i < 30; i++) {
  burbujas.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 20 + 10,
    d: Math.random() * 2 + 1,
    color: colores[Math.floor(Math.random() * colores.length)]
  });
}

function dibujarBurbujas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  for (let i = 0; i < burbujas.length; i++) {
    let b = burbujas[i];
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2, true);
    ctx.fillStyle = b.color;
    ctx.fill();
  }
  
  moverBurbujas();
}

function moverBurbujas() {
  for (let i = 0; i < burbujas.length; i++) {
    let b = burbujas[i];
    b.y -= b.d;
    if (b.y < -b.r) {
      b.y = canvas.height + b.r;
      b.x = Math.random() * canvas.width;
      b.color = colores[Math.floor(Math.random() * colores.length)];
    }
  }
}

function animar() {
  dibujarBurbujas();
  requestAnimationFrame(animar);
}

animar();

// Ajustar tamaño al cambiar ventana
window.addEventListener("resize", resizeCanvas);
