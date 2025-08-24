document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector(".horizontal-scroll");

  if (scrollContainer) {
    scrollContainer.addEventListener(
      "wheel",
      (e) => {
        // Si el usuario está intentando hacer scroll horizontal con el trackpad, lo respetamos
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

        e.preventDefault(); // bloquea el scroll vertical por defecto

        // Mueve horizontalmente de forma suave
        scrollContainer.scrollBy({
          left: e.deltaY, // usamos la rueda vertical para desplazar en X
          behavior: "smooth",
        });
      },
      { passive: false }
    );
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("show"); // abre/cierra menú
    // cambia el icono
    if (hamburger.textContent === "☰") {
      hamburger.textContent = "×"; // muestra X
    } else {
      hamburger.textContent = "☰"; // vuelve a hamburguesa
    }
  });
});
