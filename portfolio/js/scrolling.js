const currentPath = window.location.pathname;

if (currentPath === "/portfolio/index.html" || currentPath === "/portfolio/Projects/index.html"||
  currentPath === "/portfolio/Game-jams/index.html") {
  const w = window.innerWidth;
  window.onload = function() {
    w.innerHTML = window.innerWidth;
    sizeChange()
  }
  window.onresize = function() {
    sizeChange()
  }

  window.addEventListener('resize', sizeChange)
  const portfolio = document.getElementById("Portfolio");

  function sizeChange() {

    if (portfolio) {
      if (window.innerWidth < 1000) {
        portfolio.style.gridTemplateColumns = "repeat(1, minmax(400px, 1fr))";
      }
      else if (window.innerWidth >= 1000 && window.innerWidth < 1841) {
        portfolio.style.gridTemplateColumns = "repeat(2, minmax(400px, 1fr))";
      }
      else if (window.innerWidth >= 1841) {
        portfolio.style.gridTemplateColumns = "repeat(3, minmax(400px, 1fr))";
      }
    }
  }
}

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
