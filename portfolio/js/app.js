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
