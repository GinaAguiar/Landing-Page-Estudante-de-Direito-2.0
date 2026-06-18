const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const backToTop = document.getElementById("backToTop");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  const isOpen = navMenu.classList.contains("active");
  menuToggle.textContent = isOpen ? "✕" : "☰";
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-label", "Abrir menu");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("show", window.scrollY > 400);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const elements = document.querySelectorAll(
  ".hero-content, .hero-visual, .about-section, .law-card, .skill-box, .objectives-content, .objectives-image, .contact-section"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.15
});

elements.forEach((element) => observer.observe(element));
