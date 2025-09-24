// Elegir qué carpeta mostrar en el carrusel:
const allImages = [
  ...capacitacionTotumo,
  ...diaMundialAventurero,
  ...diaMundialJoven,
  ...entrenamiento
  // puedes agregar todas las que quieras aquí
];

const carouselImages = document.getElementById("carousel-images");

allImages.forEach(url => {
  const img = document.createElement("img");
  img.src = url;
  carouselImages.appendChild(img);
});

// --- Función de navegación ---
let index = 0;
function showSlide(n) {
  const slides = document.querySelectorAll("#carousel-images img");
  if (n >= slides.length) index = 0;
  if (n < 0) index = slides.length - 1;
  carouselImages.style.transform = `translateX(${-index * 100}%)`;
}

document.querySelector(".next").addEventListener("click", () => {
  index++;
  showSlide(index);
});
document.querySelector(".prev").addEventListener("click", () => {
  index--;
  showSlide(index);
});

showSlide(index);
