document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".fade-in");

  function revealOnScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.90) {
        section.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run on page load
});
