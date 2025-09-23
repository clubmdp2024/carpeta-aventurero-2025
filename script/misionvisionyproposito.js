// ---- Entrada sincronizada con transición ----
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelectorAll(".page-element").forEach((el, i) => {
      setTimeout(() => el.classList.add("show"), i * 200);
    });
  }, 600); // coincide con el flash blanco
});

// ---- Fondo animado: burbujas flotando ----
const canvas = document.getElementById("fondo");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();

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
  
  for (let b of burbujas) {
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2, true);
    ctx.fillStyle = b.color;
    ctx.fill();
  }
  
  moverBurbujas();
}

function moverBurbujas() {
  for (let b of burbujas) {
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

window.addEventListener("resize", resizeCanvas);
