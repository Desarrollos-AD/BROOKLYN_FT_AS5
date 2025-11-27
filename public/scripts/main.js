const toggleButton = document.getElementById("button-menu");
const links = document.querySelectorAll("nav__barra--enlaces--links");
const navMenu = document.getElementById("nav");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("close");
  navMenu.classList.toggle("show");
});

//Cierra menú al hacer clic fuera del menú
navMenu.addEventListener("click", (e) => {
  if (e.target.id === "nav") {
    navMenu.classList.remove("show");
    toggleButton.classList.remove("close");
  }
});

  // Cierra el menú cuando se hace clic en un enlace
  links.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      buttonMenu.classList.remove("active");
    });
  });

