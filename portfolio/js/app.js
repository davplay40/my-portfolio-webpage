document.getElementById("about-me-btn").addEventListener("click", function () {
  addingText(this.id);
})

function addingText(id) {

  if (id === "about-me-btn") {
    document.getElementById("about-me-more-1").innerHTML =
      "When I was young I like to discover how different things are made which includes technology and after I got\n" +
      "laid off due to the Covid-19 pandemic, I started doing an online course from gamedev.tv which was \n" +
      "unreal 4.22 c++ developer but I didn't finish it due to starting college.";
    document.getElementById("about-me-more-2").innerHTML =
      "I have dabbled in python a bit, while I used c# for Unity Games and c++ with OpenGL or with Unreal engine.";
  }

  var x = document.getElementById(id);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("main-title-text");
  const text = "David hunter's developer portfolio";
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      textElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeEffect, 50); // Adjust speed (50ms per character)
    }
  }

  typeEffect(); // Start typing effect on page load
});
