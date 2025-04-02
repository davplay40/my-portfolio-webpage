document.getElementById("about-me-btn").addEventListener("click", function () {
  addingText(this.id);
})

function addingText(id) {
// this is for the about me button on the main page
  if (id === "about-me-btn") {
    document.getElementById("about-me-more-1").innerHTML =
      "When I was young I like to discover how different things are made which includes technology and after I got\n" +
      "laid off due to the impact of the Covid-19 pandemic on the company, I started doing an online course from gamedev.tv " +
      "which was unreal 4.22 c++ developer but I didn't finish it due to starting college.";
    document.getElementById("about-me-more-2").innerHTML =
      "I am well experienced in c# and Unity game engine and I have gained some experience working with Unreal engine. " +
      "I have worked with c++ both independently and in conjunction with the OpenGL library. " +
      "I have explored python and gained some hands-on experience with it";
  }

  //this is to remove the button after it is pressed
  var x = document.getElementById(id);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// this is for the main title type effect
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
