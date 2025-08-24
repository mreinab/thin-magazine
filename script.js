document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  const slider = document.querySelector(".horizontal-scroll");
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  if (slider && main) {
    // --- Scroll horizontal con la rueda en todo el main ---
    main.addEventListener(
      "wheel",
      (e) => {
        // si el usuario está haciendo scroll horizontal real, lo dejamos
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

        e.preventDefault();
        slider.scrollBy({
          left: e.deltaY,
          behavior: "smooth",
        });
      },
      { passive: false }
    );

    // --- Drag to scroll ---
    let isDragging = false;
    let startX;
    let scrollStart;
    let moved = false;

    slider.addEventListener("mousedown", (e) => {
      isDragging = true;
      moved = false;
      startX = e.pageX - slider.offsetLeft;
      scrollStart = slider.scrollLeft;
      slider.style.cursor = "grabbing";
      e.preventDefault();
    });

    slider.addEventListener("mouseleave", () => {
      isDragging = false;
      slider.style.cursor = "grab";
    });

    slider.addEventListener("mouseup", () => {
      isDragging = false;
      slider.style.cursor = "grab";
    });

    slider.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      moved = true;
      const x = e.pageX - slider.offsetLeft;
      const walk = x - startX;
      slider.scrollLeft = scrollStart - walk;
    });

    // Evita clicks en <a> si hubo arrastre
    slider.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", (e) => {
        if (moved) e.preventDefault();
      });
    });

    // Cursor inicial
    slider.style.cursor = "grab";
  }

  // --- Menú hamburguesa ---
  if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
      menu.classList.toggle("show");
      hamburger.textContent = hamburger.textContent === "☰" ? "×" : "☰";
    });
  }
});
